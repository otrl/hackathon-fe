import axios from 'axios';
import _ from 'lodash';

import config from '../config';
import {store} from '../store';
import {UiActionTypes} from '../constants';

export default {
    getApiClient: () => {
        const instance = axios.create({
            baseURL: `${config.api}/`
        });

        instance.interceptors.request.use((config) => {
            const processId = _.uniqueId();
            config.processId = processId;
            store.dispatch({type: UiActionTypes.LOADING_START, id: processId});
            return config;
        }, function (error) {
            return Promise.reject(error);
        });

        instance.interceptors.response.use((res) => {
            if (res.config.processId) {
                store.dispatch({type: UiActionTypes.LOADING_END, id: res.config.processId});
            }
            return res;
        }, (err) => {
            if (err.response) {
                if (err.response.config.processId) {
                    store.dispatch({type: UiActionTypes.LOADING_END, id: err.response.config.processId});
                }
            }

            return Promise.reject(err);
        });

        return instance;
    }
};
