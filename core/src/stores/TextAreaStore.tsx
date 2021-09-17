import AbstractStore from "./AbstractStore";
import {Primary, TextAreaProps} from "../models/TextAreaModel";
import {Control} from "./InputStore";
import {makeObservable, observable} from "mobx";
import {observer} from "mobx-react";
import React from "react";
import {TextAreaView} from "../views/TextAreaView";

export class TextAreaStore extends AbstractStore implements TextAreaProps{
    readonly controlType: string = Control[Control.TextArea];

    constructor(key: string) {
        super(key);
        makeObservable(this, {
            primary: observable
        })
    }

    getObservableComponent = (): JSX.Element => {
        const ObservableComponent = observer(TextAreaView);
        return <ObservableComponent store={this}/>
    };

    primary: Primary = {
        label: "",
        placeholder: "",
        rows: 3
    };
}