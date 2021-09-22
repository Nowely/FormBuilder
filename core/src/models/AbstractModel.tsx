import {makeObservable, observable} from "mobx";
import React, {ReactNode} from "react";
import {ControlString, PropDescription} from "../utils/constants";
import {observer} from "mobx-react-lite";

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


    static wrapComponent = <P extends object>(
        key: string, props: P, view: React.FunctionComponent<P>) => {

        const ObservableComponent = observer(view);
        return <ObservableComponent key={key} {...props}/>
    }

    abstract getDescription: () => { [key: string]: [PropDescription | null] }
}