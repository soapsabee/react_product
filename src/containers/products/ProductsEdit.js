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

            if(this.props.match.params.id){
               this.props.productsFetchById(this.props.match.params.id)
           
            
                // this.setState({
                //     valueDefault: ''
                // })
            }
                
      
    }

    shouldComponentUpdate = (nextProps, nextState) =>{
        console.log("nextState: "+ JSON.stringify(nextState));
        console.log("nextProps: "+ JSON.stringify(nextProps.products));
       return true
        // if(showName !== nextState.name){
        //     console.log("stateChange");
        //     return true;
        // }else{
        //     console.log("stateNotChange");
        //     return false;

        // }

        
    }

    showInfoProducts() {
        return this.props.products && this.props.products.map(product => (
            <ProductForm key={product.id} {...product} onProductSubmit = {"product_edit"}/>
        ))
    }
   
    render() {
        const { match } = this.props;
        console.log(match);
        
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
                    {this.showInfoProducts()}
                </div>
            )}
            </div>
        )
    }


}

const mapStateToProps = ({products}) => {
    return { products }
}

export default connect(mapStateToProps,{productsFetchById})(ProductEdit);