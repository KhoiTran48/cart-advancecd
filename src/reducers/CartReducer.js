import * as types from './../constants/ActionTypes';

var init={
    "showCart":false,
    "carts":[]
}

const CartReducer=(state=init, action)=>{
    switch (action.type) {
        case types.TOGGLE_CART:
            state["showCart"]=!state["showCart"];
            return {...state};
        case types.ADD_CART:
            var product=action.product;
            var index=state.carts.findIndex((item, index)=>{
                return item.product.id === product.id ;
            })
            if(index >= 0){
                state.carts[index].quantity++;
            }else{
                state.carts.push({
                    product,
                    quantity:1
                })
            }
            state["showCart"]=true;
            return {...state};
        default:
        return {...state};
    }
}
// console.log(init);
export default CartReducer;