import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import ProductReducer from './ProductReducer';

const rootReducer = combineReducers({
    products: ProductReducer,
    form : reduxForm
})

export default rootReducer;