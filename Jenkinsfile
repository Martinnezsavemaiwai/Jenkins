pipeline {
    agent {
        docker {
            image 'node:18'
        }
    }

    environment {
        FIREBASE_TOKEN  = credentials('firebase-token')   // Secret text ใน Jenkins Credentials
        FIREBASE_PROJECT = 'assignment5-cloud-f2caa'      // Firebase Project ID
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Cloning repository...'
                checkout scm
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    echo 'Installing frontend dependencies...'
                    sh 'npm ci' 

                    echo 'Building frontend with Vite...'
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy Frontend to Firebase') {
            steps {
                dir('frontend') {
                    echo 'Deploying frontend to Firebase Hosting...'
                    sh 'npx firebase deploy --only hosting --project=$FIREBASE_PROJECT --token=$FIREBASE_TOKEN'
                }
            }
        }

    }

    post {
        always {
            echo 'Cleaning up Docker containers...'
            sh 'docker ps -aq | xargs -r docker rm -f || true'
        }
    }
}
