"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CamelDefinitionApiExt = exports.ChildElement = void 0;
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
var CamelMetadata_1 = require("../model/CamelMetadata");
var ComponentApi_1 = require("./ComponentApi");
var CamelUtil_1 = require("./CamelUtil");
var IntegrationDefinition_1 = require("../model/IntegrationDefinition");
var CamelDefinitionApi_1 = require("./CamelDefinitionApi");
var ChildElement = /** @class */ (function () {
    function ChildElement(name, className, multiple) {
        this.name = '';
        this.className = '';
        this.multiple = false;
        this.name = name;
        this.className = className;
        this.multiple = multiple;
    }
    return ChildElement;
}());
exports.ChildElement = ChildElement;
var CamelDefinitionApiExt = /** @class */ (function () {
    function CamelDefinitionApiExt() {
    }
    var _a;
    _a = CamelDefinitionApiExt;
    CamelDefinitionApiExt.addStepToIntegration = function (integration, step, parentId, position) {
        var _b, _c, _d;
        if (step.dslName === 'RouteDefinition') {
            (_b = integration.spec.flows) === null || _b === void 0 ? void 0 : _b.push(step);
        }
        else {
            var flows_1 = [];
            (_c = integration.spec.flows) === null || _c === void 0 ? void 0 : _c.filter(function (flow) { return flow.dslName !== 'RouteDefinition'; }).forEach(function (bean) { return flows_1.push(bean); });
            var routes = CamelDefinitionApiExt.addStepToSteps(((_d = integration.spec.flows) === null || _d === void 0 ? void 0 : _d.filter(function (flow) { return flow.dslName === 'RouteDefinition'; })) || [], step, parentId, position);
            flows_1.push.apply(flows_1, routes);
            integration.spec.flows = flows_1;
        }
        return integration;
    };
    CamelDefinitionApiExt.addStepToStep = function (step, stepAdded, parentId, position) {
        if (position === void 0) { position = -1; }
        var result = CamelUtil_1.CamelUtil.cloneStep(step);
        var children = CamelDefinitionApiExt.getElementChildrenDefinition(result.dslName);
        var added = false;
        // Check all fields except steps
        children.filter(function (child) { return child.name !== 'steps'; }).forEach(function (child) {
            if (result.uuid === parentId) {
                if (child.className === stepAdded.dslName) {
                    added = true;
                    if (child.multiple)
                        result[child.name].push(stepAdded);
                    else
                        result[child.name] = stepAdded;
                }
            }
            else {
                var fieldValue = result[child.name];
                if (child.multiple)
                    result[child.name] = CamelDefinitionApiExt.addStepToSteps(result[child.name], stepAdded, parentId, position);
                else if (fieldValue)
                    result[child.name] = CamelDefinitionApiExt.addStepToStep(fieldValue, stepAdded, parentId, position);
            }
        });
        // Then steps
        var steps = children.filter(function (child) { return child.name === 'steps'; });
        if (!added && steps && result.uuid === parentId) {
            if (position > -1)
                result.steps.splice(position, 0, stepAdded);
            else
                result.steps.push(stepAdded);
        }
        else if (!added && steps && result.steps) {
            result.steps = CamelDefinitionApiExt.addStepToSteps(result.steps, stepAdded, parentId, position);
        }
        return result;
    };
    CamelDefinitionApiExt.addStepToSteps = function (steps, step, parentId, position) {
        var result = [];
        steps.forEach(function (el) {
            var newStep = CamelDefinitionApiExt.addStepToStep(el, step, parentId, position);
            result.push(newStep);
        });
        return result;
    };
    CamelDefinitionApiExt.findElementInIntegration = function (integration, uuid) {
        var meta = CamelDefinitionApiExt.findStep(integration.spec.flows, uuid);
        return meta.step;
    };
    CamelDefinitionApiExt.findStep = function (steps, uuid, result, parentUuid) {
        if (result === void 0) { result = new IntegrationDefinition_1.CamelElementMeta(undefined, undefined, undefined, []); }
        if ((result === null || result === void 0 ? void 0 : result.step) !== undefined)
            return result;
        if (steps !== undefined) {
            var _loop_1 = function (index, step) {
                if (step.uuid === uuid) {
                    var p = __spreadArray([], result.pathUuids, true);
                    p.push(step.uuid);
                    result = new IntegrationDefinition_1.CamelElementMeta(step, parentUuid, index, p);
                    return "break";
                }
                else {
                    var ce = CamelDefinitionApiExt.getElementChildrenDefinition(step.dslName);
                    ce.forEach(function (e) {
                        var cel = CamelDefinitionApiExt.getElementChildren(step, e);
                        if (e.multiple) {
                            result = CamelDefinitionApiExt.findStep(cel, uuid, result, step.uuid);
                            result.pathUuids.push(step.uuid);
                        }
                        else {
                            var prop = step[e.name];
                            if (prop && prop.hasOwnProperty("uuid")) {
                                result = CamelDefinitionApiExt.findStep([prop], uuid, result, prop.uuid);
                                result.pathUuids.push(prop.uuid);
                            }
                        }
                    });
                }
            };
            for (var index = 0, step = void 0; step = steps[index]; index++) {
                var state_1 = _loop_1(index, step);
                if (state_1 === "break")
                    break;
            }
        }
        return new IntegrationDefinition_1.CamelElementMeta(result === null || result === void 0 ? void 0 : result.step, result === null || result === void 0 ? void 0 : result.parentUuid, result === null || result === void 0 ? void 0 : result.position, result === null || result === void 0 ? void 0 : result.pathUuids);
    };
    CamelDefinitionApiExt.moveRouteElement = function (integration, source, target) {
        var _b, _c, _d, _e;
        var routes = (_b = integration.spec.flows) === null || _b === void 0 ? void 0 : _b.filter(function (f) { return f.dslName === 'RouteDefinition'; });
        var sourceFindStep = CamelDefinitionApiExt.findStep(routes, source);
        var sourceStep = sourceFindStep.step;
        var sourceUuid = sourceStep === null || sourceStep === void 0 ? void 0 : sourceStep.uuid;
        var targetFindStep = CamelDefinitionApiExt.findStep(routes, target);
        var parentUuid = targetFindStep.parentUuid;
        if (sourceUuid && parentUuid && sourceStep && !targetFindStep.pathUuids.includes(source)) {
            CamelDefinitionApiExt.deleteStepFromIntegration(integration, sourceUuid);
            switch ((_c = targetFindStep.step) === null || _c === void 0 ? void 0 : _c.dslName) {
                case 'when':
                    return CamelDefinitionApiExt.addStepToIntegration(integration, sourceStep, (_d = targetFindStep.step) === null || _d === void 0 ? void 0 : _d.uuid, undefined);
                case 'otherwise':
                    return CamelDefinitionApiExt.addStepToIntegration(integration, sourceStep, (_e = targetFindStep.step) === null || _e === void 0 ? void 0 : _e.uuid, undefined);
                default:
                    return CamelDefinitionApiExt.addStepToIntegration(integration, sourceStep, parentUuid, targetFindStep.position);
            }
        }
        return integration;
    };
    CamelDefinitionApiExt.deleteStepFromIntegration = function (integration, uuidToDelete) {
        var _b, _c;
        var flows = [];
        (_b = integration.spec.flows) === null || _b === void 0 ? void 0 : _b.filter(function (flow) { return flow.dslName !== 'RouteDefinition'; }).forEach(function (x) { return flows.push(x); });
        var routes = CamelDefinitionApiExt.deleteStepFromSteps((_c = integration.spec.flows) === null || _c === void 0 ? void 0 : _c.filter(function (flow) { return flow.dslName === 'RouteDefinition'; }), uuidToDelete);
        flows.push.apply(flows, routes);
        integration.spec.flows = flows;
        return integration;
    };
    CamelDefinitionApiExt.deleteStepFromStep = function (step, uuidToDelete) {
        var result = CamelDefinitionApi_1.CamelDefinitionApi.createStep(step.dslName, step);
        var ce = CamelDefinitionApiExt.getElementChildrenDefinition(step.dslName);
        ce.forEach(function (e) {
            var cel = CamelDefinitionApiExt.getElementChildren(step, e);
            if (e.multiple) {
                result[e.name] = CamelDefinitionApiExt.deleteStepFromSteps(result[e.name], uuidToDelete);
            }
            else {
                var prop = result[e.name];
                if (prop && prop.hasOwnProperty("uuid")) {
                    if (prop.uuid === uuidToDelete) {
                        delete result[e.name];
                    }
                    else {
                        result[e.name] = CamelDefinitionApiExt.deleteStepFromStep(cel[0], uuidToDelete);
                    }
                }
            }
        });
        return result;
    };
    CamelDefinitionApiExt.deleteStepFromSteps = function (steps, uuidToDelete) {
        var result = [];
        if (steps !== undefined) {
            steps.forEach(function (step) {
                if (step.uuid !== uuidToDelete) {
                    step = CamelDefinitionApiExt.deleteStepFromStep(step, uuidToDelete);
                    result.push(step);
                }
            });
        }
        return result;
    };
    CamelDefinitionApiExt.addBeanToIntegration = function (integration, bean) {
        var _b, _c, _d;
        var flows = [];
        if (((_b = integration.spec.flows) === null || _b === void 0 ? void 0 : _b.filter(function (flow) { return flow.dslName === 'Beans'; }).length) === 0) {
            flows.push.apply(flows, integration.spec.flows);
            flows.push(new IntegrationDefinition_1.Beans({ beans: [bean] }));
        }
        else {
            flows.push.apply(flows, ((_c = integration.spec.flows) === null || _c === void 0 ? void 0 : _c.filter(function (flow) { return flow.dslName !== 'Beans'; })) || []);
            (_d = integration.spec.flows) === null || _d === void 0 ? void 0 : _d.filter(function (flow) { return flow.dslName === 'Beans'; }).forEach(function (flow) {
                var beans = [];
                if (flow.beans.filter(function (b) { return b.uuid === bean.uuid; }).length === 0) {
                    beans.push.apply(beans, flow.beans.filter(function (b) { return b.uuid !== bean.uuid; }));
                    beans.push(bean);
                }
                else {
                    flow.beans.forEach(function (b) {
                        if (b.uuid === bean.uuid)
                            beans.push(bean);
                        else
                            beans.push(b);
                    });
                }
                var newBeans = new IntegrationDefinition_1.Beans({ beans: beans });
                flows.push(newBeans);
            });
        }
        integration.spec.flows = flows;
        return integration;
    };
    CamelDefinitionApiExt.deleteBeanFromIntegration = function (integration, bean) {
        var _b;
        var flows = [];
        (_b = integration.spec.flows) === null || _b === void 0 ? void 0 : _b.forEach(function (flow) {
            if (flow.dslName === 'Beans') {
                var beans = flow.beans.filter(function (b) { return !(b.uuid === (bean === null || bean === void 0 ? void 0 : bean.uuid) && b.type === (bean === null || bean === void 0 ? void 0 : bean.type)); });
                var newBeans = new IntegrationDefinition_1.Beans({ beans: beans });
                flows.push(newBeans);
            }
            else {
                flows.push(flow);
            }
        });
        integration.spec.flows = flows;
        return integration;
    };
    CamelDefinitionApiExt.addDependencyToIntegration = function (integration, dependency) {
        var _b;
        var deps = [];
        if (integration.spec.dependencies) {
            deps.push.apply(deps, (_b = integration.spec.dependencies) === null || _b === void 0 ? void 0 : _b.filter(function (d) { return d.uuid !== dependency.uuid; }));
        }
        deps.push(dependency);
        integration.spec.dependencies = deps;
        return integration;
    };
    CamelDefinitionApiExt.deleteDependencyFromIntegration = function (integration, dependency) {
        var _b;
        integration.spec.dependencies = (_b = integration.spec.dependencies) === null || _b === void 0 ? void 0 : _b.filter(function (d) { return d.uuid !== (dependency === null || dependency === void 0 ? void 0 : dependency.uuid); });
        return integration;
    };
    CamelDefinitionApiExt.addRestToIntegration = function (integration, rest) {
        var _b;
        var flows = [];
        (_b = integration.spec.flows) === null || _b === void 0 ? void 0 : _b.push(rest);
        return integration;
    };
    CamelDefinitionApiExt.addRestMethodToIntegration = function (integration, method, restUuid) {
        var _b, _c;
        var flows = [];
        (_b = integration.spec.flows) === null || _b === void 0 ? void 0 : _b.filter(function (flow) { return flow.dslName !== 'RestDefinition'; }).forEach(function (x) { return flows.push(x); });
        (_c = integration.spec.flows) === null || _c === void 0 ? void 0 : _c.filter(function (flow) { return flow.dslName === 'RestDefinition'; }).forEach(function (rest) {
            if (rest.uuid !== restUuid) {
                flows.push(rest);
            }
            else {
                switch (method.dslName) {
                    case 'GetDefinition':
                        rest.get = _a.addRestMethodToRestMethods(rest.get, method);
                        break;
                    case 'PostDefinition':
                        rest.post = _a.addRestMethodToRestMethods(rest.post, method);
                        break;
                    case 'PutDefinition':
                        rest.put = _a.addRestMethodToRestMethods(rest.put, method);
                        break;
                    case 'PatchDefinition':
                        rest.patch = _a.addRestMethodToRestMethods(rest.patch, method);
                        break;
                    case 'DeleteDefinition':
                        rest.delete = _a.addRestMethodToRestMethods(rest.delete, method);
                        break;
                    case 'HeadDefinition':
                        rest.head = _a.addRestMethodToRestMethods(rest.head, method);
                        break;
                }
                flows.push(rest);
            }
        });
        integration.spec.flows = flows;
        return integration;
    };
    CamelDefinitionApiExt.addRestMethodToRestMethods = function (methods, method) {
        if (methods === void 0) { methods = []; }
        var elements = [];
        methods.forEach(function (e) {
            if (e.uuid === method.uuid)
                elements.push(method);
            else
                elements.push(e);
        });
        if (elements.filter(function (e) { return e.uuid === method.uuid; }).length === 0)
            elements.push(method);
        return elements;
    };
    CamelDefinitionApiExt.findRestMethodParent = function (integration, method) {
        var _b, _c, _d, _e, _f, _g, _h;
        var rests = ((_b = integration.spec.flows) === null || _b === void 0 ? void 0 : _b.filter(function (flow) { return flow.dslName === 'RestDefinition'; })) || [];
        for (var _i = 0, rests_1 = rests; _i < rests_1.length; _i++) {
            var rest = rests_1[_i];
            switch (method.dslName) {
                case 'GetDefinition':
                    if ((_c = rest.get) === null || _c === void 0 ? void 0 : _c.find(function (m) { return m.uuid === method.uuid; }))
                        return rest.uuid;
                    else
                        break;
                case 'PostDefinition':
                    if ((_d = rest.post) === null || _d === void 0 ? void 0 : _d.find(function (m) { return m.uuid === method.uuid; }))
                        return rest.uuid;
                    else
                        break;
                case 'PutDefinition':
                    if ((_e = rest.put) === null || _e === void 0 ? void 0 : _e.find(function (m) { return m.uuid === method.uuid; }))
                        return rest.uuid;
                    else
                        break;
                case 'PatchDefinition':
                    if ((_f = rest.patch) === null || _f === void 0 ? void 0 : _f.find(function (m) { return m.uuid === method.uuid; }))
                        return rest.uuid;
                    else
                        break;
                case 'DeleteDefinition':
                    if ((_g = rest.delete) === null || _g === void 0 ? void 0 : _g.find(function (m) { return m.uuid === method.uuid; }))
                        return rest.uuid;
                    else
                        break;
                case 'HeadDefinition':
                    if ((_h = rest.head) === null || _h === void 0 ? void 0 : _h.find(function (m) { return m.uuid === method.uuid; }))
                        return rest.uuid;
                    else
                        break;
            }
        }
    };
    CamelDefinitionApiExt.deleteRestConfigurationFromIntegration = function (integration) {
        var _b;
        var flows = [];
        (_b = integration.spec.flows) === null || _b === void 0 ? void 0 : _b.filter(function (flow) { return flow.dslName !== 'RestConfigurationDefinition'; }).forEach(function (x) { return flows.push(x); });
        integration.spec.flows = flows;
        return integration;
    };
    CamelDefinitionApiExt.deleteRestFromIntegration = function (integration, restUuid) {
        var _b, _c;
        var flows = [];
        (_b = integration.spec.flows) === null || _b === void 0 ? void 0 : _b.filter(function (flow) { return flow.dslName !== 'RestDefinition'; }).forEach(function (x) { return flows.push(x); });
        (_c = integration.spec.flows) === null || _c === void 0 ? void 0 : _c.filter(function (flow) { return flow.dslName === 'RestDefinition' && flow.uuid !== restUuid; }).forEach(function (x) { return flows.push(x); });
        integration.spec.flows = flows;
        return integration;
    };
    CamelDefinitionApiExt.deleteRestMethodFromIntegration = function (integration, methodUuid) {
        var _b, _c;
        var flows = [];
        (_b = integration.spec.flows) === null || _b === void 0 ? void 0 : _b.filter(function (flow) { return flow.dslName !== 'RestDefinition'; }).forEach(function (x) { return flows.push(x); });
        (_c = integration.spec.flows) === null || _c === void 0 ? void 0 : _c.filter(function (flow) { return flow.dslName === 'RestDefinition'; }).forEach(function (rest) {
            if (rest.get)
                rest.get = rest.get.filter(function (get) { return get.uuid !== methodUuid; });
            if (rest.post)
                rest.post = rest.post.filter(function (post) { return post.uuid !== methodUuid; });
            if (rest.put)
                rest.put = rest.put.filter(function (put) { return put.uuid !== methodUuid; });
            if (rest.patch)
                rest.patch = rest.patch.filter(function (patch) { return patch.uuid !== methodUuid; });
            if (rest.delete)
                rest.delete = rest.delete.filter(function (del) { return del.uuid !== methodUuid; });
            if (rest.head)
                rest.head = rest.head.filter(function (head) { return head.uuid !== methodUuid; });
            flows.push(rest);
        });
        integration.spec.flows = flows;
        return integration;
    };
    CamelDefinitionApiExt.getExpressionLanguageName = function (expression) {
        var result = undefined;
        if (expression) {
            Object.keys(expression).forEach(function (fieldName) {
                var _b;
                var lang = CamelMetadata_1.Languages.find(function (value) { return value[0] === fieldName; });
                var val = lang ? lang[0] : undefined;
                result = val ? (_b = CamelMetadata_1.CamelMetadataApi.getCamelLanguageMetadataByName(val)) === null || _b === void 0 ? void 0 : _b.name : result;
            });
        }
        return result;
    };
    CamelDefinitionApiExt.getExpressionLanguageClassName = function (expression) {
        var result = undefined;
        if (expression) {
            Object.keys(expression).forEach(function (fieldName) {
                var _b;
                var lang = CamelMetadata_1.Languages.find(function (value) { return value[0] === fieldName; });
                var val = lang ? lang[0] : undefined;
                result = val ? (_b = CamelMetadata_1.CamelMetadataApi.getCamelLanguageMetadataByName(val)) === null || _b === void 0 ? void 0 : _b.className : result;
            });
        }
        return result;
    };
    CamelDefinitionApiExt.getDataFormat = function (element) {
        var result = undefined;
        if (element) {
            Object.keys(element).forEach(function (fieldName) {
                var df = CamelMetadata_1.CamelMetadataApi.getCamelDataFormatMetadataByName(fieldName);
                result = df ? df : result;
            });
        }
        return result;
    };
    CamelDefinitionApiExt.getExpressionValue = function (expression) {
        var language = CamelDefinitionApiExt.getExpressionLanguageName(expression);
        if (language) {
            return expression[language];
        }
        else {
            return undefined;
        }
    };
    CamelDefinitionApiExt.updateIntegrationRestElement = function (integration, e) {
        var _b, _c, _d, _e, _f, _g, _h, _j;
        var int = CamelUtil_1.CamelUtil.cloneIntegration(integration);
        var flows = [];
        var isRest = ((_b = integration.spec.flows) === null || _b === void 0 ? void 0 : _b.filter(function (f) { return f.dslName === 'RestDefinition' && f.uuid === e.uuid; }).length) === 1;
        var isRestConfiguration = ((_c = integration.spec.flows) === null || _c === void 0 ? void 0 : _c.filter(function (f) { return f.dslName === 'RestConfigurationDefinition' && f.uuid === e.uuid; }).length) === 1;
        if (isRestConfiguration) {
            (_d = integration.spec.flows) === null || _d === void 0 ? void 0 : _d.filter(function (f) { return f.dslName !== 'RestConfigurationDefinition'; }).forEach(function (f) { return flows.push(f); });
            (_e = integration.spec.flows) === null || _e === void 0 ? void 0 : _e.filter(function (f) { return f.dslName === 'RestConfigurationDefinition'; }).forEach(function (f) {
                if (f.uuid === e.uuid)
                    flows.push(CamelUtil_1.CamelUtil.cloneStep(e));
                else
                    flows.push(f);
            });
        }
        else if (isRest) {
            (_f = integration.spec.flows) === null || _f === void 0 ? void 0 : _f.filter(function (f) { return f.dslName !== 'RestDefinition'; }).forEach(function (f) { return flows.push(f); });
            (_g = integration.spec.flows) === null || _g === void 0 ? void 0 : _g.filter(function (f) { return f.dslName === 'RestDefinition'; }).forEach(function (f) {
                if (f.uuid === e.uuid)
                    flows.push(CamelUtil_1.CamelUtil.cloneStep(e));
                else
                    flows.push(f);
            });
        }
        else {
            (_h = integration.spec.flows) === null || _h === void 0 ? void 0 : _h.filter(function (f) { return f.dslName !== 'RestDefinition'; }).forEach(function (f) { return flows.push(f); });
            (_j = integration.spec.flows) === null || _j === void 0 ? void 0 : _j.filter(function (f) { return f.dslName === 'RestDefinition'; }).forEach(function (rest) {
                if (rest.get)
                    rest.get = rest.get.map(function (get) { return get.uuid === e.uuid ? e : get; });
                if (rest.post)
                    rest.post = rest.post.map(function (post) { return post.uuid === e.uuid ? e : post; });
                if (rest.put)
                    rest.put = rest.put.map(function (put) { return put.uuid === e.uuid ? e : put; });
                if (rest.patch)
                    rest.patch = rest.patch.map(function (patch) { return patch.uuid === e.uuid ? e : patch; });
                if (rest.delete)
                    rest.delete = rest.delete.map(function (del) { return del.uuid === e.uuid ? e : del; });
                if (rest.head)
                    rest.head = rest.head.map(function (head) { return head.uuid === e.uuid ? e : head; });
                flows.push(rest);
            });
        }
        int.spec.flows = flows;
        return int;
    };
    CamelDefinitionApiExt.updateIntegrationRouteElement = function (integration, e) {
        var _b, _c;
        var elementClone = CamelUtil_1.CamelUtil.cloneStep(e);
        var int = CamelUtil_1.CamelUtil.cloneIntegration(integration);
        var flows = [];
        (_b = integration.spec.flows) === null || _b === void 0 ? void 0 : _b.filter(function (f) { return f.dslName !== 'RouteDefinition'; }).forEach(function (f) { return flows.push(f); });
        (_c = integration.spec.flows) === null || _c === void 0 ? void 0 : _c.filter(function (f) { return f.dslName === 'RouteDefinition'; }).forEach(function (f) {
            var route = CamelDefinitionApiExt.updateElement(f, elementClone);
            flows.push(CamelDefinitionApi_1.CamelDefinitionApi.createRouteDefinition(route));
        });
        int.spec.flows = flows;
        return int;
    };
    CamelDefinitionApiExt.updateElement = function (element, e) {
        if (element.uuid === e.uuid) {
            return e;
        }
        var result = Object.assign({}, element);
        Object.keys(result).forEach(function (key) {
            if (result[key] instanceof IntegrationDefinition_1.CamelElement) {
                result[key] = CamelDefinitionApiExt.updateElement(result[key], e);
            }
            else if (Array.isArray(result[key])) {
                result[key] = CamelDefinitionApiExt.updateElements(result[key], e);
            }
        });
        return result;
    };
    CamelDefinitionApiExt.updateElements = function (elements, e) {
        var result = [];
        elements.forEach(function (element) {
            if (typeof (element) === 'object') {
                var newElement = CamelDefinitionApiExt.updateElement(element, e);
                result.push(newElement);
            }
            else {
                result.push(element);
            }
        });
        return result;
    };
    CamelDefinitionApiExt.getElementProperties = function (className) {
        var _b, _c, _d;
        var result = [];
        var uri = undefined;
        var expression = undefined;
        var parameters = undefined;
        if (className) {
            var properties = (className.endsWith("Definition") || className.endsWith("BuilderRef"))
                ? (_b = CamelMetadata_1.CamelMetadataApi.getCamelModelMetadataByClassName(className)) === null || _b === void 0 ? void 0 : _b.properties
                : (className.endsWith("DataFormat")
                    ? (_c = CamelMetadata_1.CamelMetadataApi.getCamelDataFormatMetadataByClassName(className)) === null || _c === void 0 ? void 0 : _c.properties
                    : (_d = CamelMetadata_1.CamelMetadataApi.getCamelLanguageMetadataByClassName(className)) === null || _d === void 0 ? void 0 : _d.properties);
            properties === null || properties === void 0 ? void 0 : properties.filter(function (p) { return p.name !== 'steps'; }).filter(function (p) { return p.name !== 'configurationRef'; }).filter(function (p) { return (className === 'RouteDefinition' && p.name === 'id') || p.name !== 'id'; }).filter(function (p) { return (className === 'ToDefinition' && p.name !== 'pattern') || className !== 'ToDefinition'; }).forEach(function (p) {
                switch (p.name) {
                    case 'uri':
                        uri = p;
                        break;
                    case 'expression':
                        expression = p;
                        break;
                    case 'parameters':
                        parameters = p;
                        break;
                    default:
                        result.push(p);
                }
            });
        }
        if (uri)
            result.unshift(uri);
        if (expression)
            result.unshift(expression);
        // if (className && ['marshal', 'unmarshal'].includes(className)) result.unshift(new PropertyMeta("dataFormat"))
        if (parameters)
            result.push(parameters);
        return result;
    };
    CamelDefinitionApiExt.getElementPropertiesByName = function (name) {
        var model = CamelMetadata_1.CamelMetadataApi.getCamelModelMetadataByName(name);
        if (model) {
            return _a.getElementProperties(model.className);
        }
        var language = CamelMetadata_1.CamelMetadataApi.getCamelLanguageMetadataByName(name);
        if (language) {
            return _a.getElementProperties(language.className);
        }
        var dataFormat = CamelMetadata_1.CamelMetadataApi.getCamelDataFormatMetadataByName(name);
        if (dataFormat) {
            return _a.getElementProperties(dataFormat.className);
        }
        return [];
    };
    CamelDefinitionApiExt.getParametersValue = function (element, propertyName, pathParameter) {
        if (pathParameter) {
            var uri = element.uri;
            return ComponentApi_1.ComponentApi.getPathParameterValue(uri, propertyName);
        }
        else {
            if (element && element.parameters) {
                return element.parameters[propertyName];
            }
        }
    };
    CamelDefinitionApiExt.getElementChildrenDefinition = function (dslName) {
        var result = [];
        var meta = CamelMetadata_1.CamelMetadataApi.getCamelModelMetadataByClassName(dslName);
        if (meta) {
            meta.properties
                .filter(function (p) { return p.isObject && CamelMetadata_1.CamelMetadataApi.getCamelModelMetadataByClassName(p.type); })
                .forEach(function (p) { return result.push(new ChildElement(p.name, p.type, p.isArray)); });
        }
        if (CamelDefinitionApi_1.CamelDefinitionApi.createStep(dslName, {}).hasSteps())
            result.push(new ChildElement("steps", "CamelElement", true));
        return result;
    };
    CamelDefinitionApiExt.getElementChildren = function (element, child) {
        var result = [];
        var children = element[child.name];
        if (Array.isArray(children)) {
            result.push.apply(result, children);
        }
        else if (children) {
            result.push(children);
        }
        return result;
    };
    return CamelDefinitionApiExt;
}());
exports.CamelDefinitionApiExt = CamelDefinitionApiExt;
