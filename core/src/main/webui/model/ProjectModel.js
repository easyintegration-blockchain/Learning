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
exports.ProjectModel = exports.ProjectProperty = exports.ProjectStatus = exports.StepStatus = void 0;
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
var StepStatus = /** @class */ (function () {
    function StepStatus(init) {
        this.status = 'pending';
        this.startTime = Date.now();
        Object.assign(this, init);
    }
    StepStatus.progress = function () {
        return new StepStatus({ status: "progress", startTime: Date.now() });
    };
    StepStatus.done = function (stepStatus) {
        if (stepStatus) {
            stepStatus.status = "done";
            stepStatus.endTime = Date.now();
        }
        return stepStatus;
    };
    StepStatus.error = function (stepStatus) {
        if (stepStatus) {
            stepStatus.status = "error";
            stepStatus.endTime = Date.now();
        }
        return stepStatus;
    };
    return StepStatus;
}());
exports.StepStatus = StepStatus;
var ProjectStatus = /** @class */ (function (_super) {
    __extends(ProjectStatus, _super);
    function ProjectStatus(init) {
        var _this = _super.call(this) || this;
        _this.active = false;
        Object.assign(_this, init);
        return _this;
    }
    return ProjectStatus;
}(StepStatus));
exports.ProjectStatus = ProjectStatus;
var ProjectProperty = /** @class */ (function () {
    function ProjectProperty(init) {
        this.id = '';
        this.key = '';
        Object.assign(this, init);
    }
    ProjectProperty.createNew = function (key, value) {
        return new ProjectProperty({ id: (0, uuid_1.v4)(), key: key, value: value });
    };
    return ProjectProperty;
}());
exports.ProjectProperty = ProjectProperty;
var ProjectModel = /** @class */ (function () {
    function ProjectModel(init) {
        this.status = new ProjectStatus();
        this.properties = [];
        Object.assign(this, init);
    }
    ProjectModel.createNew = function (init) {
        return new ProjectModel(init ? init : {});
    };
    return ProjectModel;
}());
exports.ProjectModel = ProjectModel;
