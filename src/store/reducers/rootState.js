/**
 * rootState
 * questionsFetching (boolean), To show loading state in the ui
 * questionsError(boolean),  To show any recipe error occured
 * questions([]{...}) , To Show the recipes,
 */
const rootState = {
  surveysFetching: false,
  surveysError: false,
  surveys: [],
};

export default rootState;
