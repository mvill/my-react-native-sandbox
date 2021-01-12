import { combineReducers } from '@reduxjs/toolkit';
import cptScreenReducer from './cptScreenReducer';
import minesweeperScreenReducer from './minesweeperScreenReducer';
import screenManagerReducer from './screenManagerReducer';

const rootReducer = combineReducers({
  screenManager: screenManagerReducer,
  minesweeperScreen: minesweeperScreenReducer,
  cptScreen: cptScreenReducer,
});

export default rootReducer;
