import {Form, Input} from "rsuite";
import {forwardRef} from "react";
import {TextAreaProps} from "../models/TextArea/ITextArea";

export const TextAreaView = ({store} : {store: TextAreaProps}) => {
    console.log("выаываыва")
    return (
        <div>
            <Form.ControlLabel>{store.main.label}</Form.ControlLabel>
            <Textarea {...store.main}/>
        </div>
    )
}

const Textarea = (props: any) =>
    <Input rows={5} as="textarea" {...props}/>;