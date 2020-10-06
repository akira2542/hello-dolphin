
// Define variables
def scmVars

// Start Pipeline
pipeline {

  // Configure Jenkins Slave
  agent any
    environment {
    ENV_NAME = "${BRANCH_NAME == "master" ? "dev" : "${BRANCH_NAME}"}"
  }

  // Start Pipeline
  stages {

    stage('Clone Hellodolphin-WebPR code') {
      // Steps to run build
      steps {
          // Use script to run
          script {
            // Git clone repo and checkout branch as we put in parameter
            scmVars = git branch: "${BRANCH_NAME}",
                          url: 'https://github.com/akira2542/hello-dolphin.git'
          } // End script
      } // End steps
    } // End stage

    stage('Install dependencies and build files') {
      steps {
          sh 'whoami'
          sh 'pwd'
          sh 'ls'
          sh'''
            #!/bin/bash
            whoami
            . ~/.bash_profile
            yarn
          '''
          sh'''
            #!/bin/bash
            . ~/.bash_profile
            yarn build
          '''
      } // End steps
    } // End stage

    stage('Build Docker Image') {
      steps {
        sh' sudo docker build -t hellodolphin . '
      } // End steps
    } // End stage

    stage('Tagging Docker Image') {
      steps{
        sh' sudo docker tag hellodolphin gunfluenza/hellodolphin:${BRANCH_NAME}'
      }
    }
    
    stage('Push image to Docker hub') {
      steps{
        sh' sudo docker push gunfluenza/hellodolphin:${BRANCH_NAME}'
      }
    }
   
    stage('Delete old Hellodolphin WebPR on Helm') {
      steps {
        sh "helm uninstall webpr${BRANCH_NAME} -n ${BRANCH_NAME}"
      } // End steps
    } // End stage
    
    stage('Deploy new Hellodolphin WebPR on Helm') {
      steps {
              sh "helm upgrade -i -f Hello-dolphinHelm/Hello-dolphin-${BRANCH_NAME}/values.yaml --wait --namespace=${BRANCH_NAME} webpr${BRANCH_NAME} Hello-dolphinHelm/Hello-dolphin-${BRANCH_NAME}"
      } // End steps
    } // End stage


  } // End stages
} // End pipeline
