import {makeAutoObservable} from "mobx";
import React, {SyntheticEvent, useMemo} from "react";
import {Design, InputLabelPosition, InputProps, InputType, Primary, Size} from "../models/InputModel";
import {observer} from "mobx-react";
import {InputView} from "../views/InputView";
import AbstractStore from "./AbstractStore";

export enum Control {
    Input,
    Button,
    Header,
    TextArea,
}

export class InputStore extends AbstractStore implements InputProps {
    readonly controlType: string = Control[Control.Input]

    getComponent = () => {
        const ObservableComponent = observer(InputView);
        return <ObservableComponent store={this}/>
    };

    value: string | number | readonly string[] = "";
    onChange(value: string | number | readonly string[], event: SyntheticEvent<Element, Event>): void {
        this.value = value;
        this.primary.label = value as string;
    }

    primary: Primary = {
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

    design: Design = {
        style: undefined,
        className: "",
        hidden: false,
        hiddenInPrintMode: false,
        adaptiveLayout: false,
    };

}
