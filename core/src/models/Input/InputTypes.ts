import {CSSProperties} from "react";

export enum InputType {
    Text,
    Number,
    Password,
    File,
    Date,
    Time,
    DateTime,
}

export enum InputLabelPosition {
    Default,
    Left,
    Right,
    "Left corner",
    "Right corner",
}

export enum Size {
    Default,
    Mini,
    Tiny,
    Small,
    Medium,
    Large,
}

export class Action {
    name: string = ""
    parameters: { name: string, value: string }[] = [{name: "", value: ""}]
    targets: string[] = []
}

export type Main = {
    label: string
    type: InputType
    labelPosition: InputLabelPosition
    placeholder: string
    size: Size
    disabled: boolean
    transparent: boolean
    fluid: boolean
    readOnly: boolean
}

export type Design = {
    style: CSSProperties | undefined
    className: string
    hidden: boolean
    hiddenInPrintMode: boolean
    adaptiveLayout: boolean
}

