import {observer} from "mobx-react-lite";
import React, {ReactNode, useEffect, useState} from "react";
import {store} from "./stores/Store";
import {Button, Col, Dropdown, Form, Input as RInput, Input, Nav, Row} from "rsuite";
import AbstractModel from "./models/AbstractModel";
import {Control, ControlString, key} from "./utils/constants";
import _ from "lodash";
import {Node} from "./utils/Tree";


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

    function getKeyNavItem(key: key) {
        if (typeof key == "string")
            return <Nav.Item eventKey={key} children={key}/>;

        return <>
            <Nav.Item eventKey={key.key} children={key.key}/>
            <Nav style={{marginLeft: 15, ...styles}} appearance={"subtle"} vertical activeKey={active}
                 onSelect={setActive}>
                {key.children.map(getKeyNavItem)}
            </Nav>
        </>

    }

    const TreeViewer = () => {


        //TODO correct depth or recursive call
        let result = store.tree.reduce(
            (accumulator, node, depthLevel, currentIndex, rootNode) => {

                accumulator.push(<Nav.Item eventKey={node.key} children={node.key}/>)

                if (node.children)
                    accumulator.push(
                        <Nav
                            style={{marginLeft: depthLevel * 15, ...styles}}
                            appearance={"subtle"}
                            vertical
                            activeKey={active}
                            onSelect={setActive}>

                        </Nav>
                    )

                return accumulator;
            }, new Array<ReactNode>())


        //let a = new JSX.Element()

        return (
            <Nav
                style={{marginLeft: 0 * 15, ...styles}}
                appearance={"subtle"}
                vertical
                activeKey={active}
                onSelect={setActive}>
                {result}
            </Nav>
        )
    }
    /*const TreeViewer = () => {


        return (
            <Nav appearance={"subtle"} vertical activeKey={active} onSelect={setActive} style={styles}>
                {store.tree.root.map(getKeyNavItem)}


            </Nav>
        )
    }*/

    console.log(store.tree)
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
                <TreeViewer/>
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

const keyNav = () => {

}