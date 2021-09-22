import {observer} from "mobx-react-lite";
import {useEffect, useState} from "react";
import {store} from "./stores/Store";
import {Button, Col, Dropdown, Form, Input as RInput, Input, Nav, Row} from "rsuite";
import AbstractModel from "./models/AbstractModel";
import {Control, ControlString} from "./utils/constants";
import _ from "lodash";


export interface FormBuilderProps {
    getForm: ((code: string) => AbstractModel[])
}

export const FormBuilder = observer((props: FormBuilderProps) => {
    const [active, setActive] = useState('');

    const [activeTab, setActiveTab] = useState('main');

    const [model, setModel] = useState<AbstractModel | null>(null);

    useEffect(() => {
        setModel(store.getModel(active))
        console.log(active)
    }, [active]);

    console.log(model?.getDescription())

    useEffect(() => {
        store.fillFormModel("test", props.getForm);
    }, []);


    var controls = Object.values(Control).filter(value => _.isString(value)) as string[];

    return <div>
        <Button onClick={store.download}>Download</Button>
        <Button onClick={store.upload}>Upload</Button>
        <Button onClick={store.clear}>Clear</Button>
        <Dropdown title={"Components"}>
            {controls.map(value => <Dropdown.Item onClick={()=> store.add(value)}>{value}</Dropdown.Item>)}
        </Dropdown>

        <br/><br/>

        <Row>
            <Col md={4}>
                <Nav appearance={"subtle"} vertical activeKey={active} onSelect={setActive} style={styles}>
                    {store.keys.map((key) => <Nav.Item eventKey={key} children={key}/>)}


                    {/*<Nav.Item>
                        <Nav appearance={"subtle"} vertical activeKey={active} onSelect={setActive} style={styles}>
                            {store.keys.map((key) => <Nav.Item eventKey={key} children={key}/>)}
                        </Nav>
                    </Nav.Item>*/}
                </Nav>
            </Col>

            <Col md={15}>{store.components}</Col>

            <Col>
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
