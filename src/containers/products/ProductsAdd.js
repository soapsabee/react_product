import React , { Component } from 'react';
import Header from '../../components/Header';
import ProductForm from '../../components/products/ProductForm';

class ProductsAdd extends Component {


    render(){
        return(
            <div>
                <Header />
                <ProductForm />
            </div>
        )
    }


}

export default ProductsAdd ;