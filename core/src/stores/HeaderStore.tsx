import {HeaderProps, Primary} from "../models/HeaderModel";
import {observer} from "mobx-react";
import React from "react";
import {HeaderView} from "../views/HeaderView";
import AbstractStore from "./AbstractStore";
import {Control} from "./InputStore";
import {action, makeObservable, observable} from "mobx";

export class HeaderStore extends AbstractStore implements HeaderProps{
    readonly controlType: string = Control[Control.Header];

    constructor(key: string) {
        super(key);
        makeObservable(this, {
            primary: observable,
        })
    }

    getObservableComponent: () => JSX.Element = () => {
        const ObservableComponent = observer(HeaderView);
        return <ObservableComponent store={this}/>
    };

    primary: Primary = {
        content: "",
        subheader: ""
    };
}