import {forwardRef} from "react";
import {Button, ButtonToolbar, Form, Input, InputPicker} from "rsuite";

export const SampleForm = () => {


    return (
        <Form fluid>
            <div style={{textAlign: 'center'}}>
                <h4>Application form</h4>
                <label>Make it easier</label>
            </div>
            <Form.Group>
                <Form.ControlLabel>Title</Form.ControlLabel>
                <Form.Control name="title"/>
            </Form.Group>
            <Form.Group style={{display: 'inline-flex', width: '100%', height: '60px'}}>
                <Form.Group style={{width: 'inherit', marginRight: '5px'}}>
                    <Form.ControlLabel>First name</Form.ControlLabel>
                    <Form.Control name="firstName"/>
                </Form.Group>
                <Form.Group style={{width: 'inherit', marginLeft: '5px'}}>
                    <Form.ControlLabel>Last name</Form.ControlLabel>
                    <Form.Control name="lastName"/>
                </Form.Group>
            </Form.Group>
            <Form.Group>
                <Form.ControlLabel>Type</Form.ControlLabel>
                <Form.Control name="type" accepter={InputPicker}
                              {...{
                                  block: true,
                                  data: [
                                      {label: "Internal", value: "Internal"},
                                      {label: "External", value: "External"},
                                      {label: "Direct", value: "Direct"}
                                  ]
                              }} />
            </Form.Group>
            <Form.Group>
                <Form.ControlLabel>Comment</Form.ControlLabel>
                <Form.Control name="textarea" accepter={Textarea}/>
            </Form.Group>
            <Form.Group>
                <ButtonToolbar>
                    <Button appearance="primary">Save</Button>
                    <Button appearance="default">Cancel</Button>
                </ButtonToolbar>
            </Form.Group>
        </Form>
    );
}

const Textarea = forwardRef((props, ref) =>
    <Input {...props} rows={5} as="textarea" inputRef={ref}/>);