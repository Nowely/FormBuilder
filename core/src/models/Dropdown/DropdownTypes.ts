import {CSSProperties} from "react";

export type Main = {
    label: string,
    data: { label: string, value: string }[]
    placeholder: string
}

export type Design = {
    style: CSSProperties | undefined
    className: string
    block: boolean
}

