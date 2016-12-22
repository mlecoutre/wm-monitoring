export interface Process {
    platform: string;
    correlationID_: string;
    domain_: string;
    pe_: string;
    flux_: string;
    status_: string;
    functionalIDName: string;
    functionalIDValue: string;
    template?: any;
    traceCount: number;
    traceCountString: string;
    lastDatetime: string;
    signature: string;
}

export interface Processes {
    processes: Process[];
    queryTime: number;
}

