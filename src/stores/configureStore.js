import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';

const crashReporter = store => next => action => {
    try {
        return next(action)
    } catch (err) {
        console.error('Caught an exception!', err)
    }
}

const store=createStore(rootReducer,applyMiddleware(crashReporter));
export default store;