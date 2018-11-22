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
export const EDIT_CART=(product)=>{
    return {
        type:types.EDIT_CART,
        product
    }
}
export const DELETE_CART=(product)=>{
    return {
        type:types.DELETE_CART,
        product
    }
}

export const TOGGLE_CART=()=>{
    return {
        type:types.TOGGLE_CART
    }
}

export const CHECKOUT=()=>{
    return {
        type:types.CHECKOUT
    }
}

export const CLOSE_CART=()=>{
    return {
        type:types.CLOSE_CART
    }
}