import {Main} from "./HeaderTypes";
import {observer} from "mobx-react-lite";
import React from "react";
import {HeaderView} from "../../views/HeaderView";
import AbstractStore from "../AbstractStore";
import {Control} from "../Input/InputStore";
import {action, makeObservable, observable} from "mobx";
import {HeaderProps} from "./IHeader";

export class HeaderStore extends AbstractStore implements HeaderProps{
    readonly controlType: string = Control[Control.Header];

    constructor(key: string) {
        super(key);
        makeObservable(this, {
            main: observable,
        })
    }

    getObservableComponent: () => JSX.Element = () => {
        const ObservableComponent = observer(HeaderView);
        return <ObservableComponent store={this}/>
    };

    main: Main = {
        content: "",
        subheader: ""
    };
}