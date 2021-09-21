import {Main} from "./HeaderTypes";
import {observer} from "mobx-react-lite";
import React from "react";
import {HeaderView} from "../../views/HeaderView";
import AbstractStore from "../AbstractStore";
import {makeObservable, observable} from "mobx";
import {HeaderProps} from "./IHeader";
import {ControlString} from "../../utils/constants";

export class HeaderStore extends AbstractStore implements HeaderProps{
    readonly controlType: ControlString = "Header";

    constructor(key: string) {
        super(key);
        makeObservable(this, {
            main: observable,
        })
    }

    getComponent = () => {
        const ObservableComponent = observer(HeaderView);
        return <ObservableComponent store={this}/>
    };

    main: Main = {
        content: "",
        subheader: ""
    };
}