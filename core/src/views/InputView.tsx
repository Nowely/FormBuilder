import {Form, Input as RInput} from "rsuite";
import {InputProps} from "../models/Input/IInput";


export const InputView = ({store}: { store: InputProps }) => {

    console.log("Яяяя")
    return (
        <div style={store.design.style} className={store.design.className}>
            {store.main.label &&
            <Form.ControlLabel>{store.main.label}</Form.ControlLabel>}
            <RInput
                placeholder={store.main.placeholder}
                disabled={store.main.disabled || store.main.readOnly}
                onChange={store.onChange}
                value={store.value}
            />
        </div>
    );
}
