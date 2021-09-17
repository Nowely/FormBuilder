import {action, makeObservable, observable} from "mobx";
import {Control} from "./InputStore";
import {getType} from "../FormView";
import {ReactNode} from "react";

export default abstract class AbstractStore {
    key: string
    abstract readonly controlType: string

    protected constructor(key: string) {
        //TODO validation for key?
        this.key = key
        makeObservable(this, {
            key: observable,
            getComponent: action,
        })
    }

    //TODO универсальная реализация? Валидация?
    abstract getObservableComponent: () => ReactNode

    getComponent = (): ReactNode => {
        let type = getType(Control[this.controlType as keyof typeof Control]);

        if (this instanceof type){
            return this.getObservableComponent()
        }
        return null;
    }

    static castToStore = (obj: any) => {
        if (!obj.controlType)
            throw new Error("Don't find type of control!")

        let type = getType(Control[obj.controlType as keyof typeof Control]);

        let store = new type("")
        Object.assign(store, obj);
        return store;
    }
}