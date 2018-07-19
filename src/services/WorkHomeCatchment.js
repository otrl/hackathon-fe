import {resolveAll, resolve} from '../helpers/mappers';
import Api from '../helpers/Api';
import Record from '../records/WorkHomeCatchment';

const WorkHomeCatchment = {
    async search(postCode = '', type = 'work') {
        const apiClient = Api.getApiClient();
        try {
            const results = await apiClient.post(`/work-home-catchment`, {
                postCode,
                type
            });
            console.log(results);
            return {
                catchments: resolveAll(results.data.data).as(Record),
                originPoint: resolve(results.data.originPoint).as(Record)
            };
        } catch (err) {
            console.error(err);
            return Promise.reject();
        }
    }
};

export default WorkHomeCatchment;
