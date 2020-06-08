/**
 * rootState
 * surveysFetching (boolean), To show loading state in the ui.
 * surveysError(boolean),  To show any surveys error occurred.
 * surveys([]{...}) , To Show the surveys,
 */
const rootState = {
  surveysFetching: false,
  surveysError: false,
  surveys: [],
  surveyQuestionsFetching: false,
  surveyQuestionsError: false,
  currentSelectedSurvey: { id: '', value: '', questions: [] },
};

export default rootState;
