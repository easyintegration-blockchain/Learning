#!/bin/bash

## Core Api Project
quarkus create app org.easyintegration.blockchain:core \
--extension=quarkus-arc \
--extension=quarkus-vertx \
--extension=camel-quarkus-core \
--extension=camel-quarkus-kamelet \
--extension=camel-quarkus-yaml-dsl \
--extension=quarkus-resteasy-reactive

## Core Web Project
cd core/src/main/webapp
npx create-react-app . --template typescript
npm install @patternfly/patternfly @patternfly/react-core --save