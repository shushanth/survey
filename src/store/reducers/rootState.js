/**
 * rootState
 * surveysFetching (boolean), To show loading state in the ui.
 * surveysError(boolean),  To show any surveys error occurred.
 * surveyQuestionsFetching: survey questions loading state.
 * surveyQuestionsError: survey questions error state.
 * surveys([]{...}) , To Show the surveys,
 * currentSelectedSurvey: the survey which is selected for the feedback
 */
const rootState = {
  surveysFetching: false,
  surveysError: false,
  surveyQuestionsFetching: false,
  surveyQuestionsError: false,
  surveyPostRequested: false,
  surveyPostSuccess: false,
  surveyPostFailure: false,
  surveys: [],
  completedSurveys: [],
  currentSelectedSurvey: { id: '', value: '', questions: [] },
};

export default rootState;
