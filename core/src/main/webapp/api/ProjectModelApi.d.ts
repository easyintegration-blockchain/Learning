import { ProjectModel, ProjectProperty } from "../model/ProjectModel";
export declare class ProjectModelApi {
    static propertiesToProject: (properties: string) => ProjectModel;
    static stringToProperty: (line: string) => ProjectProperty;
    static propertiesToString: (properties: ProjectProperty[]) => string;
    static getProfiles: (properties: ProjectProperty[]) => string[];
    static updateProperties: (properties: string, project: ProjectModel) => string;
    static projectToMap: (project: ProjectModel) => Map<string, any>;
}
