import React, { Component } from 'react';
import { Col,Card,Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { productsDelete , productsFetchById} from '../../actions';
import { Link } from 'react-router-dom';

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
                        <Link to={`/product/edit/${id}`}><Button variant="primary">Edit</Button></Link>
                        <Button variant="danger" onClick={() => this.delProduct(id)}>Delete</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }

}

const mapStatetoProps = (state) => {
    return {state:null}
}

export default connect(mapStatetoProps, {productsDelete , productsFetchById})(ProductItem);

