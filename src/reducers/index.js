import {combineReducers} from 'redux';
import FilterReducer from './FilterReducer';
import ProductReducer from './ProductReducer';
import CartReducer from './CartReducer';

const allReducer=combineReducers({
    filter: FilterReducer,
    products:   ProductReducer,
    cart:   CartReducer
})

export default allReducer;