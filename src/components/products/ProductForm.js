import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { productsAdd } from '../../actions';

class ProductForm extends React.Component {

    constructor(props) {
        super(props)
    }
    renderFields () {
        const formFields = [
            { name : "productName", label:"ชื่อสินค้า", type: "text", placeholder:"ใส่ชื่อสินค้า" },
            { name : "productPrice", label:"ราคาสินค้า" , type: "number", placeholder: "ราคาสินค้า"},
            { name : "productTag", label:"Tag สินค้า" , type: "Text", placeholder: "ประเภทสินค้า"}
        ]
        return formFields.map(( { name , label , type , placeholder} ) => {
            return (
                <Form.Group key={name}>
                <Form.Label>{label}</Form.Label>
                <Form.Control name={name} type={type} placeholder={placeholder}  required onChange={(e) => this.addProduct(e.target.value)} />
                </Form.Group>
            )
        })
    }

    addProduct (values) {
     
    
        console.log("addProduct:"+values);
        
    }

    handleChange(event) {
        console.log(event);
        
    }

    render() {
        return (
            <div className="container mt-4">
                <Form>
                    {this.renderFields()}
                    <Button variant="primary" type="button">
                        ยืนยัน
                    </Button>
                </Form>
            </div>
        )
    }

}

const validate = (values) => {
    console.log(values);
    
}

const mapStateToProps = ({products}) => {
    return products
}

ProductForm = reduxForm({ validate ,form: "productForm" })(ProductForm);

export default connect(mapStateToProps, {productsAdd})(ProductForm);
