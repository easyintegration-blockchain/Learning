import { Integration, CamelElement, Dependency } from "../model/IntegrationDefinition";
import { NamedBeanDefinition } from "../model/CamelDefinition";
import { KameletModel, Property } from "../model/KameletModels";
import { ComponentProperty } from "../model/ComponentModels";
export declare class CamelUtil {
    static cloneIntegration: (integration: Integration) => Integration;
    static cloneStep: (step: CamelElement) => CamelElement;
    static cloneDependency: (dependency: Dependency) => Dependency;
    static cloneBean: (bean: NamedBeanDefinition) => NamedBeanDefinition;
    static capitalizeName: (name: string) => string;
    static camelizeName: (name: string, separator: string, firstSmall: boolean) => string;
    static camelizeBody: (name: string, body: any, clone: boolean) => any;
    static camelizeObject: (body: any) => any;
    static isKameletComponent: (element: CamelElement | undefined) => boolean;
    static getKamelet: (element: CamelElement) => KameletModel | undefined;
    static getKameletProperties: (element: any) => Property[];
    static getComponentProperties: (element: any) => ComponentProperty[];
    static checkRequired: (element: CamelElement) => [boolean, string[]];
    static findPlaceholdersInObject: (item: any, result?: Set<string>) => Set<string>;
    static findPlaceholdersInArray: (items: any[] | undefined, result?: Set<string>) => Set<string>;
    static findPlaceholder: (value: string) => [boolean, string?];
}
