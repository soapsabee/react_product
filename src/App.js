import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import ProductAdd from './containers/products/ProductsAdd';
import ProductEdit from './containers/products/ProductsEdit';

class App extends Component {

    renderRouter() {
      return (
        <Switch>
          <Route exact path="/" component = {Home} />
          <Route path="/product/add" component = {ProductEdit} />
          <Route path="/product/edit/:id" component = {ProductEdit} />
        </Switch>
      )
    }

    render() {
      return (
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
      );
    }

}


export default App;
