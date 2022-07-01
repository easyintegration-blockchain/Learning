"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentApi = exports.Components = void 0;
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
var ComponentModels_1 = require("../model/ComponentModels");
exports.Components = [];
exports.ComponentApi = {
    jsonToComponent: function (json) {
        var fromJson = JSON.parse(json);
        var k = new ComponentModels_1.Component(fromJson);
        return k;
    },
    saveComponents: function (jsons, clean) {
        if (clean === void 0) { clean = false; }
        if (clean)
            exports.Components.length = 0;
        var components = jsons.map(function (json) { return exports.ComponentApi.jsonToComponent(json); });
        exports.Components.push.apply(exports.Components, components);
    },
    saveComponent: function (json) {
        var component = exports.ComponentApi.jsonToComponent(json);
        exports.Components.push(component);
    },
    getComponents: function () {
        return exports.Components.sort(function (a, b) {
            if (a.component.name < b.component.name) {
                return -1;
            }
            return a.component.name > b.component.name ? 1 : 0;
        });
    },
    findByName: function (name) {
        return exports.Components.find(function (c) { return c.component.name === name; });
    },
    getComponentNameFromUri: function (uri) {
        return uri.split(":")[0];
    },
    getComponentTitleFromUri: function (uri) {
        var _a;
        var componentName = uri.split(":")[0];
        var title = (_a = exports.ComponentApi.findByName(componentName)) === null || _a === void 0 ? void 0 : _a.component.title;
        return title ? title : componentName;
    },
    getComponentDescriptionFromUri: function (uri) {
        var _a;
        var componentName = uri.split(":")[0];
        var description = (_a = exports.ComponentApi.findByName(componentName)) === null || _a === void 0 ? void 0 : _a.component.description;
        return description ? description : componentName;
    },
    getUriParts: function (uri) {
        var result = new Map();
        var name = exports.ComponentApi.getComponentNameFromUri(uri);
        if (name) {
            var component = exports.ComponentApi.findByName(name);
            var syntax = component === null || component === void 0 ? void 0 : component.component.syntax;
            var syntaxParts_1 = exports.ComponentApi.parseSyntax(syntax + '');
            var syntaxSeparators_1 = exports.ComponentApi.getSyntaxSeparators(syntax + '');
            var newUri_1 = uri === name ? name + syntaxSeparators_1.join('') : uri;
            result.set(name, name);
            if (name === 'cxf') { // workaround for CXF component
                var cxfParts = newUri_1.split(":");
                var firstPart = cxfParts.at(1);
                var secondPart = cxfParts.at(2);
                if (cxfParts.length === 3 && firstPart === 'bean' && secondPart)
                    result.set("beanId", firstPart + ":" + secondPart);
                if (cxfParts.length === 2 && (firstPart === null || firstPart === void 0 ? void 0 : firstPart.startsWith("//")))
                    result.set("address", firstPart);
            }
            else if (name === 'jt400') { // workaround for JT400 component
                var jt400Parts = newUri_1.split(".").join(':').split('/').join(':').split('@').join(':').split(':');
                var userID = jt400Parts.at(1) || '';
                var password = jt400Parts.at(2) || '';
                var systemName = jt400Parts.at(3) || '';
                var objectPath = jt400Parts.at(4) || '';
                var type = jt400Parts.at(5) || '';
                result.set("userID", userID);
                result.set("password", password);
                result.set("systemName", systemName);
                result.set("objectPath", objectPath);
                result.set("type", type);
            }
            else { // workaround for CXF component end
                syntaxParts_1.filter(function (x, i) { return i > 0; }).forEach(function (part, index) {
                    if (index < syntaxParts_1.length - 1) {
                        var startSeparator = syntaxSeparators_1[index];
                        var endSeparator = syntaxSeparators_1[index + 1];
                        var start = newUri_1.indexOf(startSeparator) + startSeparator.length;
                        var end = endSeparator ? newUri_1.indexOf(endSeparator, start) : newUri_1.length;
                        var val = newUri_1.substr(start, end - start);
                        result.set(part, val);
                        newUri_1 = newUri_1.substr(end);
                    }
                });
            }
        }
        return result;
    },
    parseSyntax: function (syntax) {
        var separators = ['://', '//', ':', '/', '#'];
        var simplifiedSyntax = '' + syntax;
        separators.forEach(function (s) {
            simplifiedSyntax = simplifiedSyntax === null || simplifiedSyntax === void 0 ? void 0 : simplifiedSyntax.replaceAll(s, ":");
        });
        return simplifiedSyntax.split(":");
    },
    getSyntaxSeparators: function (syntax) {
        var result = [];
        var parts = exports.ComponentApi.parseSyntax(syntax);
        var str = '';
        parts.forEach(function (part, index) {
            if (index < parts.length - 1) {
                var start = syntax.indexOf(part, str.length) + part.length;
                var end = syntax.indexOf(parts[index + 1], start);
                var separator = syntax.substr(start, end - start);
                result.push(separator);
                str = str + part + separator;
            }
        });
        return result;
    },
    parseUri: function (uri) {
        var separators = ['://', '//', ':', '/', '#'];
        var simplifiedUri = '' + uri;
        separators.forEach(function (s) {
            simplifiedUri = simplifiedUri === null || simplifiedUri === void 0 ? void 0 : simplifiedUri.replaceAll(s, ":");
        });
        return simplifiedUri.split(":");
    },
    getUriSeparators: function (uri) {
        var result = [];
        var name = exports.ComponentApi.getComponentNameFromUri(uri);
        if (name) {
            var component = exports.ComponentApi.findByName(name);
            var syntax_1 = '' + (component === null || component === void 0 ? void 0 : component.component.syntax);
            var parts_1 = Array.from(exports.ComponentApi.getUriParts(uri).keys());
            var str_1 = '';
            parts_1.forEach(function (part, index) {
                if (index < parts_1.length - 1) {
                    var start = syntax_1.indexOf(part, str_1.length) + part.length;
                    var end = syntax_1.indexOf(parts_1[index + 1], start);
                    var separator = syntax_1.substr(start, end - start);
                    result.push(separator);
                    str_1 = str_1 + part + separator;
                }
            });
        }
        return result;
    },
    getPathParameterValue: function (uri, pathParameter) {
        return exports.ComponentApi.getUriParts(uri).get(pathParameter);
    },
    buildComponentUri: function (uri, pathParameter, pathParameterValue) {
        var name = exports.ComponentApi.getComponentNameFromUri(uri);
        if (name) {
            // workaround for CXF component start
            if (name === 'cxf') {
                if (pathParameter === 'beanId' && pathParameterValue && pathParameterValue.trim().length > 0)
                    return "cxf:" + pathParameterValue;
                if (pathParameter === 'address' && pathParameterValue && pathParameterValue.trim().length > 0)
                    return "cxf:" + pathParameterValue;
            }
            else { // workaround for CXF component end
                var map_1 = exports.ComponentApi.getUriParts(uri);
                map_1.set(pathParameter, pathParameterValue);
                var separators_1 = exports.ComponentApi.getUriSeparators(uri);
                var result_1 = [];
                Array.from(map_1.keys()).forEach(function (key, index) {
                    var val = map_1.get(key);
                    result_1.push(val ? val : '');
                    result_1.push(separators_1[index]);
                });
                return result_1.join('');
            }
        }
        return uri;
    },
    getComponentProperties: function (componentName, type) {
        var invertedType = type === 'consumer' ? 'producer' : 'consumer';
        var component = exports.ComponentApi.findByName(componentName);
        var properties = [];
        try {
            if (component !== undefined) {
                var map = component.properties ? new Map(Object.entries(component.properties)) : new Map();
                map.forEach(function (value, key, map) {
                    var prop = new ComponentModels_1.ComponentProperty();
                    prop.name = key;
                    prop.label = value.label;
                    prop.description = value.description;
                    prop.type = value.type;
                    prop.displayName = value.displayName;
                    prop.group = value.group;
                    prop.type = value.type;
                    prop.deprecated = value.deprecated;
                    prop.secret = value.secret;
                    prop.enum = value.enum;
                    prop.kind = value.kind;
                    prop.required = value.required;
                    if (value.defaultValue)
                        prop.defaultValue = value.defaultValue;
                    if (!value.deprecated)
                        properties.push(prop);
                });
            }
        }
        finally {
            var result = [];
            result.push.apply(result, properties.filter(function (p) { return p.kind === 'path'; }));
            result.push.apply(result, properties.filter(function (p) { return p.kind !== 'path' && p.required; }));
            result.push.apply(result, properties.filter(function (p) { return p.label.length === 0 && p.kind !== 'path' && !p.required; }));
            result.push.apply(result, properties.filter(function (p) { return !p.label.includes(invertedType) && !p.label.includes("advanced") && !p.required; }));
            result.push.apply(result, properties.filter(function (p) { return p.label === "formatting" && !p.required; }));
            result.push.apply(result, properties.filter(function (p) { return !p.label.includes(invertedType) &&
                (p.label.includes("scheduler") || p.label.includes("security") || p.label.includes("advanced")); }));
            result.push.apply(result, properties.filter(function (p) { return !p.label.includes(invertedType) &&
                (p.label.includes("scheduler") || p.label.includes("security") || p.label.includes("advanced")); }));
            return Array.from(new Map(result.map(function (item) { return [item.name, item]; })).values());
        }
    }
};
