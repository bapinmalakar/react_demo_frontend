
import {ACTIONS_TYPE} from './../constants';

export default function addArticle(payload) {
    return { type: ACTIONS_TYPE.BASE_HTTP_CLASS, payload }
};