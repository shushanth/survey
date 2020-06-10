/**
 * @name: SurveyDetail
 * @desc container component for the survey detail page
 */

import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

import { httpService } from '../../api/httpService';
import { BaseLayout, BaseHeading, BaseToast } from '../../shared/components';
import SurveyQuestionForm from '../../components/survey-form/SurveyQuestionForm';
import {
  fetchSurveyQuestionsRequest,
  fetchSurveyQuestionsSuccess,
  fetchSurveyQuestionsFailure,
  postSurveyRequest,
  postSurveySuccess,
  postSurveyFailure,
} from '../../store/actions/actions';
import './SurveyDetail.scss';

const SurveyDetail = ({ history }) => {
  const dispatch = useDispatch();
  const { surveyId } = useParams();
  const [isSurveyCompleted, setIsSurveyCompleted] = useState(false);
  const selectedSurvey = useSelector(state => state.currentSelectedSurvey);
  const isSurveyPostSuccess = useSelector(state => state.surveyPostSuccess);

  const areQuestionsAvailable = () => !isEmpty(selectedSurvey.questions);

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

  /**
   * post request of the feedback obtained
   * success message and redirecting to available survey page.
   */
  const feedbackCompletion = feedbackObtained => {
    const surveyID = selectedSurvey.id || surveyId;
    httpService.request({
      method: 'POST',
      url: `/surveys/${surveyID}/completions`,
      data: feedbackObtained,
      onSuccess: result => {
        dispatch(postSurveySuccess(result));
      },
      onFailure: error => {
        dispatch(postSurveyFailure(error));
      },
    });
  };

  const handlePostSurvey = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    dispatch(postSurveyRequest());
  };

  // loads only once the components mounted, and make request to fetch selected survey questions
  useEffect(() => {
    if (areQuestionsAvailable) {
      dispatch(fetchSurveyQuestionsRequest());
      requestSelectedQuestions();
    }
  }, []);

  useEffect(() => {
    if (isSurveyCompleted) {
      handlePostSurvey();
    }
  }, [isSurveyCompleted]);

  const onSurveyDone = surveyFeedback => {
    setIsSurveyCompleted(true);
    feedbackCompletion(surveyFeedback);
  };

  const redirectToAvailableSurveys = useCallback(() => {
    history.push(`/surveys/`);
  }, [history]);

  return (
    <BaseLayout headerTitle="The Survey App">
      {isSurveyPostSuccess && (
        <BaseToast
          id="formSuccessFull"
          msg="Thank you for the feedback"
          level="success"
          offset={3}
          afterClose={redirectToAvailableSurveys}
        />
      )}
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
        <SurveyQuestionForm
          questions={selectedSurvey.questions}
          onSurveyComplete={onSurveyDone}
        />
      )}
    </BaseLayout>
  );
};

SurveyDetail.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default SurveyDetail;
