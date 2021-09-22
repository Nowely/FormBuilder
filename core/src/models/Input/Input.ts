import {action, makeObservable, observable} from "mobx";
import {Design, InputLabelPosition, InputType, Main, Size} from "./InputTypes";
import {InputView} from "../../views/InputView";
import AbstractModel from "../AbstractModel";
import {IInput} from "./IInput";
import {ControlString} from "../../utils/constants";
import {SyntheticEvent} from "react";

export class Input extends AbstractModel implements IInput {
    readonly type: ControlString = "Input"

    constructor(key: string) {
        super(key);
        makeObservable(this, {
            value: observable,
            onChange: action.bound,
            main: observable,
            design: observable,
        })
    }

    getComponent = () => AbstractModel.wrapComponent(this.key, {model: this}, InputView);

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
