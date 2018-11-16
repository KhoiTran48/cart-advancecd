import React, { Component } from 'react';
import CartItem from './CartItem';
import CartFooter from './CartFooter';

class Cart extends Component {
  render() {
    return (
        <div class="float-cart float-cart--open">
            <div class="float-cart__close-btn">X</div>
            <div class="float-cart__content">
                <div class="float-cart__header"><span class="bag"><span class="bag__quantity">2</span></span><span class="header-title">Bag</span></div>
                <div class="float-cart__shelf-container">
                    <CartItem/>
                    <CartItem/>
                </div>
                <CartFooter/>
            </div>
        </div>
    );
  }
}

export default Cart;