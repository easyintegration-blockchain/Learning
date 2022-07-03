export declare class StepStatus {
    status: 'pending' | 'progress' | 'done' | 'error';
    startTime: number;
    endTime?: number;
    constructor(init?: Partial<StepStatus>);
    static progress(): StepStatus;
    static done(stepStatus?: StepStatus): StepStatus | undefined;
    static error(stepStatus?: StepStatus): StepStatus | undefined;
}
export declare class ProjectStatus extends StepStatus {
    export?: StepStatus;
    package?: StepStatus;
    active: boolean;
    constructor(init?: Partial<ProjectStatus>);
}
export declare class ProjectProperty {
    id: string;
    key: string;
    value: any;
    constructor(init?: Partial<ProjectProperty>);
    static createNew(key: string, value: any): ProjectProperty;
}
export declare class ProjectModel {
    status: ProjectStatus;
    properties: ProjectProperty[];
    constructor(init?: Partial<ProjectModel>);
    static createNew(init?: Partial<ProjectModel>): ProjectModel;
}
