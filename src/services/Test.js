import {resolve} from '../helpers/mappers';
import Api from '../helpers/Api';
import Test from '../records/Test';

const TestService = {
    async get() {
        const apiClient = Api.getApiClient();
        try {
            const results = await apiClient.get(`/test`);
            return resolve(results.data.test).as(Test);
        } catch (err) {
            console.error(err);
            return Promise.reject();
        }
    }
};

export default TestService;
