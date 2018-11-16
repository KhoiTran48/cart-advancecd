import * as types from './../constants/ActionTypes';

export const CHANGE_FILTER=(filterSize)=>{
    return {
        type:types.CHANGE_FILTER,
        filterSize
    }
}
export const ADD_CART=(product)=>{
    return {
        type:types.ADD_CART,
        product
    }
}