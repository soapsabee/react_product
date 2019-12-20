import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { productsAdd } from '../../actions';

class ProductForm extends Component {
    
    constructor(props) {
        super(props)
        this.state = { productName : '',
                       productPrice : '',
                       productTag : '',
                       productDate : ''   
                     }
    }


    componentWillUpdate(nextProps,nextState){
        console.log("nextState:"+JSON.stringify(nextState));
        this.props.productsAdd(nextState)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            productName : this.getPdName.value,
            productPrice : this.getPdPrice.value,
            productTag : this.getPdTag.value,
            productDate : this.getPdTag.value
        })
        
    }

    render() {
        return (
            <div className="container mt-4">
                <Form onSubmit={this.handleSubmit}>
                <Form.Group >
                <Form.Label>ชื่อสินค้า</Form.Label>
                <Form.Control name="productName" type="text" placeholder="ชื่อสินค้า" required ref={input => this.getPdName = input} />
                <Form.Label>ราคาสินค้า</Form.Label>
                <Form.Control name="productPrice" type="number" placeholder="ราคาสินค้า" required ref={input => this.getPdPrice = input} />
                <Form.Label>Tag สินค้า</Form.Label>
                <Form.Control name="productTag" type="text" placeholder="ประเภทสินค้า" required ref={input => this.getPdTag = input} />
                <Form.Label>วันเวลา</Form.Label>
                <Form.Control name="productDate" type="text" placeholder="ด/ว/ป" required ref={input => this.getPdDate = input} />
                </Form.Group >
                    <Button type="submit">
                        ยืนยัน
                    </Button>
                </Form>
            </div>
        )
    }

}


const mapStateToProps = state => {
     return { state: null }; 
}

export default connect(mapStateToProps,{productsAdd})(ProductForm);
