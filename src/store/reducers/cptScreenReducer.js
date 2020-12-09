/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { CPT_SCREEN_INCREMENT } from '../actions/cptScreenActions';

const initialState = {
  cpt: 10,
};

const cptScreenReducer = createReducer(initialState, {
  [CPT_SCREEN_INCREMENT]: (state) => {
    state.cpt += 1;
  },
});

export default cptScreenReducer;
