import keyMirror from 'keymirror';

export const TestActionTypes = keyMirror({
    GET_TEST_START: null,
    GET_TEST_SUCCESS: null,
    GET_TEST_FAIL: null
});

export const UiActionTypes = keyMirror({
    LOADING_START: null,
    LOADING_END: null
});
