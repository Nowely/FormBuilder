import {observer} from "mobx-react-lite";
import {useEffect, useState} from "react";
import {store} from "./stores/Store";
import {Button, Col, Nav, Row} from "rsuite";
import AbstractModel from "./models/AbstractModel";


export interface FormBuilderProps {
    getForm: ((code: string) => AbstractModel[])
}

export const FormBuilder = observer((props: FormBuilderProps) => {
    const [active, setActive] = useState('');

    useEffect(() => {
        store.fillFormModel("test", props.getForm);
    }, []);

    return <div>
        <Button onClick={store.download}>Download</Button>
        <Button onClick={store.upload}>Upload</Button>
        <Button onClick={store.clear}>Clear</Button>

        <Row>
            <Col md={4}>
                <Nav appearance={"subtle"} vertical activeKey={active} onSelect={setActive} style={styles}>
                    {store.keys.map((key) => <Nav.Item eventKey={key} children={key}/>)}
                </Nav>
            </Col>

            <Col md={15}>{store.components}</Col>
        </Row>
    </div>;
})

const styles = {width: 100};
