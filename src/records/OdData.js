import {Record as record} from 'immutable';

import {construct, resolve} from '../helpers/mappers';

const defaults = {
    REC_TYPE: 'OdData',
    id: null,
    start_lad_name: null,
    start_latitude: null,
    start_longitude: null,
    end_lad_name: null,
    end_latitude: null,
    end_longitude: null,
    mode: null,
    period: null,
    purpose: null,
    trips: null,
};

class OdData extends record(defaults) {
    static fromJSON(json = {}) {
        return construct(OdData, json, {
            id: resolve.with(Number),
            start_lad_name: resolve.with(String),
            start_latitude: resolve.with(String),
            start_longitude: resolve.with(String),
            end_lad_name: resolve.with(String),
            end_latitude: resolve.with(String),
            end_longitude: resolve.with(String),
            mode: resolve.with(String),
            period: resolve.with(String),
            trips: resolve.with(Number),
        });
    }
}

export default OdData;
