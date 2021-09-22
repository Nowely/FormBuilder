import {Form, Input} from "rsuite";
import {ITextArea} from "../models/TextArea/ITextArea";

export const TextAreaView = ({model} : {model: ITextArea}) => {
    return (
        <div>
            <Form.ControlLabel>{model.main.label}</Form.ControlLabel>
            <Textarea {...model.main}/>
        </div>
    )
}

const Textarea = (props: any) =>
    <Input rows={5} as="textarea" {...props}/>;