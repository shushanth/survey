import appReducer from './reducers';
import { getMockSurveys } from './mocks/mockSurveys';

describe('appReducer', () => {
  let rootState = null;
  let mockRootState = null;
  beforeEach(() => {
    rootState = {
      surveysFetching: false,
      surveysError: false,
      surveys: [],
    };
    mockRootState = getMockSurveys();
  });
  it('should handle action FETCH_SURVEYS_REQUEST', () => {
    const fetchSurveysRequest = appReducer(rootState, {
      type: 'FETCH_SURVEYS_REQUEST',
    });
    const expectResult = {
      surveysFetching: true,
      surveysError: false,
      surveys: [],
    };
    expect(expectResult).toEqual(fetchSurveysRequest);
  });

  it('should handle action FETCH_SURVEYS_SUCCESS', () => {
    const fetchSurveysSuccess = appReducer(rootState, {
      type: 'FETCH_SURVEYS_SUCCESS',
      payload: mockRootState,
    });
    const expectResult = {
      surveysFetching: false,
      surveysError: false,
      surveys: mockRootState,
    };
    expect(expectResult).toEqual(fetchSurveysSuccess);
  });

  it('should handle action FETCH_SURVEYS_FAILURE', () => {
    const fetchSurveysFailure = appReducer(rootState, {
      type: 'FETCH_SURVEYS_FAILURE',
    });
    const expectResult = {
      surveysFetching: false,
      surveysError: true,
      surveys: [],
    };
    expect(expectResult).toEqual(fetchSurveysFailure);
  });
});
