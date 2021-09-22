import {Button} from "rsuite";
import {IButton} from "../models/Button/IButton";


export const ButtonView = ({model}: { model: IButton}) => {

return (
    <Button appearance={model.main.appearance} children={model.main.content}/>
)
}