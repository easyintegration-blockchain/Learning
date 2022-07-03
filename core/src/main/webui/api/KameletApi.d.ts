import { KameletModel, Property } from "../model/KameletModels";
export declare const Kamelets: KameletModel[];
export declare const KameletApi: {
    getKameletProperties: (kameletName: string) => Property[];
    getKamelets: () => KameletModel[];
    jsonToKamelet: (json: string) => KameletModel;
    findKameletByName: (name: string) => KameletModel | undefined;
    findKameletByUri: (uri: string) => KameletModel | undefined;
    yamlToKamelet: (text: string) => KameletModel;
    saveKamelets: (kameletYamls: string[], clean?: boolean) => void;
    saveKamelet: (yaml: string) => void;
};
