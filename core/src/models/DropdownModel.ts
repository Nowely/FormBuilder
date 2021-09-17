import {CSSProperties} from "react";

export type Primary = {
    label: string,
    data: { label: string, value: string }[]
    placeholder: string
}

export type Design = {
    style: CSSProperties | undefined
    className: string
    block: boolean
}

export interface DropdownProps {
    primary: Primary
    design: Design
}