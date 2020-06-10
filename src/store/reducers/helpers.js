/**
 * reducers helpers
 *
 * */

/**
 * @getUpdatedCompletedSurveys
 * @returns surveys which are completed
 * @param status action completedSurveys newCompletedSurvey
 */
const getUpdatedCompletedSurveys = (
  status,
  action,
  completedSurveys,
  newCompletedSurvey
) => {
  const updatedCompletedSurveys =
    status === 'ok' && action === 'completion'
      ? [...completedSurveys, newCompletedSurvey]
      : [...completedSurveys];
  return updatedCompletedSurveys;
};

export { getUpdatedCompletedSurveys };
