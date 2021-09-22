import {Form, Input as RInput} from "rsuite";
import {IInput} from "../models/Input/IInput";


export const InputView = ({model}: { model: IInput }) => {

    return (
        <div style={model.design.style} className={model.design.className}>
            {model.main.label &&
            <Form.ControlLabel>{model.main.label}</Form.ControlLabel>}
            <RInput
                placeholder={model.main.placeholder}
                disabled={model.main.disabled || model.main.readOnly}
                onChange={model.onChange}
                value={model.value}
            />
        </div>
    );
}
