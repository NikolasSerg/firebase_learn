import {combineReducers} from 'redux';
import counterReducers from './counter';

export  default combineReducers ({
	count:counterReducers
})