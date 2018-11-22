import React, { Component } from 'react';
import Cart from './../components/cart/Cart';
import CartItem from './../components/cart/CartItem';
import CartFooter from './../components/cart/CartFooter';

import {connect} from 'react-redux';

import * as actions from './../actions/index';

class CartContainer extends Component {
    render() {
        var {carts, closeCart, checkout}=this.props;
        return (
            <Cart
                closeCart={closeCart}
                checkout={checkout}
                cartItem={this.showCartItem(carts)}
                footer={this.showFooter()}
            />
        );
    }
    showFooter(){
        var {checkout}=this.props;
        return <CartFooter
                    checkout={checkout}
                />;
    }
    showCartItem=(carts)=>{
        var {editCart, deleteCart}=this.props;
        var result= null;
        if(carts.length >0){
            result=carts.map((item, index)=>{
                return <CartItem
                            key={index}
                            item={item}
                            editCart={editCart}
                            deleteCart={deleteCart}
                        />
            })
        }
        return result;
    }
}
const mapState=(state)=>{
    return {
        carts:state.cart
    }
}
const mapDispatch=(dispatch,props)=>{
    return {
        editCart:(product)=>{
            dispatch(actions.EDIT_CART(product));
        },
        deleteCart:(product)=>{
            dispatch(actions.DELETE_CART(product));
        },
        closeCart:()=>{
            dispatch(actions.CLOSE_CART());
        },
        checkout:()=>{
            dispatch(actions.CHECKOUT());
        }
    }
}

export default connect(mapState, mapDispatch)(CartContainer);
