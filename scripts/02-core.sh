#!/bin/bash

quarkus create app org.easyintegration.blockchain:core \
--extension=quarkus-arc \
--extension=quarkus-vertx \
--extension=camel-quarkus-core \
--extension=camel-quarkus-kamelet \
--extension=camel-quarkus-yaml-dsl 