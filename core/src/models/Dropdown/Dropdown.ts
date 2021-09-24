import {makeObservable, observable} from "mobx";
import AbstractModel from "../AbstractModel";
import {Design, Main} from "./DropdownTypes";
import {DropdownView} from "../../views/DropdownView";
import {IDropdown} from "./IDropdown";
import {ControlString, PropDescription} from "../../utils/constants";
import {DropdownDescription} from "./DropdownDescription";

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
        label: "Dropdown",
        data: [],
        placeholder: ""
    };

    design: Design = {
        style: undefined,
        className: "",
        block: false
    };

    getDescription = () => DropdownDescription as unknown as { [key: string]: PropDescription | null };
}