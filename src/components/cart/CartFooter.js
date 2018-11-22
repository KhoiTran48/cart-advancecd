import React, { Component } from 'react';

class CartFooter extends Component {
    render() {
        var {checkout}=this.props;
        return (
            <div class="float-cart__footer">
                <div class="sub">SUBTOTAL</div>
                <div class="sub-price">
                    <p class="sub-price__val">$ 24.15</p><small class="sub-price__installment"><span>OR UP TO 9 x $ 2.68</span></small></div>
                <div class="buy-btn" onClick={checkout}>Checkout</div>
            </div>
        );
    }
}

export default CartFooter;
