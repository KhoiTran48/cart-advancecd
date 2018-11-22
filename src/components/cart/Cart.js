import React, { Component } from 'react';

class Cart extends Component {
    render() {
        var {showCart, totalQuantity, toggleCart, cartItem, footer} =this.props;
        var classes=["float-cart"];
        var iconCart='';
        if(showCart){
            classes.push("float-cart--open");
        }
        // iconCart='<div class="float-cart__close-btn" onClick={toggleCart}>X</div>';
        // }else{
        //     iconCart=`<span
        //                 onClick={{toggleCart}}
        //                 className="bag bag--float-cart-closed"
        //             >
        //                 <span className="bag__quantity">${totalQuantity}</span>
        //             </span>`;
        // }
        return (
            <div class={classes.join(' ')}>
                {showCart && <div class="float-cart__close-btn" onClick={toggleCart}>X</div>}
                {!showCart &&
                    <span onClick={toggleCart} className="bag bag--float-cart-closed">
                        <span className="bag__quantity">{totalQuantity}</span>
                    </span>
                }
                <div class="float-cart__content">
                    <div class="float-cart__header"><span class="bag"><span class="bag__quantity">{totalQuantity}</span></span><span class="header-title">Bag</span></div>
                    <div class="float-cart__shelf-container">
                        {cartItem}
                    </div>
                    {footer}
                </div>
            </div>
        );
    }
}

export default Cart;
