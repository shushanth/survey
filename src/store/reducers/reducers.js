/**
 * @name reducer
 * @description app reducers
 * @params state (default root state of type object), actions {type. payload}
 */

import {
  FETCH_SURVEYS_REQUEST,
  FETCH_SURVEYS_SUCCESS,
  FETCH_SURVEYS_FAILURE,
  SET_CURRENT_SELECTED_SURVEY,
  FETCH_SURVEY_QUESTIONS_REQUEST,
  FETCH_SURVEY_QUESTIONS_SUCCESS,
  FETCH_SURVEY_QUESTIONS_FAILURE,
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

    case SET_CURRENT_SELECTED_SURVEY: {
      const { id, title } = payload;
      return {
        ...state,
        currentSelectedSurvey: { id, title },
      };
    }

    case FETCH_SURVEY_QUESTIONS_REQUEST: {
      return {
        ...state,
        surveyQuestionsFetching: true,
        surveyQuestionsError: false,
      };
    }

    case FETCH_SURVEY_QUESTIONS_SUCCESS: {
      const {
        survey: { questions },
      } = payload;
      return {
        ...state,
        currentSelectedSurvey: {
          ...state.currentSelectedSurvey,
          questions,
        },
      };
    }

    case FETCH_SURVEY_QUESTIONS_FAILURE: {
      return {
        ...state,
        surveyQuestionsFetching: false,
        surveyQuestionsError: true,
      };
    }

    default:
      return state;
  }
};

export default reducer;
