import React , { Component } from 'react';
import Header from '../../components/Header';
import ProductForm from '../../components/products/ProductForm';
import { connect } from 'react-redux';
import { productsAdd , productsFetchById } from '../../actions';

class ProductEdit extends Component {

        componentDidMount() {
        if(this.props.match.params.id){
            // let getproduct = this.props.productsFetchById(this.props.match.params.id)
            console.log("getproduct:"+this.props.productsFetchById(this.props.match.params.id));
            
        }
    }
   
    render() {
        const { match } = this.props;
        console.log(match);
        
        return(
            <div className="container"> 
            <Header/>
            {match.path.indexOf("add") > 0 && (
                <div>
                    <ProductForm />
                </div>
            )}
            {match.path.indexOf("edit") > 0 && (
                <div>
                    <ProductForm />
                </div>
            )}
            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return { props: state.data }
}

export default connect(mapStateToProps,{ productsAdd , productsFetchById})(ProductEdit);