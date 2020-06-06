/**
 * @name: QuestionsList
 * @desc container component for the questions list page
 * @props history
 *
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';

import { httpService } from '../../api/httpService';
import { BaseLayout } from '../../shared/components';
import {
  fetchSurveysRequest,
  fetchSurveysSuccess,
  fetchSurveysFailure,
} from '../../store/actions/actions';

const SurveysList = () => {
  const dispatch = useDispatch();
  const surveysLoading = useSelector(state => state.questionsFetching);
  const surveys = useSelector(state => state.surveys);

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
    if (isEmpty(surveys)) {
      dispatch(fetchSurveysRequest());
      requestQuestions();
    }
  }, []);
  return (
    <BaseLayout headerTitle="Survey questions">
      <div>
        {surveysLoading ? <p>loading...</p> : <div>questions lists</div>}
      </div>
    </BaseLayout>
  );
};

export default SurveysList;
