import {TestActionTypes} from '../constants';

import Test from '../services/Test';

const TestActions = {
    get: () => async dispatch => {
        dispatch({type: TestActionTypes.GET_TEST_START});
        try {
            const test = await Test.get();
            dispatch({type: TestActionTypes.GET_TEST_SUCCESS, test});
        } catch (err) {
            console.log(err);
            dispatch({type: TestActionTypes.GET_TEST_FAIL});
        }
    }
};

export default TestActions;
