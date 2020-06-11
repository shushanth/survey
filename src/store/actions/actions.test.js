import {
  fetchSurveysRequest,
  fetchSurveysSuccess,
  fetchSurveysFailure,
  setCurrentSelectedSurvey,
  postSurveyRequest,
  postSurveySuccess,
  postSurveyFailure,
} from './actions';
import { getMockSurveys, getPostSurveys } from '../reducers/mocks/mockSurveys';

describe('actions', () => {
  let mockFetchSurveys = [];
  beforeEach(() => {
    mockFetchSurveys = getMockSurveys();
  });

  it('should create action to fetch surveys request', () => {
    const expectedAction = {
      type: 'FETCH_SURVEYS_REQUEST',
    };
    expect(fetchSurveysRequest(mockFetchSurveys)).toEqual(expectedAction);
  });

  it('should create action to fetch surveys successfully', () => {
    const expectedAction = {
      type: 'FETCH_SURVEYS_SUCCESS',
      payload: mockFetchSurveys,
    };
    expect(fetchSurveysSuccess(mockFetchSurveys)).toEqual(expectedAction);
  });

  it('should create action to fetch surveys failure', () => {
    const expectedAction = {
      type: 'FETCH_SURVEYS_FAILURE',
      payload: { error: 'something went wrong' },
    };
    expect(fetchSurveysFailure({ error: 'something went wrong' })).toEqual(
      expectedAction
    );
  });

  it('should create action to set current selected survey', () => {
    const expectedAction = {
      type: 'SET_CURRENT_SELECTED_SURVEY',
      payload: { id: '002', title: 'This is about Politics' },
    };
    expect(
      setCurrentSelectedSurvey({ id: '002', title: 'This is about Politics' })
    ).toEqual(expectedAction);
  });

  it('should create action to post surveys request', () => {
    const expectedAction = {
      type: 'POST_SURVEY_REQUEST',
    };
    expect(postSurveyRequest()).toEqual(expectedAction);
  });

  it('should create action to post surveys success', () => {
    const expectedAction = {
      type: 'POST_SURVEY_SUCCESS',
      payload: getPostSurveys(),
    };
    expect(postSurveySuccess(getPostSurveys())).toEqual(expectedAction);
  });

  it('should create action to fetch surveys request', () => {
    const expectedAction = {
      type: 'POST_SURVEY_FAILURE',
      payload: { error: 'something went wrong' },
    };
    expect(postSurveyFailure({ error: 'something went wrong' })).toEqual(
      expectedAction
    );
  });
});
