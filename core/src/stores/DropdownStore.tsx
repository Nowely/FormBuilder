import {Control} from "./InputStore";
import {makeObservable, observable} from "mobx";
import {observer} from "mobx-react";
import React from "react";
import AbstractStore from "./AbstractStore";
import {Design, DropdownProps, Primary} from "../models/DropdownModel";
import {DropdownView} from "../views/DropdownView";

export class DropdownStore extends AbstractStore implements  DropdownProps{
    readonly controlType: string = Control[Control.Dropdown];

    constructor(key: string) {
        super(key);
        makeObservable(this, {
            primary: observable,
            design: observable,
        })
    }

    getObservableComponent = (): JSX.Element => {
        const ObservableComponent = observer(DropdownView);
        return <ObservableComponent store={this}/>
    };

    primary: Primary = {
        label: "",
        data: [],
        placeholder: ""
    };

    design: Design = {
        style: undefined,
        className: "",
        block: false
    };
}