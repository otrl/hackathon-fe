import {Record as record} from 'immutable';

import {construct, resolve} from '../helpers/mappers';

const defaults = {
    REC_TYPE: 'OdPlace',
    id: null,
    lad_name: null,
    latitude: null,
    longitude: null,
};

class OdPlace extends record(defaults) {
    static fromJSON(json = {}) {
        return construct(OdPlace, json, {
            id: resolve.with(Number),
            lad_name: resolve.with(String),
            latitude: resolve.with(String),
            longitude: resolve.with(String),
        });
    }
}

export default OdPlace;
