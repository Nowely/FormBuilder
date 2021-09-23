import {IContainer} from "../models/Container/IContainer";

export const ContainerView = ({model}: {model: IContainer}) => {

    return (
        <div>
            {model.children.map(value => value.getComponent())}
        </div>
    )
}