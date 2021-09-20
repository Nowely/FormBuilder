import {Control} from "../Input/InputStore";
import {makeObservable, observable} from "mobx";
import {observer} from "mobx-react-lite";
import React from "react";
import AbstractStore from "../AbstractStore";
import {Design, Main} from "./DropdownTypes";
import {DropdownView} from "../../views/DropdownView";
import {IDropdown} from "./IDropdown";

export class DropdownStore extends AbstractStore implements  IDropdown{
    readonly controlType: string = Control[Control.Dropdown];

    constructor(key: string) {
        super(key);
        makeObservable(this, {
            main: observable,
            design: observable,
        })
    }

    getObservableComponent = (): JSX.Element => {
        const ObservableComponent = observer(DropdownView);
        return <ObservableComponent store={this}/>
    };

    main: Main = {
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