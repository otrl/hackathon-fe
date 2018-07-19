import {Record as record} from 'immutable';

import {construct, resolve} from '../helpers/mappers';

const defaults = {
    REC_TYPE: 'WorkHomeCatchment',
    postcode: null,
    latitude: null,
    longitude: null,
    users: null,
};

class WorkHomeCatchment extends record(defaults) {
    static fromJSON(json = {}) {
        return construct(WorkHomeCatchment, json, {
            postcode: resolve.with(String),
            latitude: resolve.with(String),
            longitude: resolve.with(String),
            users: resolve.with(Number),
        });
    }
}

export default WorkHomeCatchment;
