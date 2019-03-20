
import { ACTIONS_TYPE } from './../constants';

export function addUser(payload) {
    return { type: ACTIONS_TYPE.ADD_USER, payload }
};

export function addArticle(payload) {
    return { type: ACTIONS_TYPE.ADD_ARTICLE, payload }
}

export function setRouteState(payload) {
    return { type: ACTIONS_TYPE.SET_CURRENT_ROUTE, payload }
}

export function setLoggedUser(payload) {
    return { type: ACTIONS_TYPE.SET_LOGGED_USER, payload }
}