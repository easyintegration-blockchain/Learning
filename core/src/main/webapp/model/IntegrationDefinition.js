"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CamelElementMeta = exports.Beans = exports.CamelElement = exports.Integration = exports.Metadata = exports.Spec = exports.Dependency = void 0;
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
var uuid_1 = require("uuid");
var Dependency = /** @class */ (function () {
    function Dependency(init) {
        this.group = '';
        this.artifact = '';
        this.version = '';
        this.uuid = '';
        this.dslName = '';
        Object.assign(this, init);
        this.dslName = 'Dependency';
        this.uuid = (0, uuid_1.v4)();
    }
    Dependency.createNew = function (url) {
        var parts = url.split(":");
        return new Dependency({ group: parts[1], artifact: parts[2], version: parts[3] });
    };
    Dependency.prototype.getFullName = function () {
        return this.group + ":" + this.artifact + ":" + this.version;
    };
    return Dependency;
}());
exports.Dependency = Dependency;
var Spec = /** @class */ (function () {
    function Spec(init) {
        this.flows = [];
        this.dependencies = [];
        Object.assign(this, init);
    }
    return Spec;
}());
exports.Spec = Spec;
var Metadata = /** @class */ (function () {
    function Metadata(init) {
        this.name = '';
        Object.assign(this, init);
    }
    return Metadata;
}());
exports.Metadata = Metadata;
var Integration = /** @class */ (function () {
    function Integration(init) {
        this.apiVersion = 'camel.apache.org/v1';
        this.kind = 'Integration';
        this.metadata = new Metadata();
        this.spec = new Spec();
        this.crd = true;
        Object.assign(this, init);
    }
    Integration.createNew = function (name) {
        return new Integration({ metadata: new Metadata({ name: name }), spec: new Spec({ flows: [] }) });
    };
    return Integration;
}());
exports.Integration = Integration;
var CamelElement = /** @class */ (function () {
    function CamelElement(dslName) {
        this.uuid = '';
        this.dslName = '';
        this.uuid = (0, uuid_1.v4)();
        this.dslName = dslName;
    }
    CamelElement.prototype.hasSteps = function () {
        return this.hasOwnProperty('steps');
    };
    CamelElement.prototype.hasStepName = function () {
        return this.hasOwnProperty('stepName');
    };
    return CamelElement;
}());
exports.CamelElement = CamelElement;
var Beans = /** @class */ (function (_super) {
    __extends(Beans, _super);
    function Beans(init) {
        var _this = _super.call(this, "Beans") || this;
        _this.beans = [];
        Object.assign(_this, init);
        return _this;
    }
    return Beans;
}(CamelElement));
exports.Beans = Beans;
var CamelElementMeta = /** @class */ (function () {
    function CamelElementMeta(step, parentUuid, position, pathUuids) {
        this.position = 0;
        this.pathUuids = [];
        this.step = step;
        this.parentUuid = parentUuid;
        this.position = position || 0;
        this.pathUuids = pathUuids || this.pathUuids;
    }
    return CamelElementMeta;
}());
exports.CamelElementMeta = CamelElementMeta;
