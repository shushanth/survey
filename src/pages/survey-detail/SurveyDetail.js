/**
 * @name: SurveyDetail
 * @desc container component for the survey detail page
 *
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { useParams } from 'react-router-dom';

import { httpService } from '../../api/httpService';
import { BaseLayout, BaseHeading } from '../../shared/components';
import SurveyQuestionForm from '../../components/survey-form/SurveyQuestionForm';
import {
  fetchSurveyQuestionsRequest,
  fetchSurveyQuestionsSuccess,
  fetchSurveyQuestionsFailure,
} from '../../store/actions/actions';
import './SurveyDetail.scss';

const SurveyDetail = () => {
  const dispatch = useDispatch();
  const { surveyId } = useParams();

  const selectedSurvey = useSelector(state => state.currentSelectedSurvey);
  const requestSelectedQuestions = () => {
    httpService.request({
      url: `/surveys/${selectedSurvey.id || surveyId}`,
      onSuccess: result => {
        dispatch(fetchSurveyQuestionsSuccess(result));
      },
      onFailure: error => {
        dispatch(fetchSurveyQuestionsFailure(error));
      },
    });
  };

  const areQuestionsAvailable = () => !isEmpty(selectedSurvey.questions);

  // loads once the components mounted, and make request to fetch selected survey questions
  useEffect(() => {
    if (areQuestionsAvailable) {
      dispatch(fetchSurveyQuestionsRequest());
      requestSelectedQuestions();
    }
  }, []);

  return (
    <BaseLayout headerTitle="The Survey App">
      <BaseHeading level="h3" theme="dark">
        Complete questions of the survey
      </BaseHeading>
      <div className="app-hz-line"></div>
      <div className="selected_survey">
        <BaseHeading level="h4" theme="dark">
          {selectedSurvey.title}
        </BaseHeading>
      </div>
      {!areQuestionsAvailable() ? (
        <p>loading...</p>
      ) : (
        <SurveyQuestionForm questions={selectedSurvey.questions} />
      )}
    </BaseLayout>
  );
};

export default SurveyDetail;
