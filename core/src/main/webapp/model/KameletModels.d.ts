export declare class Property {
    id: string;
    title: string;
    description: string;
    type: string;
    default: string;
    format: string;
    example: string;
    'x-descriptors': string;
    value: string | number | boolean;
}
export declare class Definition {
    title: string;
    description: string;
    required: string[];
    properties: any;
    constructor(init?: Partial<Definition>);
}
export declare class KameletSpec {
    definition: Definition;
    types: any;
    flow: any;
    constructor(init?: Partial<KameletSpec>);
}
export declare class Labels {
    'camel.apache.org/kamelet.type': string | any;
    constructor(init?: Partial<Labels>);
}
export declare class Annotations {
    'camel.apache.org/kamelet.icon': string | any;
    'camel.apache.org/catalog.version': string | any;
    constructor(init?: Partial<Annotations>);
}
export declare class KameletMetadata {
    name: string;
    labels: Labels;
    annotations: Annotations;
    constructor(init?: Partial<KameletMetadata>);
}
export declare class KameletModel {
    apiVersion: string;
    kind: string;
    metadata: KameletMetadata;
    spec: KameletSpec;
    constructor(init?: Partial<KameletModel>);
    type(): string;
    icon(): string;
    version(): string;
    title(): string;
    properties(): any;
    static default: () => KameletModel[];
}
export declare class Ref {
    apiVersion: string;
    kind: string;
    name: string;
}
export declare class Source {
    uri: string | any;
    ref: Ref | any;
    properties: [] | any;
    static createUri(uri: string): Source;
    static createRef(refName: string): Source;
}
export declare class Sink {
    uri: string | any;
    ref: Ref | any;
    properties: [] | any;
    static createUri(uri: string): Sink;
    static createRef(refName: string): Sink;
}
export declare class Step {
    ref: Ref;
    properties: any;
}
export declare class KameletBindingSpec {
    source: Source;
    steps: Step[] | any;
    sink: Sink;
}
export declare class KameletBindingAnnotations {
    'camel.apache.org/karavan.title': string;
}
export declare class KameletBindingMetadata {
    name: string;
    annotations: KameletBindingAnnotations | any;
}
export declare class KameletBinding {
    apiVersion: string;
    kind: string;
    metadata: KameletBindingMetadata;
    spec: KameletBindingSpec;
    constructor(init?: Partial<KameletBinding>);
}
