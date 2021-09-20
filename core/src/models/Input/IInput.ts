import {SyntheticEvent} from "react";
import {Design, Main} from "./InputTypes";

export interface InputProps {
    value: string | number | readonly string[];
    onChange: ((value: string | number | readonly string[], event: SyntheticEvent<Element, Event>) => void);

    main: Main
    design: Design

    /*events: {
        "onChange timeout": number
        onChange: Action
    }
    tooltip: {}
    other: {
        Required: boolean
    }*/

}