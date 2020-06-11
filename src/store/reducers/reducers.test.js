import appReducer from './reducers';
import { getMockSurveys, getMockQuestions } from './mocks/mockSurveys';

describe('appReducer', () => {
  let rootState = null;
  let mockRootState = null;
  beforeEach(() => {
    rootState = {
      surveysFetching: false,
      surveysError: false,
      surveys: [],
      currentSelectedSurvey: { id: '', value: '' },
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
      currentSelectedSurvey: { id: '', value: '' },
    };

    expect(expectResult).toEqual(fetchSurveysRequest);
  });

  it('should handle action FETCH_SURVEYS_SUCCESS', () => {
    const fetchSurveysSuccess = appReducer(rootState, {
      type: 'FETCH_SURVEYS_SUCCESS',
      payload: { surveys: mockRootState },
    });
    const expectResult = {
      surveysFetching: false,
      surveysError: false,
      currentSelectedSurvey: { id: '', value: '' },
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
      currentSelectedSurvey: { id: '', value: '' },
    };

    expect(expectResult).toEqual(fetchSurveysFailure);
  });

  it('should handle action SET_CURRENT_SELECTED_SURVEY', () => {
    const setCurrentSelectedSurvey = appReducer(rootState, {
      type: 'SET_CURRENT_SELECTED_SURVEY',
      payload: { id: '002', title: 'This is about Politics' },
    });
    const expectResult = {
      surveysFetching: false,
      surveysError: false,
      surveys: [],
      currentSelectedSurvey: { id: '002', title: 'This is about Politics' },
    };
    expect(expectResult).toEqual(setCurrentSelectedSurvey);
  });

  it('should handle action FETCH_SURVEY_QUESTIONS_REQUEST', () => {
    const fetchSurveyQuestionRequest = appReducer(rootState, {
      type: 'FETCH_SURVEY_QUESTIONS_REQUEST',
    });
    const expectResult = {
      surveysFetching: false,
      surveysError: false,
      surveys: [],
      currentSelectedSurvey: { id: '', value: '' },
      surveyQuestionsFetching: true,
      surveyQuestionsError: false,
      surveyPostSuccess: false,
      surveyPostFailure: false,
    };
    expect(expectResult).toEqual(fetchSurveyQuestionRequest);
  });

  it('should handle action FETCH_SURVEY_QUESTIONS_SUCCESS', () => {
    const questions = getMockQuestions();
    const fetchSurveyQuestionSuccess = appReducer(rootState, {
      type: 'FETCH_SURVEY_QUESTIONS_SUCCESS',
      payload: { survey: { questions, title: 'test', id: 'test1' } },
    });
    const expectResult = {
      surveysFetching: false,
      surveysError: false,
      surveys: [],
      currentSelectedSurvey: {
        id: 'test1',
        title: 'test',
        questions,
      },
    };
    expect(expectResult).toEqual(fetchSurveyQuestionSuccess);
  });

  it('should handle action FETCH_SURVEY_QUESTIONS_FAILURE', () => {
    const fetchSurveyQuestionFailure = appReducer(rootState, {
      type: 'FETCH_SURVEY_QUESTIONS_FAILURE',
      payload: { error: 'something went wrong' },
    });

    const expectResult = {
      surveysFetching: false,
      surveysError: false,
      surveys: [],
      currentSelectedSurvey: { id: '', value: '' },
      surveyQuestionsFetching: false,
      surveyQuestionsError: true,
    };
    expect(expectResult).toEqual(fetchSurveyQuestionFailure);
  });

  it('should handle action POST_SURVEY_REQUEST', () => {
    const postSurveyRequest = appReducer(rootState, {
      type: 'POST_SURVEY_REQUEST',
    });
    const expectResult = {
      surveysFetching: false,
      surveysError: false,
      surveys: [],
      currentSelectedSurvey: { id: '', value: '' },
      surveyPostSuccess: false,
      surveyPostFailure: false,
    };
    expect(expectResult).toEqual(postSurveyRequest);
  });

  it('should handle action POST_SURVEY_SUCCESS', () => {
    const postSurveySuccess = appReducer(rootState, {
      type: 'FETCH_SURVEY_QUESTIONS_FAILURE',
      payload: {
        id: '003',
        title: 'Brand review',
        questions: getMockQuestions(),
      },
    });
    const expectResult = {
      surveysFetching: false,
      surveysError: false,
      surveys: [],
      currentSelectedSurvey: { id: '', value: '' },
      surveyQuestionsFetching: false,
      surveyQuestionsError: true,
    };
    expect(expectResult).toEqual(postSurveySuccess);
  });
});
