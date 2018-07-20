import {WorkHomeCatchmentActionTypes} from '../constants';

import WorkHomeCatchment from '../services/WorkHomeCatchment';

const WorkHomeCatchmentActions = {
    search: (postcode, postCodeType) => async dispatch => {
        dispatch({type: WorkHomeCatchmentActionTypes.GET_WORK_HOME_CATCHMENT_START, postcode, postCodeType});
        try {
            const results = await WorkHomeCatchment.search(postcode, postCodeType);
            dispatch({type: WorkHomeCatchmentActionTypes.GET_WORK_HOME_CATCHMENT_SUCCESS, ...results});
        } catch (err) {
            console.log(err);
            dispatch({type: WorkHomeCatchmentActionTypes.GET_WORK_HOME_CATCHMENT_FAIL});
        }
    }
};

export default WorkHomeCatchmentActions;
