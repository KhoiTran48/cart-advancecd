import * as types from './../constants/ActionTypes';
var init=[];

const ProductReducer=(state=init, action)=>{
    switch (action.type) {
        case types.FETCH_PRODUCT:
            state=action.products;
            return [...state];
        default:
            return [...state]
    }
}

export default ProductReducer;