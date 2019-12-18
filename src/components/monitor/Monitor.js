import React, { Component } from 'react';
import ProuductList from '../products/ProductList';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

class Monitor extends Component {

    constructor(props) {
        super(props);
        const { products } = props;
        this.addProduct = this.addProduct.bind(this);
        this.delProduct = this.delProduct.bind(this);
        console.log("product:" + products)
    }

    componentDidMount() {
        console.log(123);

    }

    componentWillReceiveProps(nextProps) {
        if (this.props.products !== nextProps.products) {
            console.log(nextProps.products);
        }
    }

    addProduct(product) {
        console.log(product);
        
    }

    delProduct(productID){
        console.log("productID:"+productID)
    }

    render() {
        const { products } = this.props;
        return (
            <div>
                <Container>
                    <ProuductList products={products} onDelProduct={this.delProduct}/>
                </Container>
            </div>
        )
    }
}

export default Monitor;