import React, { Component } from 'react';

class CartItem extends Component {
    render() {
        var {item, editCart, deleteCart}=this.props;
        return (
            <div class="shelf-item">
                <div class="shelf-item__del"></div>
                <div class="shelf-item__thumb"><img src={require(`../../static/products/12064273040195392_2.jpg`)} alt={item.product.title}/></div>
                <div class="shelf-item__details">
                    <p class="title">{item.product.title}</p>
                    <p class="desc">X | Wine
                        <br/>Quantity: {item.quantity}</p>
                </div>
                <div class="shelf-item__price">
                    <p>$ 13.25</p>
                </div>
                <div class="clearfix"></div>
            </div>
        );
    }
}

export default CartItem;
