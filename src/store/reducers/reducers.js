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
  POST_SURVEY_REQUEST,
  POST_SURVEY_SUCCESS,
  POST_SURVEY_FAILURE,
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

    case POST_SURVEY_REQUEST: {
      return {
        ...state,
        surveyPostSuccess: false,
        surveyPostFailure: false,
      };
    }

    case POST_SURVEY_SUCCESS: {
      const { status, action, survey_id } = payload;
      //TODO: move this to helpers
      const completedSurveys =
        status === 'ok' && action === 'completion'
          ? [...state.completedSurveys, survey_id]
          : [...state.completedSurveys];
      return {
        ...state,
        surveyPostSuccess: true,
        surveyPostFailure: false,
        completedSurveys,
      };
    }

    case POST_SURVEY_FAILURE: {
      return {
        ...state,
        surveyPostFailure: true,
        surveyPostSuccess: false,
      };
    }

    default:
      return state;
  }
};

export default reducer;
