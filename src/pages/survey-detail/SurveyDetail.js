/**
 * @name: SurveyDetail
 * @desc container component for the survey detail page
 *
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty, uniqueId } from 'lodash';

import { httpService } from '../../api/httpService';
import { BaseLayout, BaseHeading } from '../../shared/components';
import {
  fetchSurveyQuestionsRequest,
  fetchSurveyQuestionsSuccess,
  fetchSurveyQuestionsFailure,
} from '../../store/actions/actions';
import './SurveyDetail.scss';

const SurveyDetail = () => {
  const dispatch = useDispatch();
  const selectedSurvey = useSelector(state => state.currentSelectedSurvey);

  const requestSelectedQuestions = () => {
    httpService.request({
      url: `/surveys/${selectedSurvey.id}`,
      onSuccess: result => {
        dispatch(fetchSurveyQuestionsSuccess(result));
      },
      onFailure: error => {
        dispatch(fetchSurveyQuestionsFailure(error));
      },
    });
  };

  console.log(selectedSurvey.questions);
  // loads once the components mounted, and make request to fetch selected survey questions
  useEffect(() => {
    if (isEmpty(selectedSurvey.questions)) {
      dispatch(fetchSurveyQuestionsRequest());
      requestSelectedQuestions();
    }
  }, []);
  return (
    <BaseLayout headerTitle="The Survey App">
      <BaseHeading level="h4" theme="dark">
        Complete questions of the survey
      </BaseHeading>
      <div className="app-hz-line"></div>
      <p className="selected_survey">{selectedSurvey.title}</p>
    </BaseLayout>
  );
};

export default SurveyDetail;
