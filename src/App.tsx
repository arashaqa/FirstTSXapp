import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//components
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

//PageComponent
import Home from './Pages/Home';
import SingleProduct from './Pages/SingleProduct';
import Cart from './Pages/Cart';

//sass
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
          <main>
            <Container>
              <Route path='/' component={Home} exact />
              <Route path='/products/:id' component={SingleProduct} />
              <Route path='/cart/:id?' component={Cart}/>
            </Container>
          </main>
          <Footer />
        </Container>
      </Router>
    </div>
  );
}

export default App;
