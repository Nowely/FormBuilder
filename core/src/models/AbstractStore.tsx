import {action, makeObservable, observable} from "mobx";
import {ReactNode} from "react";
import {ControlString, ModelType} from "../utils/constants";

export default abstract class AbstractStore {
    key: string
    abstract readonly controlType: ControlString

    protected constructor(key: string) {
        //TODO validation for key?
        this.key = key
        makeObservable(this, {
            key: observable,
        })
    }

    //TODO универсальная реализация? Валидация?
    abstract getComponent: () => ReactNode

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