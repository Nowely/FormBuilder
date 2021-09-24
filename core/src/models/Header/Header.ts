import {Main} from "./HeaderTypes";
import {HeaderView} from "../../views/HeaderView";
import AbstractModel from "../AbstractModel";
import {makeObservable, observable} from "mobx";
import {IHeader} from "./IHeader";
import {ControlString, PropDescription} from "../../utils/constants";
import {HeaderDescription} from "./HeaderDescription";

export class Header extends AbstractModel implements IHeader{
    readonly type: ControlString = "Header";

    constructor(key: string) {
        super(key);
        makeObservable(this, {
            main: observable,
        })
    }

    getComponent = () => AbstractModel.wrapComponent(this.key, {model: this}, HeaderView);

    main: Main = {
        content: "Header",
        subheader: ""
    };

    getDescription = () => HeaderDescription as unknown as { [key: string]: PropDescription | null };
}