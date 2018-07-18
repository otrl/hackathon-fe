import { TestActionTypes } from '../constants';

import TestState from '../records/TestState';

export default function BookReducer(state = new TestState(), action) {
    switch (action.type) {
        case TestActionTypes.GET_TEST_START: {
            state = state.merge({
                loading: true,
                failed: false
            });
            break;
        }
        case TestActionTypes.GET_TEST_SUCCESS: {
            state = state.merge({
                loading: false,
                test: action.test
            });
            break;
        }
        case TestActionTypes.GET_TEST_FAIL: {
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
