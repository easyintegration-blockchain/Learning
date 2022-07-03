"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KameletApi = exports.Kamelets = void 0;
/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var KameletModels_1 = require("../model/KameletModels");
var yaml = require("js-yaml");
exports.Kamelets = [];
exports.KameletApi = {
    getKameletProperties: function (kameletName) {
        var kamelet = exports.KameletApi.findKameletByName(kameletName);
        var properties = [];
        try {
            if (kamelet !== undefined) {
                var map = kamelet.spec.definition.properties ? new Map(Object.entries(kamelet.spec.definition.properties)) : new Map();
                map.forEach(function (value, key, map) {
                    var prop = new KameletModels_1.Property();
                    prop.id = key;
                    prop.title = value.title;
                    prop.default = value.default;
                    prop.description = value.description;
                    prop.format = value.format;
                    prop.example = value.example;
                    prop.type = value.type;
                    if (value.default)
                        prop.value = value.default;
                    prop["x-descriptors"] = value["x-descriptors"];
                    properties.push(prop);
                });
            }
        }
        finally {
            return properties;
        }
    },
    getKamelets: function () {
        return exports.Kamelets.sort(function (a, b) {
            if (a.title().toLowerCase() < b.title().toLowerCase()) {
                return -1;
            }
            return a.title().toLowerCase() > b.title().toLowerCase() ? 1 : 0;
        });
    },
    jsonToKamelet: function (json) {
        var fromJson = JSON.parse(json);
        var k = new KameletModels_1.KameletModel(fromJson);
        return k;
    },
    findKameletByName: function (name) {
        return exports.Kamelets.find(function (k) { return k.metadata.name === name; });
    },
    findKameletByUri: function (uri) {
        return exports.KameletApi.findKameletByName(uri.split(":")[1]);
    },
    yamlToKamelet: function (text) {
        var fromYaml = yaml.load(text);
        return exports.KameletApi.jsonToKamelet(JSON.stringify(fromYaml));
    },
    saveKamelets: function (kameletYamls, clean) {
        if (clean === void 0) { clean = false; }
        var kamelets = kameletYamls.map(function (text) { return exports.KameletApi.yamlToKamelet(text); });
        if (clean)
            exports.Kamelets.length = 0;
        exports.Kamelets.push.apply(exports.Kamelets, kamelets.sort(function (a, b) {
            if (a.spec.definition.title.toLowerCase() < b.spec.definition.title.toLowerCase()) {
                return -1;
            }
            return a.spec.definition.title.toLowerCase() > b.spec.definition.title.toLowerCase() ? 1 : 0;
        }));
    },
    saveKamelet: function (yaml) {
        var kamelet = exports.KameletApi.yamlToKamelet(yaml);
        exports.Kamelets.push(kamelet);
    }
};
