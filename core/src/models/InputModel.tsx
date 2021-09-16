import {CSSProperties, SyntheticEvent} from "react";
import {types} from "util";

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

export type Primary = {
    name: string
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

export type Customization = {
    style: CSSProperties | undefined
    className: string
    hidden: boolean
    hiddenInPrintMode: boolean
    adaptiveLayout: boolean
}

export interface InputProps {
    value: string | number | readonly string[];
    onChange: ((value: string | number | readonly string[], event: SyntheticEvent<Element, Event>) => void);

    primary: Primary
    customization: Customization

    /*events: {
        "onChange timeout": number
        onChange: Action
    }
    tooltip: {}
    other: {
        Required: boolean
    }*/

}