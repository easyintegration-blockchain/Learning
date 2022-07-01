import { Integration, CamelElement, Beans, Dependency } from "../model/IntegrationDefinition";
export declare class CamelDefinitionYaml {
    static integrationToYaml: (integration: Integration) => string;
    static generateDependencies: (deps: Dependency[]) => string[];
    static generateModeline: (deps: string[]) => string;
    static cleanupElement: (element: CamelElement, inArray?: boolean | undefined, inSteps?: boolean | undefined) => CamelElement;
    static cleanupElements: (elements: CamelElement[], inSteps?: boolean | undefined) => CamelElement[];
    static yamlDump: (integration: Integration) => string;
    static replacer: (key: string, value: any) => any;
    static yamlToIntegration: (filename: string, text: string) => Integration;
    static yamlIsIntegration: (text: string) => boolean;
    static dependenciesToDependency: (deps?: any[] | undefined) => Dependency[];
    static modelineToDependency: (text: string) => Dependency[];
    static flowsToCamelElements: (flows: any[]) => any[];
    static readBeanDefinition: (beans: any) => Beans;
    static flatMapProperty: (key: string, value: any, properties: Map<string, any>) => Map<string, any>;
}
