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

export const productsFetchById = id => {
    return dispatch => {
        axios.get(`https://sleepy-reef-53571.herokuapp.com/api/products/${id}`).then(
            res => {
                dispatch({ type: "products_fetchByID", payload: res.data.data });
            }
        )
    }
}

export const productsEdit = data => {
    console.log("id: "+ JSON.stringify(data));
    
    return dispatch => {
        axios.put(`https://sleepy-reef-53571.herokuapp.com/api/products/${data.productID}`,{title:data.productName,price:data.productPrice,create_at:data.productDate,tag:data.productTag}).then(
            res => {
                dispatch({ type: "products_edit", payload: null });
            }
        )
    }
}


export const productsAdd = data => {
    return dispatch => {
        axios.post(`https://sleepy-reef-53571.herokuapp.com/api/products`,{title:data.productName,price:data.productPrice,create_at:data.productDate,tag:data.productTag}).then(
            res => {
                dispatch({ type: "products_add", payload: null });
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
