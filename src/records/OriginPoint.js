import {Record as record} from 'immutable';

import {construct, resolve} from '../helpers/mappers';

const defaults = {
    REC_TYPE: 'OriginPoint',
    latitude: null,
    longitude: null,
};

class OriginPoint extends record(defaults) {
    static fromJSON(json = {}) {
        return construct(OriginPoint, json, {
            latitude: resolve.with(String),
            longitude: resolve.with(String),
        });
    }
}

export default OriginPoint;
