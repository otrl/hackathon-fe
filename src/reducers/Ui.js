import { UiActionTypes } from '../constants';

import UiState from '../records/UiState';

export default function UiReducer(state = new UiState(), action) {
    switch (action.type) {
        case UiActionTypes.LOADING_START: {
            state = state.addToLoading(action.id);
            break;
        }
        case UiActionTypes.LOADING_END: {
            state = state.removeFromLoading(action.id);
            break;
        }
        default:
            break;
    }
    return state;
}
