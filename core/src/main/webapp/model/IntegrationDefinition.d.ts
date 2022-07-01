import { NamedBeanDefinition } from "./CamelDefinition";
import { Trait } from "./TraitDefinition";
export declare class Dependency {
    group: string;
    artifact: string;
    version: string;
    uuid: string;
    dslName: string;
    constructor(init?: Partial<Dependency>);
    static createNew(url: string): Dependency;
    getFullName(): string;
}
export declare class Spec {
    flows?: any[];
    dependencies?: Dependency[];
    traits?: Trait;
    constructor(init?: Partial<Spec>);
}
export declare class Metadata {
    name: string;
    constructor(init?: Partial<Metadata>);
}
export declare class Integration {
    apiVersion: string;
    kind: string;
    metadata: Metadata;
    spec: Spec;
    crd: boolean;
    constructor(init?: Partial<Integration>);
    static createNew(name?: string): Integration;
}
export declare class CamelElement {
    uuid: string;
    dslName: string;
    constructor(dslName: string);
    hasSteps(): boolean;
    hasStepName(): boolean;
}
export declare class Beans extends CamelElement {
    beans: NamedBeanDefinition[];
    constructor(init?: Partial<Beans>);
}
export declare class CamelElementMeta {
    step?: CamelElement;
    parentUuid?: string;
    position: number;
    pathUuids: string[];
    constructor(step?: CamelElement, parentUuid?: string, position?: number, pathUuids?: string[]);
}
