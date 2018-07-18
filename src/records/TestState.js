import {Record as record} from 'immutable';

import {construct, resolve} from '../helpers/mappers';
import Test from "./Test";

const defaults = {
    REC_TYPE: 'TestState',
    loading: false,
    failed: false,
    test: null
};

class TestState extends record(defaults) {
    static fromJSON(json = {}) {
        return construct(TestState, json, {
            loading: resolve.with(Boolean),
            test: resolve.as(Test)
        });
    }
}

export default TestState;
