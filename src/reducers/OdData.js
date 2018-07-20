import { OdDataActionTypes } from '../constants';

import OdDataState from "../records/OdDataState";

export default function WorkHomeCatchment(state = new OdDataState(), action) {
    switch (action.type) {
        case OdDataActionTypes.GET_OD_DATA_START: {
            state = state.merge({
                loading: true,
                failed: false,
                place: action.postcode,
                type: action.directionType,
                purpose: action.purpose,
                timeZone: action.timeZone
            });
            break;
        }
        case OdDataActionTypes.GET_OD_DATA_SUCCESS: {
            state = state.merge({
                loading: false,
                data: action.data,
                originPoint: action.originPoint
            });
            break;
        }
        case OdDataActionTypes.GET_OD_DATA_FAIL: {
            state = state.merge({
                loading: false,
                failed: true
            });
            break;
        }
        case OdDataActionTypes.GET_OD_PLACES_START: {
            state = state.merge({
                loading: true,
                failed: false
            });
            break;
        }
        case OdDataActionTypes.GET_OD_PLACES_SUCCESS: {
            state = state.merge({
                loading: false,
                places: action.results,
            });
            break;
        }
        case OdDataActionTypes.GET_OD_PLACES_FAIL: {
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
