import axios from 'axios';

export const productsFetch = () => {
    return dispatch => {
        axios.get("https://sleepy-reef-53571.herokuapp.com/api/products").then(
            res => {
                dispatch({ type: "products_fetch", payload: res.data.data });
            }
        )
    }
}

export const productsAdd = productData => {
    return dispatch => {
        axios.post(`https://sleepy-reef-53571.herokuapp.com/api/products`,{title:productData.productName,price:productData.price,tag:productData.tag}).then(
            res => {
                dispatch({ type: "products_add", payload: res.data.data });
            }
        )
    }
}

export const productsDelete = id => {
    return dispatch => {
        axios.delete(`https://sleepy-reef-53571.herokuapp.com/api/products/${id}`).then(
            res => {
                axios.get("https://sleepy-reef-53571.herokuapp.com/api/products").then(
                    res => {
                        dispatch({ type: "products_fetch", payload: res.data.data });
                    }
                )
            }
        )
    }
}
