import AbstractModel from "../models/AbstractModel";

export enum Control {
    Input,
    Button,
    Header,
    TextArea,
    Dropdown,
}

/**
 * Control enum in string view
 */
export type ControlString = keyof typeof Control

/**
 * Type for correlation between name of control and their model
 */
export type TypeToClass = {
    [key in keyof typeof Control]: new (key: string) => AbstractModel
};


/**
 * Join, Prev, Path types from https://stackoverflow.com/questions/58434389/typescript-deep-keyof-of-a-nested-object
 */
type Join<K, P> = K extends string | number ?
    P extends string | number ?
        `${K}${"" extends P ? "" : "."}${P}`
        : never : never;

type Prev = [never, 0, 1, 2, 3, 4, ...0[]];

/**
 * Return all props path
 * type NestedObjectPaths = "a" | "b" | "nest" | "otherNest" | "nest.c" | "otherNest.c"
 */
type Paths<T, D extends number = 10> = [D] extends [never] ? never : T extends object ?
    {
        [K in keyof T]-?: K extends string | number ?
        `${K}` | Join<K, Paths<T[K], Prev[D]>>
        : never
    }[keyof T] : ""



export type PropDescription = {
    title: string
    description?: string
}

export type AllPropsDescriptionOf<T extends object> = {
    [keys in Paths<T>]: PropDescription | null;
};

/**
 * Replace non object on type B in T and return new type. Incorrect work with function now.
 * https://stackoverflow.com/questions/67170249/change-type-of-values-in-deeply-nested-object-structure
 */
type Replace<T, B> = T extends object
    ? { [key in keyof T]: T[key] extends object ? Replace<T[key], B> : B }
    : T;
