import {TextAreaProps} from "../models/TextAreaModel";
import {Form, Input} from "rsuite";
import {forwardRef} from "react";

export const TextAreaView = ({store} : {store: TextAreaProps}) => {

    return (
        <div>
            <Form.ControlLabel>{store.primary.label}</Form.ControlLabel>
            <Textarea {...store.primary}/>
        </div>
    )
}

const Textarea = (props: any) =>
    <Input rows={5} as="textarea" {...props}/>;