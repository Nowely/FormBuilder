import {Form, Input as RInput} from "rsuite";
import {InputProps} from "../models/InputModel";


export const InputView = ({store}: { store: InputProps }) => {

    return (
        <div style={store.customization.style} className={store.customization.className}>
            {store.primary.label &&
            <Form.ControlLabel>{store.primary.label}</Form.ControlLabel>}
            <RInput
                placeholder={store.primary.placeholder}
                disabled={store.primary.disabled || store.primary.readOnly}
                onChange={(value, event) => store.onChange(value, event)}
                value={store.value}
            />
        </div>
    );
}
