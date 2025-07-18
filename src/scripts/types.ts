export interface Data {
    title:    string;
    witnesses: string[];
    table:     Row[];
}

export interface Row {
    index: string;
    cols:  Array<Col[]>;
}

export interface Col {
    type?:  string;
    value?: string;
}
