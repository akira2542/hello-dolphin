
// Define variables
def scmVars

// Start Pipeline
pipeline {

  // Configure Jenkins Slave
  agent any
    environment {
    ENV_NAME = "${BRANCH_NAME == "master" ? "develop" : "${BRANCH_NAME}"}"
  }

  // Start Pipeline
  stages {

    stage('Clone HelloCockatiel-WebPR code') {
      // Steps to run build
      steps {
          // Use script to run
          script {
            // Git clone repo and checkout branch as we put in parameter
            scmVars = git branch: "${BRANCH_NAME}",
                          url: 'https://github.com/gun082544/HelloCockatiel-PR.git'
          } // End script
      } // End steps
    } // End stage

    stage('Install dependencies and build files') {
      steps {

          sh'''
            #!/bin/bash
            source ~/.bash_profile
            yarn
          '''
          sh'''
            #!/bin/bash
            source ~/.bash_profile
            yarn build
          '''
      } // End steps
    } // End stage

    stage('Build Docker Image') {
      steps {
        sh' sudo docker build -t hellocockatiel . '
      } // End steps
    } // End stage

    stage('Tagging Docker Image') {
      steps{
        sh' sudo tag hellocockatiel gunfluenza/hellocockatiel:build-${BUILD_NUMBER}'
      }
    }
    
    stage('Push image to Docker hub') {
      steps{
        sh' sudo docker push gunfluenza/hellocockatiel:build-${BUILD_NUMBER} '
      }
    }
    
    stage('Deploy HelloCockatiel WebPR on Helm') {
      steps {
              sh "helm upgrade -i -f Hellocockatiel-PR/values.yaml --wait --namespace=develop hellodeploy  Hellocockatiel-PR "
      } // End steps
    } // End stage


  } // End stages
} // End pipeline
