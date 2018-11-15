import {combineReducers} from 'redux';
import FilterReducer from './FilterReducer';

const allReducer=combineReducers({
    filter:FilterReducer
})

export default allReducer;