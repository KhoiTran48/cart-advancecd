import React, { Component } from 'react';
import FilterItem from './../components/filter/FilterItem';
import FilterSize from './../components/filter/FilterSize';
import {connect} from 'react-redux';

import * as actions from './actions/index';

class FilterContainer extends Component {
  render() {
    return (
      <FilterSize/>
    );
  }
  
}
const mapState=(state)=>{
    return {
        filter:state.filter
    }
}
const mapDispatch=(dispatch,props)=>{
    return {
        onChangeFilter:(filterItems)=>{
            dispatch(actions.CHANGE_FILTER(filterItems));
        }
    }
}

export default connect(mapState, mapDispatch)(FilterContainer);
