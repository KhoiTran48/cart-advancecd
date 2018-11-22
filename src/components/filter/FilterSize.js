import React, { Component } from 'react';

class FilterSize extends Component {
    render() {
        return (
            <div className="filters">
                <h4 className="title">Sizes:</h4>
                {this.props.children}
                <div className="star-button-container"><small>Leave a star on Github if this repository was useful :)</small><span></span></div>
            </div>
        );
    }
}
export default FilterSize;
