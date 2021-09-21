import React from 'react';
import {Container, Content, Footer, Header} from 'rsuite';
import {FormView} from "./FormView";


function App() {
    return (
        <Container>
            <Header/>
            <Content style={{margin: '6%'}}>
                {/*<SampleForm/>*/}

                <br/>

                <FormView getForm={()=> []}/>
            </Content>
            <Footer/>
        </Container>
    );
}

export default App;
