import { combineReducers } from '@reduxjs/toolkit';
import cptScreenReducer from './cptScreenReducer';

const rootReducer = combineReducers({
  cptScreen: cptScreenReducer,
});

export default rootReducer;
