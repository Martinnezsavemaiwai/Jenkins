pipeline {
    agent {
        docker {
            image 'node:20'     // หรือเวอร์ชันอื่นที่คุณใช้
            args '-u root'      // เพื่อให้สิทธิ์เขียนไฟล์
        }
    }
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
                    sh 'npm install'
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
