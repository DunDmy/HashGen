//Imported Functions
import { combineReducers } from 'redux';
import { updateHash } from './HashInputReducer.js';
import { updateFile } from './HashFileReducer.js';


// const that combines all redusers. Add reducers when needed
export const allReducers = combineReducers({
    updateHash, updateFile
})