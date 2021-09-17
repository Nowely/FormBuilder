import {ButtonProps} from "../models/ButtonModel";
import {Button} from "rsuite";


export const ButtonView = ({store}: { store: ButtonProps}) => {

return (
    <Button appearance={store.primary.appearance} children={store.primary.content}/>
)
}