import {makeObservable, observable} from "mobx";
import {ReactNode} from "react";
import {ControlString} from "../utils/constants";

export default abstract class AbstractModel {
    key: string
    abstract readonly type: ControlString

    protected constructor(key: string) {
        //TODO validation for key?
        this.key = key
        makeObservable(this, {
            key: observable,
        })
    }

    //TODO универсальная реализация? Валидация?
    abstract getComponent: () => ReactNode
}