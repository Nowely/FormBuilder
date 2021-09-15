import {Form, InputNumber, Input as RInput, DatePicker} from "rsuite";
import {SyntheticEvent, useMemo} from "react";
import {observer} from "mobx-react";
import {InputStore} from "../stores/InputStore";

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

export interface InputProps {
    Value: string | number | readonly string[];
    onChange: ((value: string | number | readonly string[], event: SyntheticEvent<Element, Event>) => void);

    general: {
        Name: string
        Label: string
        Type: InputType
        "Label Position": InputLabelPosition
        Placeholder: string
        Size: Size
        Disabled: boolean
        Transparent: boolean
        Fluid: boolean
        ReadOnly: boolean
    }
    /*style: {
        Width: string
        Height: string
        "Margin Top": string
        "Margin Bottom": string
        "Margin Left": string
        "Margin Right": string
        "Custom CSS class": string
        Style: string
        Hidden: boolean
        "Hidden in Print mode": boolean
        "Adaptive Layout": boolean
    }
    events: {
        "onChange timeout": number
        onChange: Action
    }
    tooltip: {}
    other: {
        Required: boolean
    }*/

}

//var a = new InputStore("props.name")

export const Input = observer((props: {name: string}) => {
    var a = useMemo(() => new InputStore(props.name), []);

    //onChange
    return (
        <div>
            {a.general.Label &&
            <Form.ControlLabel>{a.general.Label}</Form.ControlLabel>}
            <RInput
                placeholder={a.general.Placeholder}
                disabled={a.general.Disabled || a.general.ReadOnly}
                onChange={(value, event) => a.onChange(value, event)}
                value={a.Value}
            />
        </div>
    );
})
