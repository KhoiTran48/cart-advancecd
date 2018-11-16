import React, { Component } from 'react';
import ProductList from './../components/product_list/ProductList';
import Header from './../components/product_list/Header';
import ProductItem from './../components/product_list/ProductItem';

import {connect} from 'react-redux';

import * as actions from './actions/index';

class ProductContainer extends Component {
    render() {
        var {products}=this.props;
        return (
            <ProductList
                productItem={this.showProductItem(products)}
                header={this.showHeader()}
            />
        );
    }
    showHeader(){
        return <Header/>;
    }
    showProductItem=(products)=>{
        var {addCart, filter}=this.props;
        var result= null;
        if(products.length >0){
            result=products.filter((item, index)=>{
                var availableSizes=item.availableSizes;
                if(availableSizes.some(r=> filter.indexOf(r) >= 0)){
                    return <ProductItem 
                                key={index}
                                item={item}
                                addCart={addCart}
                            />
                }
            })
        }
        return result;
    }
}
const mapState=(state)=>{
    return {
        products:state.products,
        filter:state.filter.filterItems
    }
}
const mapDispatch=(dispatch,props)=>{
    return {
        addCart:(product)=>{
            dispatch(actions.ADD_CART(product));
        }
    }
}

export default connect(mapState, mapDispatch)(ProductContainer);
