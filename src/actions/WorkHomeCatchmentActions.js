import {WorkHomeCatchmentActionTypes} from '../constants';

import WorkHomeCatchment from '../services/WorkHomeCatchment';

const WorkHomeCatchmentActions = {
    search: (postcode, type) => async dispatch => {
        dispatch({type: WorkHomeCatchmentActionTypes.GET_WORK_HOME_CATCHMENT_START});
        try {
            const results = await WorkHomeCatchment.search(postcode, type);
            dispatch({type: WorkHomeCatchmentActionTypes.GET_WORK_HOME_CATCHMENT_SUCCESS, ...results});
        } catch (err) {
            console.log(err);
            dispatch({type: WorkHomeCatchmentActionTypes.GET_WORK_HOME_CATCHMENT_FAIL});
        }
    }
};

export default WorkHomeCatchmentActions;
