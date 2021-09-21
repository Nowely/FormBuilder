import {makeObservable, observable} from "mobx";
import {observer} from "mobx-react-lite";
import React from "react";
import AbstractStore from "../AbstractStore";
import {Design, Main} from "./DropdownTypes";
import {DropdownView} from "../../views/DropdownView";
import {IDropdown} from "./IDropdown";
import {ControlString, ModelType} from "../../utils/constants";

export class DropdownStore extends AbstractStore implements  IDropdown{
    readonly controlType: ControlString = "Dropdown";

    constructor(key: string) {
        super(key);
        ModelType.Dropdown = ModelType.Dropdown ?? DropdownStore;
        makeObservable(this, {
            main: observable,
            design: observable,
        })
    }

    getObservableComponent = () => {
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