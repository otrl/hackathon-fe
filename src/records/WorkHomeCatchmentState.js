import {Record as record, List} from 'immutable';

import {construct, resolveAll, resolve} from '../helpers/mappers';
import WorkHomeCatchment from "./WorkHomeCatchment";

const defaults = {
    REC_TYPE: 'WorkHomeCatchmentState',
    loading: false,
    failed: false,
    postcode: 'E1',
    type: 'work',
    catchments: new List(),
    originPoint: null
};

class WorkHomeCatchmentState extends record(defaults) {
    static fromJSON(json = {}) {
        return construct(WorkHomeCatchmentState, json, {
            loading: resolve.with(Boolean),
            failed: resolve.with(Boolean),
            postcode: resolve.with(String),
            type: resolve.with(String),
            catchments: resolveAll.as(WorkHomeCatchment),
            originPoint: resolve.as(WorkHomeCatchment)
        });
    }
}

export default WorkHomeCatchmentState;
