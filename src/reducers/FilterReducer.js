import * as types from './../constants/ActionTypes';

var initial={
    sizes:['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'],
    filterItems:[]
}

const FilterReducer=(state=initial, action)=>{
    switch (action.type) {
        case types.CHANGE_FILTER:
            state.filterItems=action.filterItems;
            return {...state};
        default:
            return {...state};
    }
}

export default FilterReducer;