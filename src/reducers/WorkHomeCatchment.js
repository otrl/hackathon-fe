import { WorkHomeCatchmentActionTypes } from '../constants';

import WorkHomeCatchmentState from '../records/WorkHomeCatchmentState';

export default function WorkHomeCatchment(state = new WorkHomeCatchmentState(), action) {
    switch (action.type) {
        case WorkHomeCatchmentActionTypes.GET_WORK_HOME_CATCHMENT_START: {
            state = state.merge({
                loading: true,
                failed: false
            });
            break;
        }
        case WorkHomeCatchmentActionTypes.GET_WORK_HOME_CATCHMENT_SUCCESS: {
            state = state.merge({
                loading: false,
                catchments: action.catchments,
                originPoint: action.originPoint
            });
            break;
        }
        case WorkHomeCatchmentActionTypes.GET_WORK_HOME_CATCHMENT_FAIL: {
            state = state.merge({
                loading: false,
                failed: true
            });
            break;
        }
        default:
            break;
    }
    return state;
}
