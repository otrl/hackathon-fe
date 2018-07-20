import {resolveAll, resolve} from '../helpers/mappers';
import Api from '../helpers/Api';
import Record from '../records/OdData';
import OriginPoint from '../records/OriginPoint';
import OdPlace from "../records/OdPlace";

const OdData = {
    async search(place = 'Adun', type = 'origin', purpose = 'all', timeZone = 'all', mode = 'all') {
        const apiClient = Api.getApiClient();
        try {
            const results = await apiClient.post(`/od-data`, {
                place,
                type,
                purpose,
                timeZone,
                mode
            });
            return {
                data: resolveAll(results.data.data).as(Record),
                originPoint: resolve(results.data.point).as(OriginPoint)
            };
        } catch (err) {
            console.error(err);
            return Promise.reject();
        }
    },

    async getPlaces () {
        const apiClient = Api.getApiClient();
        try {
            const results = await apiClient.get(`/od-data`);
            return resolveAll(results.data.data).as(OdPlace);
        } catch (err) {
            console.error(err);
            return Promise.reject();
        }
    }
};

export default OdData;
