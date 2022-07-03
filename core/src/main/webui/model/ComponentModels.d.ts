export declare class Header {
    kind: string;
    name: string;
    title: string;
    description: string;
    deprecated: boolean;
    firstVersion: string;
    label: string;
    javaType: string;
    supportLevel: string;
    groupId: string;
    artifactId: string;
    version: string;
    scheme: string;
    extendsScheme: string;
    syntax: string;
    async: boolean;
    api: boolean;
    consumerOnly: boolean;
    producerOnly: boolean;
    lenientProperties: boolean;
    componentProperties: any;
    constructor(init?: Partial<Header>);
}
export declare class Component {
    component: Header;
    properties: any;
    constructor(init?: Partial<Component>);
}
export declare class ComponentProperty {
    name: string;
    deprecated: boolean;
    description: string;
    displayName: string;
    group: string;
    kind: string;
    label: string;
    type: string;
    secret: boolean;
    enum: string[];
    required: boolean;
    defaultValue: string | number | boolean | any;
    value: string | any;
    constructor(init?: Partial<ComponentProperty>);
}
