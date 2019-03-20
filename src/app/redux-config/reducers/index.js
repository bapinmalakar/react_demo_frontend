
import { ACTIONS_TYPE } from './../constants';
import { stat } from 'fs';
const initialState = {
    article: [],
    user: [],
    currentRoute: 'home',
    loggedUser: null
}

function RootReducer(state = initialState, action) { // function for update state
    if(action.type == ACTIONS_TYPE.ADD_USER) { // update use state
        return Object.assign({}, state, {
            user: state.user.concat(action.payload)
        });
    } else if(action.type == ACTIONS_TYPE.ADD_ARTICLE) { // update article state
        return Object.assign({}, state, {
            article: state.article.concat(action.payload)
        });
    } else if(action.type == ACTIONS_TYPE.SET_CURRENT_ROUTE) {
        return Object.assign({}, state, {
            currentRoute: action.payload
        });
    } else if(action.type == ACTIONS_TYPE.SET_LOGGED_USER) {
        return Object.assign({}, state, {
            loggedUser: action.payload
        });
    }
    return state;
};

export default RootReducer;