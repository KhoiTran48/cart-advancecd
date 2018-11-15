import React, { Component } from 'react';

class FilterItem extends Component {
  render() {
      var {size}=this.props;
    return (
        <div class="filters-available-size">
            <label>
                <input type="checkbox" value={size}/><span class="checkmark">{size} </span> 
            </label>
        </div>
    );
  }
}

export default FilterItem;
