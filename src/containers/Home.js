import React, { Component } from 'react';
import Header from '../components/Header';
import Monitor from '../components/monitor/Monitor';
import axios from 'axios';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {products : ""};
    }

    componentDidMount() {
        this.getProducts()
    }

    getProducts = () => {
         axios.get("https://sleepy-reef-53571.herokuapp.com/api/products").then(res => {
            console.log(res.data.data);
         {this.setState({ products : res.data.data }) }
            
        })
    }

    render() {
        return (
            <div>
                <Header />
                <Monitor products = {this.state.products}/>
            </div>
        )

    }

}

export default Home;
