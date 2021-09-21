import {action, makeObservable, observable} from "mobx";
import React, {SyntheticEvent} from "react";
import {Design, InputLabelPosition, InputType, Main, Size} from "./InputTypes";
import {observer} from "mobx-react-lite";
import {InputView} from "../../views/InputView";
import AbstractModel from "../AbstractModel";
import {IInput} from "./IInput";
import {ControlString} from "../../utils/constants";

export class Input extends AbstractModel implements IInput {
    readonly controlType: ControlString = "Input"

    constructor(key: string) {
        super(key);
        makeObservable(this, {
            value: observable,
            onChange: action.bound,
            main: observable,
            design: observable,
        })
    }

    getComponent = () => {
        const ObservableComponent = observer(InputView);
        return <ObservableComponent store={this}/>
    };

    value: string | number | readonly string[] = "";
    onChange(value: string | number | readonly string[], event: SyntheticEvent<Element, Event>): void {
        this.value = value;
    }

    main: Main = {
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
