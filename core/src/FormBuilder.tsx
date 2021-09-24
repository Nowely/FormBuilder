import {observer} from "mobx-react-lite";
import React, {ReactNode, useEffect, useState} from "react";
import {store} from "./stores/Store";
import {Button, Col, Dropdown, Form, Input as RInput, Input, Nav, Row, Tree} from "rsuite";
import AbstractModel from "./models/AbstractModel";
import {Control} from "./utils/constants";
import _ from "lodash";
import {Node} from "./utils/Tree";
import {ItemDataType} from "rsuite/esm/@types/common";


export interface FormBuilderProps {
    getForm: ((code: string) => AbstractModel[])
}

export const FormBuilder = observer((props: FormBuilderProps) => {
    const [active, setActive] = useState('');

    const [activeTab, setActiveTab] = useState('main');

    const [model, setModel] = useState<AbstractModel | null>(null);

    useEffect(() => {
        let a: Node | null = store.tree.find(active);
        setModel(a?.value ?? null)
        console.log(active)
    }, [active]);

    console.log(model?.getDescription())

    useEffect(() => {
        store.fillFormModel("test", props.getForm);
    }, []);


    var controls = Object.values(Control).filter(value => _.isString(value)) as string[];

    const TreeViewer = () => {
        //TODO correct depth or recursive call
        let result = store.tree.reduce(
            (temp, accumulator, node, depthLevel, rootNode) => {

                if (accumulator[node.key] == undefined)
                    accumulator[node.key] = []

                //First call - create main parent
                if (node.isRoot) {
                    temp = (<Nav
                        style={{marginLeft: depthLevel * 15, ...styles}}
                        appearance={"subtle"}
                        vertical
                        activeKey={active}
                        onSelect={setActive}>
                        {accumulator[node.key]}
                    </Nav>)
                    return temp
                }

                //Usual call
                accumulator[node.parent?.key ?? ""].push(<Nav.Item eventKey={node.key} children={node.key}/>)

                //If have children
                if (node.children)
                    accumulator[node.parent?.key ?? ""].push(
                        <Nav
                            style={{marginLeft: depthLevel * 15, ...styles}}
                            appearance={"subtle"}
                            vertical
                            activeKey={active}
                            onSelect={setActive}>
                            {accumulator[node.key]}
                        </Nav>
                    )

                return temp;
            })


        return (result)
    }

    console.log(store.tree)
    //TODO upgrade tree now its so poorly
    return <div>
        <Button onClick={store.download}>Download</Button>
        <Button onClick={store.upload}>Upload</Button>
        <Button onClick={store.clear}>Clear</Button>
        <Dropdown title={"Components"}>
            {controls.map(value => <Dropdown.Item onClick={() => store.add(value)}>{value}</Dropdown.Item>)}
        </Dropdown>

        <br/><br/>

        <Row>
            <Col md={4}>
                <Tree
                    draggable
                    onSelect={(activeNode, value) => setActive(value as string)}
                    value={active}
                    labelKey="key"
                    valueKey="key"
                    style={{maxHeight:'inherit', height:'inherit'}}
                    data={store.tree.root.children as unknown as ItemDataType[]}/>
            </Col>

            <Col md={15}>{store.components}</Col>

            <Col md={5}>
                <Nav appearance={"tabs"} activeKey={activeTab} onSelect={setActiveTab} style={styles}>
                    <Nav.Item eventKey={"main"} children={"Main"}/>
                    <Nav.Item eventKey={"design"} children={"Design"}/>
                    <Nav.Item eventKey={"other"} children={"Other"}/>
                </Nav>
                <div>
                    {Object.keys(model?.getDescription() ?? {}).map(key =>
                        <div key={key}>
                            <Form.ControlLabel>{key}</Form.ControlLabel>
                            <RInput
                                value={_.get(model, key, "")}
                                onChange={value => _.set(model as object, key, value)}
                            />
                        </div>
                    )}
                </div>
            </Col>
        </Row>
    </div>;
})

const styles = {width: 150};