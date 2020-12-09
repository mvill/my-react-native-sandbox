import { combineReducers } from '@reduxjs/toolkit';
import cptScreenReducer from './cptScreenReducer';
import minesweeperScreenReducer from './minesweeperScreenReducer';

const rootReducer = combineReducers({
  minesweeperScreen: minesweeperScreenReducer,
  cptScreen: cptScreenReducer,
});

export default rootReducer;
