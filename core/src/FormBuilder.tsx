import {observer} from "mobx-react-lite";
import {useEffect} from "react";
import {store} from "./stores/Store";
import {Button} from "rsuite";
import AbstractModel from "./models/AbstractModel";


export interface FormBuilderProps {
    getForm: ((code: string) => AbstractModel[])
}

export const FormBuilder = observer((props: FormBuilderProps) => {
    useEffect(() => {
        store.fillFormModel("test", props.getForm);
    }, []);

    let result = store.model.map(value => {
        const Component = (props: {}) => <>{value.getComponent()}</>
        return <Component key={value.key}/>
    });

    return <div>
        <Button onClick={store.download}>Download</Button>
        <Button onClick={store.upload}>Upload</Button>
        <Button onClick={store.clear}>Clear</Button>
        {result}
    </div>;
})
