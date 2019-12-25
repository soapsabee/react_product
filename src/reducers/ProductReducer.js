
export default function(state = [], action){
    console.log("state[]: "+ JSON.stringify(state));
    console.log("action: "+ JSON.stringify(action));
    
    switch (action.type) {
        case "products_fetch":
            return action.payload;
        case "products_fetchByID":
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