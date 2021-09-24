import AbstractModel from "../models/AbstractModel";
import _, {functions} from "lodash";
import {accumulator} from "./constants";
import {ItemDataType} from "rsuite/esm/@types/common";


export class Tree {
    root: Node = new Node();
    //[index: number]: Node;

    //TODO autorun and Observable Arrays?
    constructor(models: AbstractModel[]) {
        this.root.children = models.map(child => new Node(child));
    }

    find(key: string): Node | null {
        return Tree.find(key, this.root);
    }

    /*map<U>(callback: (value: AbstractModel, index: number, array: AbstractModel[]) => U, thisArg?: any): U[] {
        //return this.root.children.
        [].reduce()

    }*/

    //TODO remove any and set clear description and logic
    reduce<U>(
        callback: (temp: U, accumulator: accumulator<any>, node: Node, depthLevel: number, rootNode: Node) => U,
        initialValue?: U): U {
        let accumulator: accumulator<any> = {};
        let result;
        return Tree.reduce(result, accumulator, this.root, 0, this.root, callback, initialValue);
        //
    }

    private static reduce<U>(
        result: U | undefined, accumulator: accumulator<any>, node: Node, depthLevel: number, root: Node,
        callback: (temp: any, accumulator: any, node: Node, depthLevel: number, rootNode: Node) => U,
        initialValue?: U): U {


        /*if (initialValue)
            accumulator = callback(initialValue, node, 0, 0, root);*/


        result = callback(result, accumulator, node, depthLevel, root);

        if (node.children) {
            let currentDepth = depthLevel + 1
            for (let i = 0; i < node.children.length; i++) {
                result = Tree.reduce(result, accumulator, node.children[i], currentDepth, root, callback, initialValue)
            }
        }

        if (!result) throw TypeError()

        return result;
    }

    private static find(key: string, node: Node): Node | null {
        if (node.key == key) return node

        if (node.children) {
            for (let i = 0; i < node.children.length; i++) {
                let item = this.find(key, node.children[i])

                if (item) return item
            }
        }

        return null
    }
}

export class Node {
    key: string

    get isRoot(): boolean {
        return _.isNull(this.value);
    }

    value: AbstractModel | null = null
    parent?: AbstractModel
    children?: Node[]

    constructor(value?: AbstractModel, parent?: AbstractModel) {
        this.key = value?.key ?? "";

        if (value)
            this.value = value;

        this.parent = parent;

        if (value?.children) {
            this.children = value.children.map(child => new Node(child, value));
        }
    }
}