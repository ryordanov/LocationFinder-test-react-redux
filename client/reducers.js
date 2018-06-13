/* eslint linebreak-style: ["error", "unix"] */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import homeReducer from './containers/Home/reducer';
import mapReducer from './containers/Map/reducer';

export default combineReducers({
    routing: routerReducer,

    homeReducer,
    mapReducer
});