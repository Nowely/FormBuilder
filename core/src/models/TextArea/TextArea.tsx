import AbstractModel from "../AbstractModel";
import {Main} from "./TextAreaTypes";
import {makeObservable, observable} from "mobx";
import {observer} from "mobx-react-lite";
import React from "react";
import {TextAreaView} from "../../views/TextAreaView";
import {ITextArea} from "./ITextArea";
import {ControlString} from "../../utils/constants";

export class TextArea extends AbstractModel implements ITextArea{
    readonly controlType: ControlString = "TextArea";

    constructor(key: string) {
        super(key);
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