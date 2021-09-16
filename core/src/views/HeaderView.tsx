import {HeaderProps} from "../models/HeaderModel";

export const HeaderView = ({store} : { store: HeaderProps }) => {

    return (
        <div style={{textAlign: 'center'}}>
            <h4>{store.primary.content}</h4>
            <label>{store.primary.subheader}</label>
        </div>
    );
}