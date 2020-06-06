/**
 * @name reducer
 * @description app reducers
 * @params state (default root state of type object), actions {type. payload}
 */

import {
  FETCH_SURVEYS_REQUEST,
  FETCH_SURVEYS_SUCCESS,
  FETCH_SURVEYS_FAILURE,
} from '../actions/actionTypes';

import rootState from './rootState';

const reducer = (state = rootState, { type, payload }) => {
  switch (type) {
    case FETCH_SURVEYS_REQUEST: {
      return {
        ...state,
        surveysFetching: true,
        surveysError: false,
        surveys: [],
      };
    }
    case FETCH_SURVEYS_SUCCESS: {
      const { surveys } = payload;
      return {
        ...state,
        surveys,
        surveysFetching: false,
        surveysError: false,
      };
    }

    case FETCH_SURVEYS_FAILURE: {
      return {
        ...state,
        surveysError: true,
        surveysFetching: false,
        surveys: [],
      };
    }

    default:
      return state;
  }
};

export default reducer;
