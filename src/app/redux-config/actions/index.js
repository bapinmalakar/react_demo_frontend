
import {ACTIONS_TYPE} from './../constants';

export function updateBaseHttpService(payload) {
    return { type: ACTIONS_TYPE.BASE_HTTP_CLASS, payload }
};

export function addArticle(payload) {
    console.log('Payload: ', payload);
    return {type: ACTIONS_TYPE.ADD_ARTICLE, payload}
}