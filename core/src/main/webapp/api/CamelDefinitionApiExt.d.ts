import { ElementMeta, PropertyMeta } from "../model/CamelMetadata";
import { NamedBeanDefinition, ExpressionDefinition, RestDefinition } from "../model/CamelDefinition";
import { CamelElement, CamelElementMeta, Dependency, Integration } from "../model/IntegrationDefinition";
export declare class ChildElement {
    name: string;
    className: string;
    multiple: boolean;
    constructor(name: string, className: string, multiple: boolean);
}
export declare class CamelDefinitionApiExt {
    static addStepToIntegration: (integration: Integration, step: CamelElement, parentId: string, position?: number | undefined) => Integration;
    static addStepToStep: (step: CamelElement, stepAdded: CamelElement, parentId: string, position?: number) => CamelElement;
    static addStepToSteps: (steps: CamelElement[], step: CamelElement, parentId: string, position?: number | undefined) => CamelElement[];
    static findElementInIntegration: (integration: Integration, uuid: string) => CamelElement | undefined;
    static findStep: (steps: CamelElement[] | undefined, uuid: string, result?: CamelElementMeta, parentUuid?: string | undefined) => CamelElementMeta;
    static moveRouteElement: (integration: Integration, source: string, target: string) => Integration;
    static deleteStepFromIntegration: (integration: Integration, uuidToDelete: string) => Integration;
    static deleteStepFromStep: (step: CamelElement, uuidToDelete: string) => CamelElement;
    static deleteStepFromSteps: (steps: CamelElement[] | undefined, uuidToDelete: string) => CamelElement[];
    static addBeanToIntegration: (integration: Integration, bean: NamedBeanDefinition) => Integration;
    static deleteBeanFromIntegration: (integration: Integration, bean?: NamedBeanDefinition | undefined) => Integration;
    static addDependencyToIntegration: (integration: Integration, dependency: Dependency) => Integration;
    static deleteDependencyFromIntegration: (integration: Integration, dependency?: Dependency | undefined) => Integration;
    static addRestToIntegration: (integration: Integration, rest: RestDefinition) => Integration;
    static addRestMethodToIntegration: (integration: Integration, method: CamelElement, restUuid: string) => Integration;
    static addRestMethodToRestMethods: (methods: CamelElement[] | undefined, method: CamelElement) => CamelElement[];
    static findRestMethodParent: (integration: Integration, method: CamelElement) => string | undefined;
    static deleteRestConfigurationFromIntegration: (integration: Integration) => Integration;
    static deleteRestFromIntegration: (integration: Integration, restUuid?: string | undefined) => Integration;
    static deleteRestMethodFromIntegration: (integration: Integration, methodUuid?: string | undefined) => Integration;
    static getExpressionLanguageName: (expression: ExpressionDefinition | undefined) => string | undefined;
    static getExpressionLanguageClassName: (expression: ExpressionDefinition | undefined) => string | undefined;
    static getDataFormat: (element: CamelElement | undefined) => ElementMeta | undefined;
    static getExpressionValue: (expression: ExpressionDefinition | undefined) => CamelElement | undefined;
    static updateIntegrationRestElement: (integration: Integration, e: CamelElement) => Integration;
    static updateIntegrationRouteElement: (integration: Integration, e: CamelElement) => Integration;
    static updateElement: (element: CamelElement, e: CamelElement) => CamelElement;
    static updateElements: (elements: CamelElement[], e: CamelElement) => CamelElement[];
    static getElementProperties: (className: string | undefined) => PropertyMeta[];
    static getElementPropertiesByName: (name: string) => PropertyMeta[];
    static getParametersValue: (element: CamelElement | undefined, propertyName: string, pathParameter?: boolean | undefined) => any;
    static getElementChildrenDefinition: (dslName: string) => ChildElement[];
    static getElementChildren: (element: CamelElement, child: ChildElement) => CamelElement[];
}
