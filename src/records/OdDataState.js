import {Record as record, List} from 'immutable';

import {construct, resolveAll, resolve} from '../helpers/mappers';
import OdData from "./OdData";
import OriginPoint from "./OriginPoint";

const defaults = {
    REC_TYPE: 'OdDataState',
    loading: false,
    failed: false,
    place: 'Adur',
    type: 'destination',
    purpose: 'all',
    timeZone: 'all',
    mode: 'all',
    places: new List(),
    data: new List(),
    originPoint: null
};

class OdDataState extends record(defaults) {
    static fromJSON(json = {}) {
        return construct(OdDataState, json, {
            loading: resolve.with(Boolean),
            failed: resolve.with(Boolean),
            place: resolve.with(String),
            type: resolve.with(String),
            purpose: resolve.with(String),
            timeZone: resolve.with(String),
            mode: resolve.with(String),
            data: resolveAll.as(OdData),
            originPoint: resolve.as(OriginPoint)
        });
    }
}

export default OdDataState;
