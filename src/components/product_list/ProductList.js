import React, { Component } from 'react';
import Header from './Header';
import ProductItem from './ProductItem';

class ProductList extends Component {
  render() {
    return (
      <div class="shelf-container">
        {/* header */}
        <Header/>
        {/* product items */}
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <div class="clearfix"></div>
      </div>
    );
  }
}

export default ProductList;
