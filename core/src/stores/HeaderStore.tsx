import {HeaderProps, Primary} from "../models/HeaderModel";
import {observer} from "mobx-react";
import React from "react";
import {HeaderView} from "../views/HeaderView";
import AbstractStore from "./AbstractStore";
import {Control} from "./InputStore";

export class HeaderStore extends AbstractStore implements HeaderProps{
    readonly controlType: string = Control[Control.Header];

    getComponent: () => JSX.Element = () => {
        const ObservableComponent = observer(HeaderView);
        return <ObservableComponent store={this}/>
    };

    primary: Primary = {
        content: "",
        subheader: ""
    };
}