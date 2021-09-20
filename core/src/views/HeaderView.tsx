import {HeaderProps} from "../models/Header/IHeader";

export const HeaderView = ({store} : { store: HeaderProps }) => {

    return (
        <div style={{textAlign: 'center'}}>
            <h4>{store.main.content}</h4>
            <label>{store.main.subheader}</label>
        </div>
    );
}