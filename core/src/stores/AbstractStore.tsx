import {makeAutoObservable} from "mobx";

export default abstract class AbstractStore {
    key: string
    abstract readonly controlType: string

    constructor(key: string) {
        //TODO validation for key?
        makeAutoObservable(this)
        this.key = key
    }

    //TODO универсальная реализация? Валидация?
    abstract getComponent: () => JSX.Element
}