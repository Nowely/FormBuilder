import AbstractModel from "../AbstractModel";
import {Main} from "./ButtonTypes";
import {observer} from "mobx-react-lite";
import React from "react";
import {ButtonView} from "../../views/ButtonView";
import {makeObservable, observable} from "mobx";
import {IButton} from "./IButton";
import {ControlString} from "../../utils/constants";

export class Button extends AbstractModel implements IButton{
    readonly type: ControlString = "Button";

    constructor(key: string) {
        super(key);
        makeObservable(this, {
            main: observable
        })
    }

    getComponent = () => {
        const ObservableComponent = observer(ButtonView);
        return <ObservableComponent store={this}/>
    };

    main: Main = {
        appearance: "default",
        content: ""

    };
}