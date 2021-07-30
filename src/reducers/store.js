import {combineReducers} from 'redux';
import adminReducer from './admin-reducer';

const allReducers={
    adminData:adminReducer
};
const rootReducer=combineReducers(allReducers);
export default rootReducer;    