import AbstractStore from "../AbstractStore";
import {Main} from "./ButtonTypes";
import {observer} from "mobx-react-lite";
import React from "react";
import {ButtonView} from "../../views/ButtonView";
import {makeObservable, observable} from "mobx";
import {IButton} from "./IButton";
import {ControlString, ModelType} from "../../utils/constants";

export class ButtonStore extends AbstractStore implements IButton{
    readonly controlType: ControlString = "Button";

    constructor(key: string) {
        super(key);
        ModelType.Button = ModelType.Button ?? ButtonStore;
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