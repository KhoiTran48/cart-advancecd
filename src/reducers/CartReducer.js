import * as types from './../constants/ActionTypes';

var init=[

]

const CartReducer=(state=init, action)=>{
    switch (action.type) {
        case types.ADD_CART:
            var product=action.product;
            var index=state.find((item)=>{
                return item.product.id === product.id;
            })
            if(index>=0){
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