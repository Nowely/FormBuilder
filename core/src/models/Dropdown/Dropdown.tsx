import {makeObservable, observable} from "mobx";
import React from "react";
import AbstractModel from "../AbstractModel";
import {Design, Main} from "./DropdownTypes";
import {DropdownView} from "../../views/DropdownView";
import {IDropdown} from "./IDropdown";
import {ControlString} from "../../utils/constants";

export class Dropdown extends AbstractModel implements  IDropdown{
    readonly type: ControlString = "Dropdown";

    constructor(key: string) {
        super(key);
        makeObservable(this, {
            main: observable,
            design: observable,
        })
    }

    getComponent = () => AbstractModel.wrapComponent(this.key, {model: this}, DropdownView);

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