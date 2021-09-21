import {action, makeObservable, observable} from "mobx";
import {ReactNode} from "react";
import {Control, ModelType} from "../utils/constants";

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
        //let type = getType(Control[this.controlType as keyof typeof Control]);
        return this.getObservableComponent()
    };

    static castToStore = (obj: any) => {
        if (!obj.controlType)
            throw new Error("Don't find type of control!")

        let modelType = ModelType[obj.controlType];
        if (modelType == null) return;

        //TODO improve: new object without create empty object with key
        let model = new modelType("")
        Object.assign(model, obj);
        return model;
    }
}