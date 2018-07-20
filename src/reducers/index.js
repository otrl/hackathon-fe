import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import test from './Test';
import ui from './Ui';
import catchments from './WorkHomeCatchment';
import odData from './OdData';

export default combineReducers({
    router: routerReducer,
    ui,
    test,
    catchments,
    odData
});
