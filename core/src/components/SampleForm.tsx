import {forwardRef} from "react";
import {Button, ButtonToolbar, FlexboxGrid, Form, Input, Panel} from "rsuite";

export const SampleForm = () => {


    return (
        <FlexboxGrid justify="center">
            <FlexboxGrid.Item colspan={15}>
                <Panel header={<h3>Form</h3>} bordered>
                    <Form layout="horizontal">
                        <Form.Group controlId="name-6">
                            <Form.ControlLabel>Username</Form.ControlLabel>
                            <Form.Control name="name"/>
                            <Form.HelpText>Required</Form.HelpText>
                        </Form.Group>
                        <Form.Group controlId="email-6">
                            <Form.ControlLabel>Email</Form.ControlLabel>
                            <Form.Control name="email" {...{type: "email"}}/>
                            <Form.HelpText tooltip>Required</Form.HelpText>
                        </Form.Group>
                        <Form.Group controlId="password-6">
                            <Form.ControlLabel>Password</Form.ControlLabel>
                            <Form.Control name="password" {...{type: "password", autoComplete: "off"}}/>
                        </Form.Group>
                        <Form.Group controlId="textarea-6">
                            <Form.ControlLabel>Textarea</Form.ControlLabel>
                            <Form.Control name="textarea" accepter={Textarea}/>
                        </Form.Group>
                        <Form.Group>
                            <ButtonToolbar>
                                <Button appearance="primary">Submit</Button>
                                <Button appearance="default">Cancel</Button>
                            </ButtonToolbar>
                        </Form.Group>
                    </Form>
                </Panel>
            </FlexboxGrid.Item>
        </FlexboxGrid>
    );
}

const Textarea = forwardRef((props, ref) =>
    <Input {...props} rows={5} as="textarea" inputRef={ref}/>);