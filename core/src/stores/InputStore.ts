import {makeAutoObservable} from "mobx";
import {SyntheticEvent} from "react";
import {Customization, InputLabelPosition, InputProps, InputType, Primary, Size} from "../models/InputModel";

export class InputStore implements InputProps {

    constructor(name: string) {
        //TODO validation for name?
        makeAutoObservable(this)
        this.primary.name = name
    }

    primary: Primary = {
        name: "",
        label: "",
        type: InputType.Text,
        labelPosition: InputLabelPosition.Default,
        placeholder: "",
        size: Size.Default,
        disabled: false,
        transparent: false,
        fluid: false,
        readOnly: false,
        };

    value: string | number | readonly string[] = "";
    onChange(value: string | number | readonly string[], event: SyntheticEvent<Element, Event>): void {
        this.value = value;
        this.primary.label = value as string;
    }

    customization: Customization = {
        style: undefined,
        className: "",
        hidden: false,
        hiddenInPrintMode: false,
        adaptiveLayout: false,
    };

}