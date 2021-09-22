import AbstractModel from "../AbstractModel";
import {Main} from "./ButtonTypes";
import {ButtonView} from "../../views/ButtonView";
import {makeObservable, observable} from "mobx";
import {IButton} from "./IButton";
import {ControlString, PropDescription} from "../../utils/constants";
import {ButtonDescription} from "./ButtonDescription";

export class Button extends AbstractModel implements IButton {
    readonly type: ControlString = "Button";

    constructor(key: string) {
        super(key);
        makeObservable(this, {
            main: observable
        })
    }

    getComponent = () => AbstractModel.wrapComponent(this.key, {model: this}, ButtonView);

    main: Main = {
        appearance: "default",
        content: "Button"

    };

    getDescription = () => ButtonDescription as unknown as { [key: string]: [PropDescription | null] };
}