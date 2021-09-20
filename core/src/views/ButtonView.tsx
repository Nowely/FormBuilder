import {Button} from "rsuite";
import {IButton} from "../models/Button/IButton";


export const ButtonView = ({store}: { store: IButton}) => {

return (
    <Button appearance={store.main.appearance} children={store.main.content}/>
)
}