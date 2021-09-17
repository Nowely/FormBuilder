import AbstractStore from "./AbstractStore";
import {ButtonProps, Primary} from "../models/ButtonModel";
import {Control} from "./InputStore";
import {observer} from "mobx-react-lite";
import React from "react";
import {ButtonView} from "../views/ButtonView";
import {makeObservable, observable} from "mobx";

export class ButtonStore extends AbstractStore implements ButtonProps{
    readonly controlType: string = Control[Control.Button];

    constructor(key: string) {
        super(key);
        makeObservable(this, {
            primary: observable
        })
    }

    getObservableComponent = (): JSX.Element => {
        const ObservableComponent = observer(ButtonView);
        return <ObservableComponent store={this}/>
    };

    primary: Primary = {
        appearance: "default",
        content: ""

    };
}