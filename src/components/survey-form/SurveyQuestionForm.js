/**
 * @name: SurveyQuestionForm
 * @desc form component for the survey questions
 * @props: 1. questions
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';

import { BaseCheckbox, BaseButton } from '../../shared/components';
import './SurveyQuestionForm.scss';

const SurveyQuestionForm = memo(({ questions }) => {
  const onFormSubmit = () => {
    console.log('btn sumbit');
  };

  //render jsx of questions and its form with required input form elements
  const renderQuestionForm = () => {
    return questions.map(({ id, title, options }) => {
      return (
        <div key={uniqueId(id)} className="survey_question">
          <div className="title_container">
            <p className="title">{title}</p>
          </div>
          <div className="question_options">
            {options.map(option => {
              return (
                <BaseCheckbox
                  key={uniqueId(id)}
                  id={id}
                  isSelected={false}
                  label={option}
                />
              );
            })}
          </div>
        </div>
      );
    });
  };
  return (
    <>
      <div className="survey_question_form">{renderQuestionForm()}</div>

      <BaseButton title="Submit" onBtnClick={onFormSubmit} />
    </>
  );
});

SurveyQuestionForm.propTypes = {
  questions: PropTypes.array,
};

export default SurveyQuestionForm;
