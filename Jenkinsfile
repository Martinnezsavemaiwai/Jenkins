pipeline {
    agent any
    environment {
        FIREBASE_TOKEN  = credentials('firebase-token')   // ต้องเพิ่มใน Jenkins Credentials
        FIREBASE_PROJECT = 'assignment5-cloud-f2caa'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm ci'
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy to Firebase') {
            steps {
                dir('frontend') {
                    sh 'npx firebase deploy --only hosting --project=$FIREBASE_PROJECT --token=$FIREBASE_TOKEN'
                }
            }
        }
    }
}
