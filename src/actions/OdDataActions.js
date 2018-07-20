import {OdDataActionTypes} from '../constants';

import OdData from '../services/OdData';

const OdDataActions = {
    search: (place, type, purpose, timeZone, mode) => async dispatch => {
        dispatch({type: OdDataActionTypes.GET_OD_DATA_START, place, directionType: type, purpose, timeZone, mode});
        try {
            const results = await OdData.search(place, type, purpose, timeZone, mode);
            dispatch({type: OdDataActionTypes.GET_OD_DATA_SUCCESS, ...results});
        } catch (err) {
            console.log(err);
            dispatch({type: OdDataActionTypes.GET_OD_DATA_FAIL});
        }
    },

    getPlaces: () => async dispatch => {
        dispatch({type: OdDataActionTypes.GET_OD_PLACES_START});
        try {
            const results = await OdData.getPlaces();
            dispatch({type: OdDataActionTypes.GET_OD_PLACES_SUCCESS, results});
        } catch (err) {
            console.log(err);
            dispatch({type: OdDataActionTypes.GET_OD_PLACES_FAIL});
        }
    }
};

export default OdDataActions;
