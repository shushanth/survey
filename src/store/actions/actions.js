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
} from './actionTypes';

const fetchSurveysRequest = () => ({ type: FETCH_SURVEYS_REQUEST });

const fetchSurveysSuccess = payload => ({
  type: FETCH_SURVEYS_SUCCESS,
  payload,
});

const fetchSurveysFailure = payload => ({
  type: FETCH_SURVEYS_FAILURE,
  payload,
});

const setCurrentSelectedSurvey = payload => ({
  type: SET_CURRENT_SELECTED_SURVEY,
  payload,
});

const fetchSurveyQuestionsRequest = payload => ({
  type: FETCH_SURVEY_QUESTIONS_REQUEST,
});

const fetchSurveyQuestionsSuccess = payload => ({
  type: FETCH_SURVEY_QUESTIONS_SUCCESS,
  payload,
});

const fetchSurveyQuestionsFailure = payload => ({
  type: FETCH_SURVEY_QUESTIONS_FAILURE,
  payload,
});

const postSurveyRequest = () => ({ type: POST_SURVEY_REQUEST });

const postSurveySuccess = payload => ({ type: POST_SURVEY_SUCCESS, payload });

const postSurveyFailure = payload => ({ type: POST_SURVEY_FAILURE, payload });

export {
  fetchSurveysRequest,
  fetchSurveysSuccess,
  fetchSurveysFailure,
  fetchSurveyQuestionsRequest,
  fetchSurveyQuestionsSuccess,
  fetchSurveyQuestionsFailure,
  setCurrentSelectedSurvey,
  postSurveyRequest,
  postSurveySuccess,
  postSurveyFailure,
};
