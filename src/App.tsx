import React from 'react';
import { Container } from 'react-bootstrap';

//components
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'

//sass
import './App.scss';

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
