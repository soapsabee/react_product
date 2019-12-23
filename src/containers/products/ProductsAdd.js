import React , { Component } from 'react';
import Header from '../../components/Header';
import ProductForm from '../../components/products/ProductForm';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';


class ProductsAdd extends Component {

    constructor(props){
        super(props)
        this.state = {
           name : '',
           count : 0
        }
    }

    componentDidMount = () => {
        this.setState({ name: 'test'})
    }

   handleClick = (e) => {

    this.setState ({
        count: this.state.count + 1
    });
}
    
    shouldComponentUpdate = (nextProps, nextState) => {
        console.log("nextState: " +JSON.stringify(nextState));
        
        return false;
    }

    render(){
        return(
            <div>
  
                <br></br>
                {this.state.count}
                <Button onClick={this.handleClick}>Click</Button>
            </div>
        )
    }


}

export default ProductsAdd ;