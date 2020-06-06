import {
  FETCH_SURVEYS_REQUEST,
  FETCH_SURVEYS_SUCCESS,
  FETCH_SURVEYS_FAILURE,
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

export { fetchSurveysRequest, fetchSurveysSuccess, fetchSurveysFailure };
