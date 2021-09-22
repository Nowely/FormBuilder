import {store} from "./stores/Store";
import {observer} from "mobx-react-lite";
import {useEffect} from "react";
import {Button} from "rsuite";
import AbstractModel from "./models/AbstractModel";

export interface FormViewProps {
    getForm: ((code: string) => AbstractModel[])
}

export const FormView = observer((props: FormViewProps) => {
    useEffect(() => {
        store.fillFormModel("test", props.getForm);
    }, []);

    let components = store.model.map(value => value.getComponent());

    return <div>
        <Button onClick={store.download}>Download</Button>
        <Button onClick={store.upload}>Upload</Button>
        <Button onClick={store.clear}>Clear</Button>
        {components}
    </div>;
})


