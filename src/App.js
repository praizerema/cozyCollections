import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/navBar';
import Footer from './components/footer';

import Home from './components/home';
import Products from './components/products.js';
import Cart from './components/cart';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route  path="/products" component={Products}/>
                    <Route path="/cart" component={Cart}/>
                  </Switch>
                  <Footer/>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;