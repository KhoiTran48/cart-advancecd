import React, { Component } from 'react';

class CartFooter extends Component {
    render() {
        var {checkout, subTotal}=this.props;
        return (
            <div class="float-cart__footer">
                <div class="sub">SUBTOTAL</div>
                <div class="sub-price">
                    <p class="sub-price__val">$ {subTotal}</p></div>
                <div class="buy-btn" onClick={checkout}>Checkout</div>
            </div>
        );
    }
}

export default CartFooter;
