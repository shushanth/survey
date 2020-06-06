import {
  fetchSurveysRequest,
  fetchSurveysSuccess,
  fetchSurveysFailure,
} from './actions';
import { getMockSurveys } from '../reducers/mocks/mockSurveys';

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
});
