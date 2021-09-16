import React from 'react';
import {SampleForm} from "./components/SampleForm";
import {Container, Content, Footer, Header} from 'rsuite';
import {FormView} from "./FormView";


function App() {

    return (
        <Container>
            <Header/>
            <Content style={{margin: '6%'}}>
                <SampleForm/>

                <br/>

                <FormView getForm={f}/>
            </Content>
            <Footer/>
        </Container>
    );
}

export default App;

function f(code: string): any[] {

    return []
}