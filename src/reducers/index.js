import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import test from './Test';
import ui from './Ui';

export default combineReducers({
    router: routerReducer,
    ui,
    test,
});
