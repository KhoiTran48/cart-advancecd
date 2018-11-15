import React, { Component } from 'react';
import FilterItem from './FilterItem';

class FilterSize extends Component {
  render() {
      var sizes=['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];
      var filterItem=this.showFilterItem(sizes);
    return (
        <div class="filters">
            <h4 class="title">Sizes:</h4>
            {filterItem}
            <div class="star-button-container"><small>Leave a star on Github if this repository was useful :)</small><span></span></div>
        </div>
    );
  }
  showFilterItem=(sizes)=>{
      var result= null;
      if(sizes.length >0){
          result=sizes.map((item, index)=>{
              return (
                  <FilterItem
                    key={index}
                    size={item}
                  />
              )
          })
      }
      return result;
  }
}

export default FilterSize;
