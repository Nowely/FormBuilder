export type Primary = {
    content: string
    appearance: "default" | "primary" | "link" | "subtle" | "ghost"
}

export interface ButtonProps {
    primary: Primary
}