import React , { Component } from 'react';
import Header from '../../components/Header';
import ProductForm from '../../components/products/ProductForm';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { productsFetchById } from '../../actions';

class ProductEdit extends Component {

        constructor(props){
            super(props)
            this.state = {
               valueDefault: ''
            }
        
        }
       　
     
     componentDidMount = () =>{
            console.log(this.props.match.params.id)
            if(this.props.match.params.id){
               this.props.productsFetchById(this.props.match.params.id)
            }
              
    }

 
    render() {
        const { match , state} = this.props;
        return(
            <div className="container"> 
            <Header/>
            {match.path.indexOf("add") > 0 && (
                <div>
                    <ProductForm onProductSubmit = {"product_add"}/>
                </div>
            )}
            {match.path.indexOf("edit") > 0 && (
                <div>
                    <ProductForm matchID = {this.props.match.params.id } onProductSubmit = {"product_edit"}/>
                </div>
            )}
            </div>
        )
    }


}

const mapStateToProps = ({products}) => {
        
    return { products }
}

export default connect(mapStateToProps , {productsFetchById})(ProductEdit);