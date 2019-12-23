import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { productsAdd , productsEdit } from '../../actions';

class ProductForm extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = { 
                       productID : '',
                       productName : '',
                       productPrice : '',
                       productTag : '',
                       productDate : ''   
                     }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            productID : this.props.id,
            productName : this.getPdName.value,
            productPrice : this.getPdPrice.value,
            productTag : this.getPdTag.value,
            productDate : this.getPdDate.value
        })

        if(this.props.onProductSubmit == "product_add" ){
            console.log("pd_add:"+this.state);
            
            this.props.productsAdd(this.state)
    
        }else if(this.props.onProductSubmit == "product_edit" ){
            console.log("pd_edit: " +this.state);
            
            this.props.productsEdit(this.state)
        }
                
    }

    render() {
            const {id,title,price,tag,create_at} = this.props;
                 
        return (
            <div className="container mt-4">
                <Form onSubmit={this.handleSubmit}>
                <Form.Group >
                <Form.Label>ชื่อสินค้า</Form.Label>
                <Form.Control name="productName" type="text" placeholder="ชื่อสินค้า" required ref={input => this.getPdName = input} defaultValue={title} />
                <Form.Label>ราคาสินค้า</Form.Label>
                <Form.Control name="productPrice" type="number" placeholder="ราคาสินค้า" required ref={input => this.getPdPrice = input} defaultValue= {price} />
                <Form.Label>Tag สินค้า</Form.Label>
                <Form.Control name="productTag" type="text" placeholder="ประเภทสินค้า" required ref={input => this.getPdTag = input} defaultValue= {tag}/>
                <Form.Label>วันเวลา</Form.Label>
                <Form.Control name="productDate" type="text" placeholder="ด/ว/ป" required ref={input => this.getPdDate = input} defaultValue= {create_at}/>
                </Form.Group >
                    <Button type="submit">
                        ยืนยัน
                    </Button>
                </Form>
            </div>
        )
    }

}


const mapStateToProps = ({products}) => {
     return { products }; 
}

export default connect(mapStateToProps, {productsAdd,productsEdit})(ProductForm);
