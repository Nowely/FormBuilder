import React from 'react';
import {SampleForm} from "./components/SampleForm";
import {Container, Header, Content, Footer} from 'rsuite';

function App() {
    return (
        <Container>
            <Header/>
            <Content style={{margin: '6%'}}>
                <SampleForm/>

            </Content>
            <Footer/>
        </Container>
    );
}

export default App;
