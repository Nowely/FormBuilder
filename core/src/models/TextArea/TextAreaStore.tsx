import AbstractStore from "../AbstractStore";
import {Main} from "./TextAreaTypes";
import {makeObservable, observable} from "mobx";
import {observer} from "mobx-react-lite";
import React from "react";
import {TextAreaView} from "../../views/TextAreaView";
import {TextAreaProps} from "./ITextArea";
import {ControlString, ModelType} from "../../utils/constants";

export class TextAreaStore extends AbstractStore implements TextAreaProps{
    readonly controlType: ControlString = "TextArea";

    constructor(key: string) {
        super(key);
        ModelType.TextArea = ModelType.TextArea ?? TextAreaStore;
        makeObservable(this, {
            main: observable
        })
    }

    getComponent = () => {
        const ObservableComponent = observer(TextAreaView);
        return <ObservableComponent store={this}/>
    };

    main: Main = {
        label: "",
        placeholder: "",
        rows: 3
    };
}