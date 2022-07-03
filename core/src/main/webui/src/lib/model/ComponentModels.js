"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentProperty = exports.Component = exports.Header = void 0;
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
var Header = /** @class */ (function () {
    function Header(init) {
        this.kind = '';
        this.name = '';
        this.title = '';
        this.description = '';
        this.deprecated = false;
        this.firstVersion = '';
        this.label = '';
        this.javaType = '';
        this.supportLevel = '';
        this.groupId = '';
        this.artifactId = '';
        this.version = '';
        this.scheme = '';
        this.extendsScheme = '';
        this.syntax = '';
        this.async = false;
        this.api = false;
        this.consumerOnly = false;
        this.producerOnly = false;
        this.lenientProperties = false;
        Object.assign(this, init);
    }
    return Header;
}());
exports.Header = Header;
var Component = /** @class */ (function () {
    function Component(init) {
        this.component = new Header();
        Object.assign(this, init);
    }
    return Component;
}());
exports.Component = Component;
var ComponentProperty = /** @class */ (function () {
    function ComponentProperty(init) {
        this.name = '';
        this.deprecated = false;
        this.description = '';
        this.displayName = '';
        this.group = '';
        this.kind = '';
        this.label = '';
        this.type = '';
        this.secret = false;
        this.enum = [];
        this.required = false;
        Object.assign(this, init);
    }
    return ComponentProperty;
}());
exports.ComponentProperty = ComponentProperty;
