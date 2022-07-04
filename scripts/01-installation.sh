#!/bin/bash

## Java /home/gitpod/.sdkman/candidates/java/11.0.15.fx-zulu
## Install 
sudo apt-get install dos2unix -y
sudo apt-get install rsync -y

## Jbang Installation
curl -Ls https://sh.jbang.dev | bash -s - app setup
jbang --version

## Quarkus Installation
jbang trust add https://repo1.maven.org/maven2/io/quarkus/quarkus-cli/
jbang app install quarkus@quarkusio 
quarkus --version

## Camel Installation
jbang trust add  https://github.com/apache/
jbang app install camel@apache/camel 
camel --version