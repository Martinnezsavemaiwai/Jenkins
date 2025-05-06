pipeline {
    agent any

    environment {
        FIREBASE_TOKEN  = credentials('firebase-token')   // Secret text ใน Jenkins Credentials
        FIREBASE_PROJECT = 'assignment5-cloud-f2caa'      // Firebase Project ID
        DOCKER_IMAGE = 'frontend-image:latest'             
    }

    stages {
        stage('Checkout') {
            steps {
                echo '🔄 Cloning repository...'
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

        stage('Build Backend Docker Image') {
            steps {
                echo 'Building backend Docker image...'
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Run Backend Container (Dev/Test)') {
            steps {
                echo 'Running backend container...'
                sh 'docker run -d -p 5000:5000 $DOCKER_IMAGE'
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
