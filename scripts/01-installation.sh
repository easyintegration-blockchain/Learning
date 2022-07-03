#!/bin/bash

## Java /home/gitpod/.sdkman/candidates/java/11.0.15.fx-zulu
## Install 
sudo apt-get install dos2unix -y
sudo apt-get install rsync -y

## Jbang Installation
curl -Ls https://sh.jbang.dev | bash -s - app setup
jbang --version

## Quarkus Installation
jbang app install quarkus@quarkusio
quarkus --version

## Camel Installation
jbang app install camel@apache/camel
camel --version