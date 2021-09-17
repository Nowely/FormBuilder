import {makeObservable, observable} from "mobx";
import {Control} from "./InputStore";
import {getType} from "../FormView";

export default abstract class AbstractStore {
    key: string
    abstract readonly controlType: string

    protected constructor(key: string) {
        //TODO validation for key?
        this.key = key
        makeObservable(this, {
            key: observable
        })
    }

    //TODO универсальная реализация? Валидация?
    abstract getObservableComponent: () => JSX.Element

    getComponent = (): JSX.Element | null => {
        let type = getType(Control[this.controlType as keyof typeof Control]);

        if (this instanceof type){
            return this.getObservableComponent()
        }
        return null;
    }
}