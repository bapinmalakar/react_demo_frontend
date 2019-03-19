
import { ACTIONS_TYPE } from './../constants';
import { stat } from 'fs';
const initialState = {
    baseHttpClass: null,
    article: []
}

function RootReducer(state = initialState, action) {
    if(action.type == ACTIONS_TYPE.BASE_HTTP_CLASS) {
        return Object.assign({}, state, {
            baseHttpClass: action.payload
        });
    } else if(action.type == ACTIONS_TYPE.ADD_ARTICLE) {
        console.log('state: ', state, action);
        return Object.assign({}, state, {
            article: stat.article.concat(action.payload)
        });
    }
    return state;
};

export default RootReducer;