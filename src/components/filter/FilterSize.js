import React, { Component } from 'react';

class FilterSize extends Component {
    render() {
        return (
            <div class="filters">
                <h4 class="title">Sizes:</h4>
                {this.props.children}
                <div class="star-button-container"><small>Leave a star on Github if this repository was useful :)</small><span></span></div>
            </div>
        );
    }
}
export default FilterSize;
