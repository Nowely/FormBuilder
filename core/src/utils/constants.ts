import AbstractStore from "../models/AbstractStore";

export enum Control {
    Input,
    Button,
    Header,
    TextArea,
    Dropdown
}

export type ControlString = keyof typeof Control


export type TypeToClass = {
    -readonly [key in keyof typeof Control]: (new (key: string) => AbstractStore) | null
};

export const ModelType: TypeToClass = {
    Input: null,
    Button: null,
    Header: null,
    TextArea: null,
    Dropdown: null
}
