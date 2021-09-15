import React from 'react';
import {SampleForm} from "./components/SampleForm";
import {Container, Header, Content, Footer} from 'rsuite';
import {Input} from "./views/Input";

function App() {

    return (
        <Container>
            <Header/>
            <Content style={{margin: '6%'}}>
                <SampleForm/>

                <br/>

                <Input name={"input1"}/>
            </Content>
            <Footer/>
        </Container>
    );
}

export default App;
