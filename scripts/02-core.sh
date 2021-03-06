#!/bin/bash

## Core Api Project
quarkus create app org.easyintegration.blockchain:core \
--extension=quarkus-arc \
--extension=quarkus-vertx \
--extension=camel-quarkus-core \
--extension=camel-quarkus-kamelet \
--extension=camel-quarkus-yaml-dsl \
--extension=quarkus-quinoa \
--extension=resteasy-reactive-jackson \
--extension=quarkus-resteasy-reactive

quarkus extension add quarkus-quinoa

## Core Quarkus Project 
cd core
quarkus dev

## Core Web Project - https://quarkiverse.github.io/quarkiverse-docs/quarkus-quinoa/dev/
cd core/src/main/webapp
npx create-react-app . --template typescript
npm install @patternfly/patternfly @patternfly/react-core @patternfly/react-table react-router-dom uuid rxjs axios dagre @types/js-yaml @reactour/tour @types/uuid --save

## Building Karvana App
mvn -f karavan-generator clean package
cd karavan-core && npm install 
npm run build
cd ..
cd karavan-designer/ && npm run start 
cd ..
mvn -f karavan-app -DskipTest -Dquarkus.container-image.build=false -Dquarkus.container-image.push=false
java -jar karavan-app/target/karavan-0.0.16-runner.jar
