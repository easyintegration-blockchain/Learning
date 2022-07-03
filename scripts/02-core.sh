#!/bin/bash

## Core Api Project
quarkus create app org.easyintegration.blockchain:core \
--extension=quarkus-arc \
--extension=quarkus-vertx \
--extension=camel-quarkus-core \
--extension=camel-quarkus-kamelet \
--extension=camel-quarkus-yaml-dsl \
--extension=quarkus-quinoa \
--extension=quarkus-resteasy-reactive

quarkus extension add quarkus-quinoa

## Core Quarkus Project
cd core
quarkus dev

## Core Web Project
cd core/src/main/webapp
npx create-react-app . --template typescript
npm install @patternfly/patternfly @patternfly/react-core @patternfly/react-table react-router-dom uuid rxjs axios dagre @types/js-yaml @reactour/tour @types/uuid --save
npm run quarkus-webapp