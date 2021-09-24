import AbstractModel from "../AbstractModel";
import {IContainer} from "./IContainer";
import {ControlString, PropDescription} from "../../utils/constants";
import {ContainerDescription} from "./ContainerDescription";
import {ContainerView} from "../../views/ContainerView";
import {makeObservable, observable} from "mobx";

export class Container extends AbstractModel implements IContainer{
    readonly type: ControlString = "Container";

    constructor(key: string) {
        super(key);
        makeObservable(this, {
            children: observable,
        })
    }

    getComponent = () => {


        return AbstractModel.wrapComponent(this.key, {model: this}, ContainerView);

    };

    getDescription = () => ContainerDescription as unknown as { [key: string]: PropDescription | null };

    children: AbstractModel[] = [];
}