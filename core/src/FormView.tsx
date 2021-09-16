import {Store} from "./stores/Store";
import {Control, InputStore} from "./stores/InputStore";
import {observer} from "mobx-react";
import {TextAreaStore} from "./stores/TextAreaStore";
import {HeaderStore} from "./stores/HeaderStore";
import {ButtonStore} from "./stores/ButtonStore";

export interface FormViewProps {
    getForm: ((code: string) => any[])
}

export const FormView = observer((props: FormViewProps) => {
    const store = new Store();
    //store.fillFormModel("test", props.getForm);

    store.model.push(new InputStore("asdasd")) //For testing

    var result = store.model.map(value => {
        //TODO rewrite initialization, remove getType step?
        let type = getType(Control[value.typeControl as keyof typeof Control]);
        if (value instanceof type){
            return value.getComponent()
        }
    })

    return <div>
        {result}
    </div>;
})

function getType(type: Control) {
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
            throw new Error("Unknown type of control!")
    }
}