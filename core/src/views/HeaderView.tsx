import {IHeader} from "../models/Header/IHeader";

export const HeaderView = ({model} : { model: IHeader }) => {

    return (
        <div style={{textAlign: 'center'}}>
            <h4>{model.main.content}</h4>
            <label>{model.main.subheader}</label>
        </div>
    );
}