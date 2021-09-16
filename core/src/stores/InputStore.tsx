import {makeAutoObservable} from "mobx";
import React, {SyntheticEvent, useMemo} from "react";
import {Design, InputLabelPosition, InputProps, InputType, Primary, Size} from "../models/InputModel";
import {observer} from "mobx-react";
import {InputView} from "../views/InputView";

export enum Control {
    Input,
    Button,
    Header,
    TextArea,
}

export class InputStore implements InputProps {
    constructor(key: string) {
        //TODO validation for key?
        makeAutoObservable(this)
        this.key = key
    }

    key: string
    readonly typeControl: string = Control[Control.Input]

    //Вынести с абстрактный класс?
    getComponent = () => {
        //TODO Здесь можем адаптивно подтягивать и подставлять вью
        const ObservableInput = observer(InputView);
        return <ObservableInput store={this}/>
        //return Input.bind(this, this.key);
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
