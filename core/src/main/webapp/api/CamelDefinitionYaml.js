"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CamelDefinitionYaml = void 0;
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
var yaml = require("js-yaml");
var IntegrationDefinition_1 = require("../model/IntegrationDefinition");
var CamelDefinition_1 = require("../model/CamelDefinition");
var CamelUtil_1 = require("./CamelUtil");
var CamelDefinitionYamlStep_1 = require("./CamelDefinitionYamlStep");
var TraitDefinition_1 = require("../model/TraitDefinition");
var CamelDefinitionYaml = /** @class */ (function () {
    function CamelDefinitionYaml() {
    }
    var _a;
    _a = CamelDefinitionYaml;
    CamelDefinitionYaml.integrationToYaml = function (integration) {
        var clone = CamelUtil_1.CamelUtil.cloneIntegration(integration);
        var flows = integration.spec.flows;
        clone.spec.flows = flows === null || flows === void 0 ? void 0 : flows.map(function (f) { return CamelDefinitionYaml.cleanupElement(f); }).filter(function (x) { return Object.keys(x).length !== 0; });
        if (clone.spec.dependencies && Array.from(clone.spec.dependencies).length === 0) {
            delete clone.spec.dependencies;
        }
        else {
            clone.spec.dependencies = _a.generateDependencies(clone.spec.dependencies);
        }
        if (clone.spec.traits) {
            clone.spec.traits = _a.cleanupElement(clone.spec.traits);
        }
        if (integration.crd) {
            delete clone.crd;
            var i = JSON.parse(JSON.stringify(clone, null, 3)); // fix undefined in string attributes
            var text = CamelDefinitionYaml.yamlDump(i);
            return text;
        }
        else {
            var f = JSON.parse(JSON.stringify(clone.spec.flows, null, 3));
            var text = CamelDefinitionYaml.yamlDump(f);
            if (clone.spec.dependencies && clone.spec.dependencies.length > 0) {
                var modeline = _a.generateModeline(clone.spec.dependencies);
                return modeline.concat('\n', text);
            }
            else {
                return text;
            }
        }
    };
    CamelDefinitionYaml.generateDependencies = function (deps) {
        var result = [];
        deps === null || deps === void 0 ? void 0 : deps.forEach(function (d) {
            result.push('mvn:' + d.group + ":" + d.artifact + ":" + d.version);
        });
        return result;
    };
    CamelDefinitionYaml.generateModeline = function (deps) {
        var result = '# camel-k:';
        deps === null || deps === void 0 ? void 0 : deps.forEach(function (d) {
            result = result.concat(' dependency=', d);
        });
        return result;
    };
    CamelDefinitionYaml.cleanupElement = function (element, inArray, inSteps) {
        var result = {};
        var object = Object.assign({}, element);
        if (inArray) {
            object.inArray = inArray;
            object.inSteps = (inSteps === true);
        }
        if (object.dslName.endsWith('Expression')) {
            delete object.language;
            delete object.expressionName;
        }
        else if (object.dslName.endsWith('DataFormat')) {
            delete object.dataFormatName;
        }
        else if (object.dslName === 'NamedBeanDefinition') {
            if (object.properties && Object.keys(object.properties).length === 0)
                delete object.properties;
        }
        delete object.uuid;
        Object.keys(object)
            .forEach(function (key) {
            if (object[key] instanceof IntegrationDefinition_1.CamelElement || (typeof object[key] === 'object' && object[key].dslName)) {
                result[key] = CamelDefinitionYaml.cleanupElement(object[key]);
            }
            else if (Array.isArray(object[key])) {
                if (object[key].length > 0)
                    result[key] = CamelDefinitionYaml.cleanupElements(object[key], key === 'steps');
            }
            else if (key === 'parameters' && typeof (object[key]) === 'object') {
                var obj_1 = object[key];
                var parameters = Object.keys(obj_1 || {}).reduce(function (x, k) {
                    // Check for null or undefined or empty
                    if (obj_1[k] !== null && obj_1[k] !== undefined && obj_1[k].toString().trim().length > 0) {
                        x[k] = obj_1[k];
                    }
                    return x;
                }, {});
                if (Object.keys(parameters).length > 0)
                    result[key] = parameters;
            }
            else {
                if (object[key] !== undefined && object[key].toString().trim().length > 0)
                    result[key] = object[key];
            }
        });
        return result;
    };
    CamelDefinitionYaml.cleanupElements = function (elements, inSteps) {
        var result = [];
        elements.forEach(function (element) {
            if (typeof (element) === 'object') {
                var newElement = CamelDefinitionYaml.cleanupElement(element, true, inSteps);
                result.push(newElement);
            }
            else {
                result.push(element);
            }
        });
        return result;
    };
    CamelDefinitionYaml.yamlDump = function (integration) {
        return yaml.dump(integration, {
            noRefs: false,
            noArrayIndent: false,
            sortKeys: function (a, b) {
                if (a === 'uri')
                    return -1;
                else if (b === 'uri')
                    return 1;
                else if (a === 'expression' && b == 'steps')
                    return -1;
                else if (b === 'expression' && a == 'steps')
                    return 1;
                else if (a === 'steps' && b !== 'uri')
                    return -1;
                else if (b === 'steps' && a !== 'uri')
                    return 1;
                else if (a > b)
                    return 1;
                else
                    return 0;
            },
            replacer: function (key, value) { return _a.replacer(key, value); }
        });
    };
    CamelDefinitionYaml.replacer = function (key, value) {
        if (typeof value === 'object' && (value.hasOwnProperty('stepName') || value.hasOwnProperty('inArray') || value.hasOwnProperty('inSteps'))) {
            var stepNameField = value.hasOwnProperty('stepName') ? 'stepName' : 'step-name';
            var stepName = value[stepNameField];
            var dslName = value.dslName;
            var newValue = JSON.parse(JSON.stringify(value));
            delete newValue.dslName;
            delete newValue[stepNameField];
            if ((value.inArray && !value.inSteps)
                || dslName === 'ExpressionSubElementDefinition'
                || dslName === 'ExpressionDefinition'
                || (dslName === null || dslName === void 0 ? void 0 : dslName.endsWith('Expression'))
                || stepName === 'otherwise'
                || key === 'from') {
                delete newValue.inArray;
                delete newValue.inSteps;
                return newValue;
            }
            else {
                delete newValue.inArray;
                delete newValue.inSteps;
                var xValue = {};
                xValue[stepName] = newValue;
                return xValue;
            }
        }
        else {
            if ((value === null || value === void 0 ? void 0 : value.dslName) && value.dslName.endsWith("Trait") && value.dslName !== 'Trait') {
                delete value.dslName;
                return { configuration: value };
            }
            else if ((value === null || value === void 0 ? void 0 : value.dslName) === 'Trait' && (value === null || value === void 0 ? void 0 : value.threeScale)) {
                delete value.dslName;
                value["3scale"] = { configuration: value.threeScale };
                return value;
            }
            value === null || value === void 0 ? true : delete value.dslName;
            return value;
        }
    };
    CamelDefinitionYaml.yamlToIntegration = function (filename, text) {
        var _b, _c, _d, _e;
        var integration = IntegrationDefinition_1.Integration.createNew(filename);
        var fromYaml = yaml.load(text);
        var camelized = CamelUtil_1.CamelUtil.camelizeObject(fromYaml);
        if ((camelized === null || camelized === void 0 ? void 0 : camelized.apiVersion) && camelized.apiVersion.startsWith('camel.apache.org') && camelized.kind && camelized.kind === 'Integration') {
            integration.crd = true;
            if ((_b = camelized === null || camelized === void 0 ? void 0 : camelized.metadata) === null || _b === void 0 ? void 0 : _b.name)
                integration.metadata.name = (_c = camelized === null || camelized === void 0 ? void 0 : camelized.metadata) === null || _c === void 0 ? void 0 : _c.name;
            var int = new IntegrationDefinition_1.Integration(__assign({}, camelized));
            (_d = integration.spec.flows) === null || _d === void 0 ? void 0 : _d.push.apply(_d, _a.flowsToCamelElements(int.spec.flows || []));
            integration.spec.dependencies = _a.dependenciesToDependency(int.spec.dependencies);
            if (int.spec.traits)
                integration.spec.traits = TraitDefinition_1.TraitApi.traitsFromYaml(int.spec.traits);
        }
        else if (Array.isArray(camelized)) {
            integration.crd = false;
            var flows = camelized;
            (_e = integration.spec.flows) === null || _e === void 0 ? void 0 : _e.push.apply(_e, _a.flowsToCamelElements(flows));
            integration.spec.dependencies = _a.modelineToDependency(text);
            // integration.spec.traits = this.traitsToCamelElements(flows); // TODO: Plain yaml Trait ???
        }
        return integration;
    };
    CamelDefinitionYaml.yamlIsIntegration = function (text) {
        var fromYaml = yaml.load(text);
        var camelized = CamelUtil_1.CamelUtil.camelizeObject(fromYaml);
        if ((camelized === null || camelized === void 0 ? void 0 : camelized.apiVersion) && camelized.apiVersion.startsWith('camel.apache.org') && camelized.kind && camelized.kind === 'Integration') {
            return true;
        }
        else if (Array.isArray(camelized)) {
            return true;
        }
        else {
            return false;
        }
    };
    CamelDefinitionYaml.dependenciesToDependency = function (deps) {
        var result = [];
        deps === null || deps === void 0 ? void 0 : deps.forEach(function (d) { return result.push(IntegrationDefinition_1.Dependency.createNew(d.toString())); });
        return result;
    };
    CamelDefinitionYaml.modelineToDependency = function (text) {
        var result = [];
        var lines = text.split("\r\n");
        lines.filter(function (l) {
            var line = l.trim();
            return line.startsWith("#") && line.includes("camel-k");
        }).forEach(function (line) {
            var parts = line.split(" ");
            parts.filter(function (part) { return part.trim() && part.trim().startsWith("dependency"); }).forEach(function (part) {
                var dep = part.replace("dependency=", '');
                result.push(IntegrationDefinition_1.Dependency.createNew(dep));
            });
        });
        return result;
    };
    CamelDefinitionYaml.flowsToCamelElements = function (flows) {
        var result = [];
        flows.filter(function (e) { return e.hasOwnProperty('restConfiguration'); })
            .forEach(function (f) { return result.push(CamelDefinitionYamlStep_1.CamelDefinitionYamlStep.readRestConfigurationDefinition(f.restConfiguration)); });
        flows.filter(function (e) { return e.hasOwnProperty('rest'); })
            .forEach(function (f) { return result.push(CamelDefinitionYamlStep_1.CamelDefinitionYamlStep.readRestDefinition(f.rest)); });
        flows.filter(function (e) { return e.hasOwnProperty('route'); })
            .forEach(function (f) { return result.push(CamelDefinitionYamlStep_1.CamelDefinitionYamlStep.readRouteDefinition(f.route)); });
        flows.filter(function (e) { return e.hasOwnProperty('from'); })
            .forEach(function (f) { return result.push(CamelDefinitionYamlStep_1.CamelDefinitionYamlStep.readRouteDefinition(new CamelDefinition_1.RouteDefinition({ from: f.from }))); });
        flows.filter(function (e) { return e.hasOwnProperty('beans'); })
            .forEach(function (b) { return result.push(CamelDefinitionYaml.readBeanDefinition(b)); });
        return result;
    };
    CamelDefinitionYaml.readBeanDefinition = function (beans) {
        var result = new IntegrationDefinition_1.Beans();
        beans.beans.forEach(function (b) {
            var props = {};
            if (b && b.properties) {
                // convert map style to properties if requires
                Object.keys(b.properties).forEach(function (key) {
                    var value = b.properties[key];
                    CamelDefinitionYaml.flatMapProperty(key, value, new Map())
                        .forEach(function (v, k) { return props[k] = v; });
                });
            }
            b.properties = props;
            result.beans.push(new CamelDefinition_1.NamedBeanDefinition(b));
        });
        return result;
    };
    // convert map style to properties if requires
    CamelDefinitionYaml.flatMapProperty = function (key, value, properties) {
        if (value === undefined) {
        }
        else if (typeof value === 'object') {
            Object.keys(value).forEach(function (k) {
                var key2 = key + "." + k;
                var value2 = value[k];
                CamelDefinitionYaml.flatMapProperty(key2, value2, new Map())
                    .forEach(function (value1, key1) { return properties.set(key1, value1); });
            });
        }
        else {
            properties.set(key, value);
        }
        return properties;
    };
    return CamelDefinitionYaml;
}());
exports.CamelDefinitionYaml = CamelDefinitionYaml;
