import {Form, InputPicker} from "rsuite";
import {IDropdown} from "../models/Dropdown/IDropdown";

export const DropdownView = ({model} : { model: IDropdown }) => {

    return (
        <div>
            <Form.ControlLabel>{model.main.label}</Form.ControlLabel>
            <InputPicker {...model.design} data={model.main.data} placeholder={model.main.placeholder}/>
        </div>
    )
}