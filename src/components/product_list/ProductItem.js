import React, { Component } from 'react';

class ProductItem extends Component {
  render() {
    return (
        <div class="shelf-item">
            <div class="shelf-stopper">Free shipping</div>
            <div class="shelf-item__thumb"><img src={require(`../../static/products/12064273040195392_1.jpg`)} alt="Cat Tee Black T-Shirt"/></div>
            <p class="shelf-item__title">Cat Tee Black T-Shirt</p>
            <div class="shelf-item__price">
                <div class="val"><small>$</small><b>10</b><span>.90</span></div>
                <div class="installment"><span>or 9 x</span><b> $ 1.21</b></div>
            </div>
            <div class="shelf-item__buy-btn">Add to cart</div>
        </div>
    );
  }
}

export default ProductItem;
