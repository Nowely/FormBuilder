import {observer} from "mobx-react-lite";
import {useEffect, useState} from "react";
import {store} from "./stores/Store";
import {Button, Col, Dropdown, Nav, Row} from "rsuite";
import AbstractModel from "./models/AbstractModel";
import {Control, ControlString} from "./utils/constants";
import _ from "lodash";


export interface FormBuilderProps {
    getForm: ((code: string) => AbstractModel[])
}

export const FormBuilder = observer((props: FormBuilderProps) => {
    const [active, setActive] = useState('');

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
        </Row>
    </div>;
})

const styles = {width: 150};
