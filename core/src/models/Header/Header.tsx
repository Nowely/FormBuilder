import {Main} from "./HeaderTypes";
import {observer} from "mobx-react-lite";
import React from "react";
import {HeaderView} from "../../views/HeaderView";
import AbstractStore from "../AbstractStore";
import {makeObservable, observable} from "mobx";
import {HeaderProps} from "./IHeader";
import {Control, ModelType} from "../../utils/constants";

export class HeaderStore extends AbstractStore implements HeaderProps{
    readonly controlType: string = Control[Control.Header];

    constructor(key: string) {
        super(key);
        ModelType.Header = ModelType.Header ?? HeaderStore;
        makeObservable(this, {
            main: observable,
        })
    }

    getObservableComponent = () => {
        const ObservableComponent = observer(HeaderView);
        return <ObservableComponent store={this}/>
    };

    main: Main = {
        content: "",
        subheader: ""
    };
}