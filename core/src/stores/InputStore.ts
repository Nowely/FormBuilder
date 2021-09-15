import {InputLabelPosition, InputProps, InputType, Size} from "../views/Input";
import {makeAutoObservable} from "mobx";
import {SyntheticEvent} from "react";

export class InputStore implements InputProps {

    constructor(name: string) {
        //TODO validation for name?
        makeAutoObservable(this)
        this.general.Name = name
    }

    general: {
        Name: string;
        Label: string;
        Type: InputType;
        "Label Position": InputLabelPosition;
        Placeholder: string;
        Size: Size;
        Disabled: boolean;
        Transparent: boolean;
        Fluid: boolean;
        ReadOnly: boolean
    } = {
        Name: "",
        Label: "",
        Type: InputType.Text,
        "Label Position": InputLabelPosition.Default,
        Placeholder: "",
        Size: Size.Default,
        Disabled: false,
        Transparent: false,
        Fluid: false,
        ReadOnly: false,
        };

    Value: string | number | readonly string[] = "";
    onChange(value: string | number | readonly string[], event: SyntheticEvent<Element, Event>): void {
        this.Value = value;
    }

}