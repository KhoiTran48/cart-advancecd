import React, { Component } from 'react';

class Header extends Component {
  render() {
      var {totalProduct}=this.props;

    return (
        <div class="shelf-container-header"><small class="products-found"><span>`${totalProduct} Product(s) found.`</span></small>
            <div class="sort">Order by
                <select>
                    <option value="">Select</option>
                    <option value="lowestprice">Lowest to highest</option>
                    <option value="highestprice">Highest to lowest</option>
                </select>
            </div>
            <div class="clearfix"></div>
        </div>
    );
  }
}

export default Header;
