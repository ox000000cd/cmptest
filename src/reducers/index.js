import {combineReducers} from 'redux';
import {postReducer} from './postReducer.js';
import {counterReducer} from './counter';
import {InnerDataResucer} from "./InnerDataResucer";
//项目入口 作为合并
export const combineReducer = combineReducers({
    counter: counterReducer,
    post: postReducer,
    innerData: InnerDataResucer
});