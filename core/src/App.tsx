import React from 'react';
import {SampleForm} from "./components/SampleForm";
import {Container, Content, Footer, Header} from 'rsuite';
import {Input} from "./components/Input";


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
