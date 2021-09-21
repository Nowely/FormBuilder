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
    [key in keyof typeof Control]: new (key: string) => AbstractStore
};

