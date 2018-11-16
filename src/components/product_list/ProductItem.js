import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        var {item, addCart}=this.props;
        return (
            <div class="shelf-item">
                <div class="shelf-stopper">{item.isFreeShipping ? 'Free shipping': ''}</div>
                <div class="shelf-item__thumb"><img src={require(`../../static/products/12064273040195392_1.jpg`)} alt={item.title}/></div>
                <p class="shelf-item__title">{item.title}</p>
                <div class="shelf-item__price">
                    <div class="val"><small>{item.currencyFormat}</small><b>{item.price}</b><span>.90</span></div>
                    <div class="installment"><span>or 9 x</span><b> $ 1.21</b></div>
                </div>
                <div class="shelf-item__buy-btn" onClick={()=>addCart(item)}>Add to cart</div>
            </div>
        );
    }
    addCart=(product)=>{
        this.props.addCart(product);
    }
}

export default ProductItem;
