#!/bin/bash

## Jbang Installation
curl -Ls https://sh.jbang.dev | bash -s - app setup
jbang --version

## Quarkus Installation
jbang app install quarkus@quarkusio
quarkus --version

## Camel Installation
jbang app install camel@apache/camel
camel --version
# camel export --runtime=quarkus
export runtime=quarkus