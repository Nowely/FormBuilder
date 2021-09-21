import {Main} from "./HeaderTypes";
import {observer} from "mobx-react-lite";
import React from "react";
import {HeaderView} from "../../views/HeaderView";
import AbstractModel from "../AbstractModel";
import {makeObservable, observable} from "mobx";
import {IHeader} from "./IHeader";
import {ControlString} from "../../utils/constants";

export class Header extends AbstractModel implements IHeader{
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