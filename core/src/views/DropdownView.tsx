import {Form, InputPicker} from "rsuite";
import {IDropdown} from "../models/Dropdown/IDropdown";

export const DropdownView = ({store} : { store: IDropdown }) => {

    return (
        <div>
            <Form.ControlLabel>{store.main.label}</Form.ControlLabel>
            <InputPicker {...store.design} data={store.main.data} placeholder={store.main.placeholder}/>
        </div>
    )
}