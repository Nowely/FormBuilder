import {DropdownProps} from "../models/DropdownModel";
import {Form, InputPicker} from "rsuite";

export const DropdownView = ({store} : { store: DropdownProps }) => {

    return (
        <div>
            <Form.ControlLabel>{store.primary.label}</Form.ControlLabel>
            <InputPicker {...store.design} data={store.primary.data} placeholder={store.primary.placeholder}/>
        </div>
    )
}