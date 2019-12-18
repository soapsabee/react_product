import React, { Component } from 'react';
import ProductItem from './ProductItem';
import { Row } from 'react-bootstrap';
class ProductList extends Component {

    constructor(props) {
        super(props);
    }

    showProducts() {
        return this.props.products && this.props.products.map(product => (
            <ProductItem key={product.id} {...product} />
        ))
    }

    render() {
        console.log(this.props.products)

        return (
            <Row className="justify-content-md-center">
                {this.showProducts()}
            </Row>
        )
    }
}

export default ProductList;