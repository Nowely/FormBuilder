import AbstractModel from "../AbstractModel";
import {Main} from "./TextAreaTypes";
import {makeObservable, observable} from "mobx";
import {TextAreaView} from "../../views/TextAreaView";
import {ITextArea} from "./ITextArea";
import {ControlString} from "../../utils/constants";

export class TextArea extends AbstractModel implements ITextArea{
    readonly type: ControlString = "TextArea";

    constructor(key: string) {
        super(key);
        makeObservable(this, {
            main: observable
        })
    }

    getComponent = () => AbstractModel.wrapComponent(this.key, {model: this}, TextAreaView);

    main: Main = {
        label: "",
        placeholder: "",
        rows: 3
    };
}