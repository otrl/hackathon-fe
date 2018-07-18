import {Record as record, Set} from 'immutable';

import { construct, resolve } from '../helpers/mappers';

const defaults = {
    REC_TYPE: 'UiState',
    loading: new Set(),
};

class UiState extends record(defaults) {
    static fromJSON (json = {}) {
        return construct(UiState, json, {
            loading: resolve.with(Set)
        });
    }

    isLoading () {
        return this.loading.size > 0;
    }

    addToLoading (id) {
        return this.set('loading', this.loading.add(id));
    }

    removeFromLoading (id) {
        return this.set('loading', this.loading.delete(id));
    }
}

export default UiState;
