import { createStore, combineReducers } from 'redux';
import serviceReducer from './reducers/serviceReducer';

const rootReducer = combineReducers({
    services: serviceReducer,
});

const store = createStore(rootReducer);

export default store;
