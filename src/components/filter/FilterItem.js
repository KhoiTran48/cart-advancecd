import React, { Component } from 'react';

class FilterItem extends Component {
    render() {
        var {size, onChangeFilter}=this.props;
        return (
            <div className="filters-available-size">
                <label>
                    <input type="checkbox" onChange={onChangeFilter} value={size}/><span className="checkmark">{size} </span> 
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
