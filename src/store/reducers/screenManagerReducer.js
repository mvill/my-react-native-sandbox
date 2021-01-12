/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { SCREEN_MANAGER_SET_SCREEN } from '../actions/screenManagerActions';

const initialState = {
  screenId: 'HOME',
};

const screenManagerReducer = createReducer(initialState, {
  [SCREEN_MANAGER_SET_SCREEN]: (state, { screenId }) => {
    state.screenId = screenId;
  },
});

export default screenManagerReducer;
