import AbstractStore from "../AbstractStore";
import {Main} from "./TextAreaTypes";
import {Control} from "../Input/InputStore";
import {makeObservable, observable} from "mobx";
import {observer} from "mobx-react-lite";
import React from "react";
import {TextAreaView} from "../../views/TextAreaView";
import {TextAreaProps} from "./ITextArea";

export class TextAreaStore extends AbstractStore implements TextAreaProps{
    readonly controlType: string = Control[Control.TextArea];

    constructor(key: string) {
        super(key);
        makeObservable(this, {
            main: observable
        })
    }

    getObservableComponent = (): JSX.Element => {
        const ObservableComponent = observer(TextAreaView);
        return <ObservableComponent store={this}/>
    };

    main: Main = {
        label: "",
        placeholder: "",
        rows: 3
    };
}