
export default function(state = [], action){
    switch (action.type) {
        case "products_fetch":
            return action.payload;
        case "products_delete":
            return action.payload;
        case "products_add":
            return action.payload;
        case "products_edit":
            return action.payload;
        default:
            return state;
    }
}