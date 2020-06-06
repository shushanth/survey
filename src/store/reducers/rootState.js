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
};

export default rootState;
