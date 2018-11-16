import React, { Component } from 'react';

class FilterItem extends Component {
    render() {
        var {size}=this.props;
        return (
            <div class="filters-available-size">
                <label>
                    <input type="checkbox" onChange={onChangeFilter} value={size}/><span class="checkmark">{size} </span> 
                </label>
            </div>
        );
    }
    onChangeFilter=(e)=>{
        // if(e.target.checked){
            this.props.onChangeFilter(e.target.value);
        //}
    }
}

export default FilterItem;
