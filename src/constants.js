import keyMirror from 'keymirror';

export const TestActionTypes = keyMirror({
    GET_TEST_START: null,
    GET_TEST_SUCCESS: null,
    GET_TEST_FAIL: null
});

export const WorkHomeCatchmentActionTypes = keyMirror({
    GET_WORK_HOME_CATCHMENT_START: null,
    GET_WORK_HOME_CATCHMENT_SUCCESS: null,
    GET_WORK_HOME_CATCHMENT_FAIL: null
});

export const OdDataActionTypes = keyMirror({
    GET_OD_DATA_START: null,
    GET_OD_DATA_SUCCESS: null,
    GET_OD_DATA_FAIL: null,
    GET_OD_PLACES_START: null,
    GET_OD_PLACES_SUCCESS: null,
    GET_OD_PLACES_FAIL: null
});

export const UiActionTypes = keyMirror({
    LOADING_START: null,
    LOADING_END: null
});
