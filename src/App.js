import './App.css';
import React, { Fragment } from 'react';
import MyHeader from './Componnents/Header'
import AddForm from './Componnents/AddForm'
import BookContainer from './Componnents/BookContainer';
import { Container } from 'react-bootstrap';
 
function App() {
  return (
    <div className="App">
      <Fragment>
        <MyHeader />
        <Container>
        <AddForm />
        <BookContainer/>
        </Container>
       
      </Fragment>
    </div>
  );
}

export default App;
