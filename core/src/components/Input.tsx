import {InputProps} from "../models/InputModel";
import React, {useMemo} from "react";
import {InputStore} from "../stores/InputStore";
import {observer} from "mobx-react";
import {InputView} from "../views/InputView";

export const Input = (props: { name: string }) => {
    const store: InputProps = useMemo(() => new InputStore(props.name), []);
    //TODO Здесь можем адаптивно подтягивать и подставлять вью
    const ObservableInput = observer(InputView);
    return <ObservableInput store={store}/>
}