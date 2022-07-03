"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectModelApi = void 0;
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
var ProjectModel_1 = require("../model/ProjectModel");
var ProjectModelApi = /** @class */ (function () {
    function ProjectModelApi() {
    }
    var _a;
    _a = ProjectModelApi;
    ProjectModelApi.propertiesToProject = function (properties) {
        var lines = properties.split(/\r?\n/).filter(function (text) { return text.trim().length > 0 && !text.trim().startsWith("#"); });
        var project = new ProjectModel_1.ProjectModel();
        project.properties = lines.map(function (value) { return _a.stringToProperty(value); });
        return project;
    };
    ProjectModelApi.stringToProperty = function (line) {
        var pair = line.split("=");
        var value = pair[1];
        return ProjectModel_1.ProjectProperty.createNew(pair[0], value);
    };
    ProjectModelApi.propertiesToString = function (properties) {
        var result = [];
        properties.forEach(function (p, key) {
            if (p !== undefined)
                result.push(p.key + "=" + p.value);
        });
        return result.join("\n");
    };
    ProjectModelApi.getProfiles = function (properties) {
        var result = [];
        properties.forEach(function (p, key) {
            if (p.key.startsWith("%")) {
                var profile = p.key.substring(1, p.key.indexOf("."));
                if (!result.includes(profile))
                    result.push(profile);
            }
        });
        return result;
    };
    ProjectModelApi.updateProperties = function (properties, project) {
        var mapFromProject = _a.projectToMap(project);
        var result = [];
        mapFromProject.forEach(function (value, key) {
            if (value !== undefined)
                result.push(key + "=" + value);
        });
        return result.join("\n");
    };
    ProjectModelApi.projectToMap = function (project) {
        var map = new Map();
        if (project.properties && project.properties.length > 0) {
            project.properties.forEach(function (p) { return map.set(p.key, p.value); });
        }
        return map;
    };
    return ProjectModelApi;
}());
exports.ProjectModelApi = ProjectModelApi;
