import {Record as record} from 'immutable';

import {construct, resolve} from '../helpers/mappers';

const defaults = {
    REC_TYPE: 'Test',
    message: null
};

class Test extends record(defaults) {
    static fromJSON(json = {}) {
        return construct(Test, json, {
            message: resolve.with(String),
        });
    }
}

export default Test;
