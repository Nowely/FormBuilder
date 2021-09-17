import {Store} from "./stores/Store";
import {Control, InputStore} from "./stores/InputStore";
import {observer} from "mobx-react";
import {TextAreaStore} from "./stores/TextAreaStore";
import {HeaderStore} from "./stores/HeaderStore";
import {ButtonStore} from "./stores/ButtonStore";
import {useEffect, useMemo} from "react";

export interface FormViewProps {
    getForm: ((code: string) => any[])
}

export const FormView = observer((props: FormViewProps) => {
    const store = useMemo(() => new Store(), []);
    useEffect(() => {
        store.fillFormModel("test", props.getForm);
    }, []);

    let result = store.model.map(value => value.getComponent());

    return <div>
        {result}
    </div>;
})


export const getType = (type: Control) => {
    switch (type) {
        case Control.Button:
            return ButtonStore
        case Control.Header:
            return HeaderStore
        case Control.TextArea:
            return TextAreaStore;
        case Control.Input:
            return InputStore;
        default:
            throw new Error(`Unknown type of control: ${type}!`)
    }
}