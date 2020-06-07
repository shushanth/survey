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
import { BaseLayout, BaseHeading } from '../../shared/components';
import {
  fetchSurveysRequest,
  fetchSurveysSuccess,
  fetchSurveysFailure,
} from '../../store/actions/actions';
import './SurveysList.scss';

const SurveysList = ({ history }) => {
  const dispatch = useDispatch();
  const surveysLoading = useSelector(state => state.questionsFetching);
  const availableSurveys = useSelector(state => state.surveys);

  //route to survey detail page
  const onSurveySelect = useCallback(
    surveyId => {
      debugger;
      history.push(`/surveys/${surveyId}`);
    },
    [dispatch, history]
  );

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

  // loads once the components mounted, and make request to fetch survey questions
  useEffect(() => {
    if (isEmpty(availableSurveys)) {
      dispatch(fetchSurveysRequest());
      requestQuestions();
    }
  }, []);
  return (
    <>
      <BaseLayout headerTitle="The Survey App">
        <BaseHeading level="h4" theme="dark">
          Available surveys
        </BaseHeading>
        <div className="surveys_list_container">
          {surveysLoading || isEmpty(availableSurveys) ? (
            <p>loading...</p>
          ) : (
            <div className="questions_container">
              {availableSurveys.map(({ id, title, tagline }) => {
                return (
                  <div
                    className="question"
                    key={uniqueId(id)}
                    onClick={() => onSurveySelect(id)}>
                    <p>{title}</p>
                    <p>{tagline}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </BaseLayout>
    </>
  );
};

SurveysList.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default SurveysList;
