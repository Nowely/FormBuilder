import React from 'react';
import {SampleForm} from "./components/SampleForm";
import {Container, Header, Content, Footer, Sidebar} from 'rsuite';

function App() {
    return (
        <Container>
            <Header>Header</Header>
            <Content>
                <SampleForm/>

            </Content>
            <Footer/>
            <Footer>Footer</Footer>
        </Container>
    );
}

export default App;
