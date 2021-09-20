import {Store} from "./stores/Store";
import {Control, InputStore} from "./models/Input/InputStore";
import {observer} from "mobx-react-lite";
import {TextAreaStore} from "./models/TextArea/TextAreaStore";
import {HeaderStore} from "./models/Header/HeaderStore";
import {ButtonStore} from "./models/Button/ButtonStore";
import {useEffect, useMemo} from "react";
import {DropdownStore} from "./models/Dropdown/DropdownStore";
import {Button} from "rsuite";

export interface FormViewProps {
    getForm: ((code: string) => any[])
}

export const FormView = observer((props: FormViewProps) => {
    const store = useMemo(() => new Store(), []);
    useEffect(() => {
        store.fillFormModel("test", props.getForm);
    }, []);

    let result = store.model.map(value => {

        return value.getComponent();
    });

    return <div>
        <Button onClick={store.download}>Download</Button>
        <Button onClick={store.upload}>Upload</Button>
        <Button onClick={store.clear}>Clear</Button>
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
        case Control.Dropdown:
            return  DropdownStore;
        default:
            throw new Error(`Unknown type of control: ${type}!`)
    }
}