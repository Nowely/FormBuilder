import AbstractStore from "../AbstractStore";
import {Main} from "./ButtonTypes";
import {Control} from "../Input/InputStore";
import {observer} from "mobx-react-lite";
import React from "react";
import {ButtonView} from "../../views/ButtonView";
import {makeObservable, observable} from "mobx";
import {IButton} from "./IButton";

export class ButtonStore extends AbstractStore implements IButton{
    readonly controlType: string = Control[Control.Button];

    constructor(key: string) {
        super(key);
        makeObservable(this, {
            main: observable
        })
    }

    getObservableComponent = (): JSX.Element => {
        const ObservableComponent = observer(ButtonView);
        return <ObservableComponent store={this}/>
    };

    main: Main = {
        appearance: "default",
        content: ""

    };
}