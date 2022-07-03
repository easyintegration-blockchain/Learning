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
exports.CamelUtil = void 0;
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
var IntegrationDefinition_1 = require("../model/IntegrationDefinition");
var CamelDefinitionApi_1 = require("./CamelDefinitionApi");
var CamelDefinition_1 = require("../model/CamelDefinition");
var TraitDefinition_1 = require("../model/TraitDefinition");
var KameletApi_1 = require("./KameletApi");
var ComponentApi_1 = require("./ComponentApi");
var CamelMetadata_1 = require("../model/CamelMetadata");
var CamelDefinitionApiExt_1 = require("./CamelDefinitionApiExt");
var CamelUtil = /** @class */ (function () {
    function CamelUtil() {
    }
    var _a;
    _a = CamelUtil;
    CamelUtil.cloneIntegration = function (integration) {
        var _b, _c, _d;
        var clone = JSON.parse(JSON.stringify(integration));
        var int = new IntegrationDefinition_1.Integration(__assign({}, clone));
        var flows = [];
        int.spec.dependencies = (_b = int.spec.dependencies) === null || _b === void 0 ? void 0 : _b.map(function (d) { return _a.cloneDependency(d); });
        (_c = int.spec.flows) === null || _c === void 0 ? void 0 : _c.filter(function (e) { return e.dslName !== 'Beans'; }).forEach(function (f) { return flows.push(CamelDefinitionApi_1.CamelDefinitionApi.createStep(f.dslName, f)); });
        (_d = int.spec.flows) === null || _d === void 0 ? void 0 : _d.filter(function (e) { return e.dslName === 'Beans'; }).forEach(function (beans) {
            var newBeans = new IntegrationDefinition_1.Beans();
            beans.beans.forEach(function (b) { return newBeans.beans.push(CamelUtil.cloneBean(b)); });
            flows.push(newBeans);
        });
        int.spec.flows = flows;
        if (int.spec.traits)
            int.spec.traits = TraitDefinition_1.TraitApi.cloneTrait(int.spec.traits);
        return int;
    };
    CamelUtil.cloneStep = function (step) {
        var clone = JSON.parse(JSON.stringify(step));
        return CamelDefinitionApi_1.CamelDefinitionApi.createStep(step.dslName, clone, true);
    };
    CamelUtil.cloneDependency = function (dependency) {
        var clone = JSON.parse(JSON.stringify(dependency));
        var newDependency = new IntegrationDefinition_1.Dependency(clone);
        newDependency.uuid = dependency.uuid;
        return newDependency;
    };
    CamelUtil.cloneBean = function (bean) {
        var clone = JSON.parse(JSON.stringify(bean));
        var newBean = new CamelDefinition_1.NamedBeanDefinition(clone);
        newBean.uuid = bean.uuid;
        return newBean;
    };
    CamelUtil.capitalizeName = function (name) {
        try {
            return name[0].toUpperCase() + name.substring(1);
        }
        catch (e) {
            return name;
        }
    };
    CamelUtil.camelizeName = function (name, separator, firstSmall) {
        var res = name
            .split(separator)
            .map(function (value) { return CamelUtil.capitalizeName(value); })
            .join("");
        return firstSmall ? res[0].toLowerCase() + res.substring(1) : res;
    };
    CamelUtil.camelizeBody = function (name, body, clone) {
        var _b;
        if (body && Object.keys(body).length > 0) {
            var oldKey = Object.keys(body)[0];
            var key = CamelUtil.camelizeName(oldKey, '-', true);
            return !clone && key === name ? (_b = {}, _b[key] = body[oldKey], _b) : body;
        }
        else {
            return {};
        }
    };
    CamelUtil.camelizeObject = function (body) {
        if (Array.isArray(body)) {
            var result_1 = [];
            body.forEach(function (value) {
                if (typeof value == 'object') {
                    result_1.push(CamelUtil.camelizeObject(value));
                }
                else {
                    result_1.push(value);
                }
            });
            return result_1;
        }
        else {
            var result_2 = {};
            if (body && Object.keys(body).length > 0) {
                Object.keys(body).forEach(function (key) {
                    var newKey = CamelUtil.camelizeName(key, "-", true);
                    if (typeof body[key] == 'object' || Array.isArray(body[key])) {
                        result_2[newKey] = CamelUtil.camelizeObject(body[key]);
                    }
                    else {
                        result_2[newKey] = body[key];
                    }
                });
            }
            return result_2;
        }
    };
    CamelUtil.isKameletComponent = function (element) {
        if ((element === null || element === void 0 ? void 0 : element.dslName) === 'KameletDefinition') {
            return true;
        }
        else if (element && ["FromDefinition", "ToDefinition"].includes(element.dslName)) {
            var uri = element.uri;
            return uri !== undefined && uri.startsWith("kamelet:");
        }
        else {
            return false;
        }
    };
    CamelUtil.getKamelet = function (element) {
        var _b, _c;
        if (element.dslName === 'KameletDefinition') {
            return KameletApi_1.KameletApi.findKameletByName(element.name || '');
        }
        else if (element.dslName === 'ToDefinition' && ((_b = element.uri) === null || _b === void 0 ? void 0 : _b.startsWith("kamelet:"))) {
            var kameletName = (_c = element.uri) === null || _c === void 0 ? void 0 : _c.replace("kamelet:", "");
            return KameletApi_1.KameletApi.findKameletByName(kameletName);
        }
        else if (["FromDefinition", "FromDefinition", "ToDefinition"].includes(element.dslName)) {
            var uri = element.uri;
            var k = uri !== undefined ? KameletApi_1.KameletApi.findKameletByUri(uri) : undefined;
            return k;
        }
        else {
            return undefined;
        }
    };
    CamelUtil.getKameletProperties = function (element) {
        var kamelet = _a.getKamelet(element);
        return kamelet
            ? KameletApi_1.KameletApi.getKameletProperties(kamelet === null || kamelet === void 0 ? void 0 : kamelet.metadata.name)
            : [];
    };
    CamelUtil.getComponentProperties = function (element) {
        var dslName = element.dslName;
        if (dslName === 'ToDynamicDefinition') {
            var component = ComponentApi_1.ComponentApi.findByName(dslName);
            return component ? ComponentApi_1.ComponentApi.getComponentProperties(component === null || component === void 0 ? void 0 : component.component.name, 'producer') : [];
        }
        else {
            var uri = element.uri;
            var name_1 = ComponentApi_1.ComponentApi.getComponentNameFromUri(uri);
            if (name_1) {
                var component = ComponentApi_1.ComponentApi.findByName(name_1);
                return component ? ComponentApi_1.ComponentApi.getComponentProperties(component === null || component === void 0 ? void 0 : component.component.name, element.dslName === 'FromDefinition' ? 'consumer' : 'producer') : [];
            }
            else {
                return [];
            }
        }
    };
    CamelUtil.checkRequired = function (element) {
        var result = [true, []];
        var className = element.dslName;
        var elementMeta = CamelMetadata_1.CamelMetadataApi.getCamelModelMetadataByClassName(className);
        if (elementMeta === undefined && className.endsWith("Expression"))
            elementMeta = CamelMetadata_1.CamelMetadataApi.getCamelLanguageMetadataByClassName(className);
        elementMeta === null || elementMeta === void 0 ? void 0 : elementMeta.properties.filter(function (p) { return p.required; }).forEach(function (p) {
            var value = element[p.name];
            if (p.type === 'string' && (value === undefined || value.trim().length === 0)) {
                result[0] = false;
                result[1].push("Property " + p.displayName + " is required");
            }
            else if (p.type === 'ExpressionDefinition') {
                var expressionMeta = CamelMetadata_1.CamelMetadataApi.getCamelModelMetadataByClassName('ExpressionDefinition');
                var expressionCheck_1 = false;
                expressionMeta === null || expressionMeta === void 0 ? void 0 : expressionMeta.properties.forEach(function (ep) {
                    var expValue = value[ep.name];
                    if (expValue) {
                        var checkedExpression = _a.checkRequired(expValue);
                        if (checkedExpression[0])
                            expressionCheck_1 = true;
                    }
                });
                result[0] = expressionCheck_1;
                if (!expressionCheck_1)
                    result[1].push("Expression is not defined");
            }
        });
        if (['FromDefinition', 'ToDefinition'].includes(className)) {
            var isKamelet = _a.isKameletComponent(element);
            if (!isKamelet) {
                _a.getComponentProperties(element).filter(function (p) { return p.required; }).forEach(function (p) {
                    var value = CamelDefinitionApiExt_1.CamelDefinitionApiExt.getParametersValue(element, p.name, p.kind === 'path');
                    if (value === undefined || value.trim().length === 0) {
                        result[0] = false;
                        result[1].push("Property " + p.displayName + " is required");
                    }
                });
            }
        }
        return result;
    };
    CamelUtil.findPlaceholdersInObject = function (item, result) {
        if (result === void 0) { result = new Set(); }
        if (typeof item === 'object') {
            Object.keys(item).forEach(function (key) {
                var value = item[key];
                if (Array.isArray(value)) {
                    _a.findPlaceholdersInArray(value, result);
                }
                else if (typeof value === 'object') {
                    _a.findPlaceholdersInObject(value, result);
                }
                else {
                    var r = _a.findPlaceholder(value.toString());
                    if (r[0] && r[1])
                        result.add(r[1]);
                }
            });
        }
        else {
            var r = _a.findPlaceholder(item.toString());
            if (r[0] && r[1])
                result.add(r[1]);
        }
        return result;
    };
    CamelUtil.findPlaceholdersInArray = function (items, result) {
        if (result === void 0) { result = new Set(); }
        if (items !== undefined) {
            items.forEach(function (item) {
                if (typeof item === 'object') {
                    _a.findPlaceholdersInObject(item, result);
                }
                else {
                    var r = _a.findPlaceholder(item.toString());
                    if (r[0] && r[1])
                        result.add(r[1]);
                }
            });
        }
        return result;
    };
    CamelUtil.findPlaceholder = function (value) {
        var result = false;
        var placeholder = undefined;
        if (value !== undefined) {
            var val = value.trim();
            result = val.includes("{{") && val.includes("}}");
            var start = val.search("{{") + 2;
            var end = val.search("}}");
            placeholder = val.substring(start, end).trim();
        }
        return [result, placeholder];
    };
    return CamelUtil;
}());
exports.CamelUtil = CamelUtil;
