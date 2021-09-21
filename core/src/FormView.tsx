import {Store} from "./stores/Store";
import {observer} from "mobx-react-lite";
import {useEffect, useMemo} from "react";
import {Button} from "rsuite";
import AbstractStore from "./models/AbstractStore";

export interface FormViewProps {
    getForm: ((code: string) => AbstractStore[])
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