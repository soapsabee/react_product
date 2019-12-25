import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { productsAdd, productsEdit } from '../../actions';
import FormValid from '../common/FormValid'
class ProductForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pdValid: false,
            priceValid: false,
            tagValid: false,
            dateValid: false
        }
        this.defaultValue = {
            title: '',
            price: '',
            tag: '',
            create_at: ''
        }

    }

    shouldComponentUpdate = (nextProps, nextState) => {
        let newrender = false

        if(nextState != this.state){
            newrender = true
        }
        
        if (nextProps.products && nextProps != this.props) {
            let {id,title,price,tag,create_at} = {...nextProps.products[0]}
            this.defaultValue = {
                id: id,
                title: title,
                price: price,
                tag: tag,
                create_at: create_at
            }
            newrender = true
        }

        return newrender

    }

    handleSubmit = (e) => {
        e.preventDefault();
       
        if(this.getPdName.value == ''){
            this.setState ({
                pdValid: true
            })
         
        }else{
             this.setState ({
                pdValid: false
            })
         
        }

        if(this.getPdPrice.value == ''){
            this.setState ({
                priceValid: true
            })
         
        }else{
            this.setState ({
                priceValid: false
            })
        }

        if(this.getPdTag.value == ''){
            this.setState ({
                tagValid: true
            })
         
        }else{
            this.setState ({
                tagValid: false
           })
        
       }

        if(this.getPdDate.value == ''){
            this.setState ({
                dateValid: true
            })
         
        }else{
            this.setState ({
                dateValid: false
           })
        
       }
     
        let data = {
            productID: this.props.matchID,
            productName: this.getPdName.value,
            productPrice: this.getPdPrice.value,
            productTag: this.getPdTag.value,
            productDate: this.getPdDate.value
        }

        // if (this.props.onProductSubmit == "product_add") {

        //     this.props.productsAdd(data)

        // } else if (this.props.onProductSubmit == "product_edit") {
        //     this.props.productsEdit(data)
            
        // }
     
    }



    render() {

        return (
            <div className="container mt-4">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group >
                        <Row>
                            <Col><Form.Label>ชื่อสินค้า</Form.Label></Col>
                            <Col> { this.state.pdValid ? <FormValid error={"กรุณาใส่ชื่อสินค้า"}/> : null }</Col>
                        </Row>
                        <Form.Control name="productName" type="text" placeholder="ชื่อสินค้า" ref={input => this.getPdName = input} defaultValue={this.defaultValue.title} />
                        <Row>
                        <Col><Form.Label>ราคาสินค้า</Form.Label></Col>
                        <Col> { this.state.priceValid ? <FormValid error={"กรุณาใส่ราคาสินค้า"}/> : null }</Col>
                       </Row> 
                        <Form.Control name="productPrice" type="number" placeholder="ราคาสินค้า" ref={input => this.getPdPrice = input} defaultValue={this.defaultValue.price} />
                        <Row>
                        <Col><Form.Label>Tag สินค้า</Form.Label></Col> 
                        <Col> { this.state.tagValid ? <FormValid error={"กรุณาใส่ประเภทสินค้า"}/> : null }</Col>
                        </Row>
                        <Form.Control name="productTag" type="text" placeholder="ประเภทสินค้า" ref={input => this.getPdTag = input} defaultValue={this.defaultValue.tag} />
                        <Row>
                        <Col><Form.Label>วันเวลา</Form.Label></Col> 
                        <Col> { this.state.dateValid ? <FormValid error={"กรุณาใส่วันเวลา"}/> : null }</Col>
                        </Row>
                        <Form.Control name="productDate" type="text" placeholder="ด/ว/ป" ref={input => this.getPdDate = input} defaultValue={this.defaultValue.create_at} />
                    </Form.Group >
                    <Button type="submit">
                        ยืนยัน
                    </Button>
                </Form>
            </div>
        )
    }

}


const mapStateToProps = ({ products }) => {

    return { products };
}

export default connect(mapStateToProps, { productsAdd, productsEdit })(ProductForm);
