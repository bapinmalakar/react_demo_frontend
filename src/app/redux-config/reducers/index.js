
import { ACTIONS_TYPE } from './../constants';
const initialState = {
    baseHttpClass: null
}

function RootReducer(state = initialState, action) {
    if(action.type == ACTIONS_TYPE.BASE_HTTP_CLASS) {
        return Object.assign({}, state, {
            baseHttpClass: action.payload
        });
    }
    return state;
};

export default RootReducer;