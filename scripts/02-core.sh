#!/bin/bash

quarkus create app org.easyintegration.blockchain:core \
--extension=quarkus-arc \
--extension=quarkus-vertx \
--extension=camel-quarkus-core-model \
--extension=camel-quarkus-catalog \
--extension=camel-quarkus-yaml-dsl \
--extension=camel-quarkus-kamelets-catalog \
--extension=camel-quarkus-jbang-core