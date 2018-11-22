import * as types from './../constants/ActionTypes';

var init=[
    // "showCart":true
]

const CartReducer=(state=init, action)=>{
    switch (action.type) {
        case types.CLOSE_CART:
            // state["showCart"]=false;
            return [...state];
        case types.ADD_CART:
            var product=action.product;
            var index=state.findIndex((item, index)=>{
                return item.product.id === product.id ;
            })
            if(index >= 0){
                state[index].quantity++;
            }else{
                state.push({
                    product,
                    quantity:1
                })
            }
            return [...state]
        default:
            return [...state];
    }
}

export default CartReducer;