import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        var {ProductItem, header}=this.props;
        return (
        <div class="shelf-container">
            {/* header */}
            {header}
            {/* product items */}
            {ProductItem}
            <div class="clearfix"></div>
        </div>
        );
    }
}

export default ProductList;
