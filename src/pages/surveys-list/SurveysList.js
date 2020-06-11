/**
 * @name: SurveysList
 * @desc container component for the surveys list page
 * @props history
 *
 */

import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty, uniqueId } from 'lodash';

import { httpService } from '../../api/httpService';
import { BaseLayout, BaseHeading, BaseLoading } from '../../shared/components';
import {
  fetchSurveysRequest,
  fetchSurveysSuccess,
  fetchSurveysFailure,
  setCurrentSelectedSurvey,
} from '../../store/actions/actions';
import './SurveysList.scss';

const SurveysList = ({ history }) => {
  const dispatch = useDispatch();
  const surveysLoading = useSelector(state => state.questionsFetching);
  const availableSurveys = useSelector(state => state.surveys);
  const completedSurveys = useSelector(state => state.completedSurveys);

  const requestQuestions = () => {
    httpService.request({
      url: '/surveys',
      onSuccess: result => {
        dispatch(fetchSurveysSuccess(result));
      },
      onFailure: error => {
        dispatch(fetchSurveysFailure(error));
      },
    });
  };

  const isSurveyCompleted = surveyID => completedSurveys.includes(surveyID);

  //route to survey detail page
  const onSurveySelect = useCallback(
    (surveyId, title) => {
      dispatch(setCurrentSelectedSurvey({ id: surveyId, title }));
      history.push(`/surveys/${surveyId}`);
    },
    [dispatch, history]
  );

  // loads once the components mounted, and make request to fetch available survey
  useEffect(() => {
    if (isEmpty(availableSurveys)) {
      dispatch(fetchSurveysRequest());
      requestQuestions();
    }
  }, []);

  return (
    <BaseLayout headerTitle="The Survey App">
      <BaseHeading level="h3" theme="dark">
        Available surveys
      </BaseHeading>
      <div className="app-hz-line"></div>
      <div className="surveys_list_container">
        {surveysLoading || isEmpty(availableSurveys) ? (
          <BaseLoading />
        ) : (
          <div className="questions_container">
            {availableSurveys.map(({ id, title, tagline }) => {
              return (
                <div
                  className="question"
                  key={uniqueId(id)}
                  onClick={() =>
                    !isSurveyCompleted(id) && onSurveySelect(id, title)
                  }>
                  <p className="question_title">{title}</p>
                  <p className="question_tagline">{tagline}</p>
                  {isSurveyCompleted(id) && (
                    <p className="survey_completed">Done</p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </BaseLayout>
  );
};

SurveysList.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default SurveysList;
