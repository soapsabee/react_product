import React, { Component } from 'react';
import { Col,Card,Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { productsDelete } from '../../actions';

class ProductItem extends Component {

    constructor(props){
        super(props);
    }

    delProduct(id){
        this.props.productsDelete(id);
    }

    render() {
        
        const {id,title,price,tag} = this.props;
        return (
            <Col md="auto">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="" style={{height:'13rem'}} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {price}
                            {tag}
                        </Card.Text>
                        <Button variant="primary">Edit</Button>
                        <Button variant="danger" onClick={() => this.delProduct(id)}>Delete</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }

}

const mapStatetoProps = ({products}) => {
    return products
}

export default connect(mapStatetoProps, {productsDelete})(ProductItem);

