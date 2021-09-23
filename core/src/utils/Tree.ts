import AbstractModel from "../models/AbstractModel";
import _, {functions} from "lodash";


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

    reduce<U>(
        callback: (accumulator: U, node: Node, depthLevel: number, currentIndex: number, rootNode: Node) => U,
        initialValue?: U): U {
        return Tree.reduce(this.root, this.root, 0, callback, initialValue);
        //
    }

    private static reduce<U>(
        node: Node, root: Node, depthLevel: number,
        callback: (accumulator: U, node: Node, depthLevel: number, currentIndex: number, rootNode: Node) => U,
        initialValue?: U): U {
        let accumulator;

        if (initialValue)
            accumulator = callback(initialValue, node, 0, 0, root);


        if (node.children) {
            for (let i = 0; i < node.children.length; i++) {
                accumulator = Tree.reduce(node.children[i], root, depthLevel++, callback, initialValue)
            }
        }

        if (!accumulator) throw TypeError()

        return accumulator;
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
    get key(): string {
        return this.value?.key ?? "";
    }

    readonly value: AbstractModel | null = null
    parent?: AbstractModel
    children?: Node[]

    constructor(value?: AbstractModel, parent?: AbstractModel) {
        if (value)
            this.value = value;

        this.parent = parent;

        if (value?.children) {
            this.children = value.children.map(child => new Node(child, value));
        }
    }
}