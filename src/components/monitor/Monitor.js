import React, { Component } from 'react';
import ProuductList from '../products/ProductList';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

class Monitor extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
   
    }

    render() {
        const { products } = this.props;
        return (
            <div>
                <Container>
                    <ProuductList products={products}/>
                </Container>
            </div>
        )
    }
}

export default Monitor;