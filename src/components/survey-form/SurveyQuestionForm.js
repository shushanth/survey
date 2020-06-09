/**
 * @name: SurveyQuestionForm
 * @desc form component for the survey questions
 * @props: 1. questions
 */

import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';

import { BaseCheckbox, BaseButton } from '../../shared/components';
import './SurveyQuestionForm.scss';

const SurveyQuestionForm = memo(({ questions }) => {
  const [formQuestions, setFormQuestions] = useState(questions);
  const [isFormDirty, setFormDirty] = useState(false);

  useEffect(() => {
    const updatedFormOptions = formQuestions.map(question => {
      const updatedOptions = question.options.map(option => ({
        id: uniqueId(),
        selected: false,
        value: option,
      }));
      return { ...question, options: updatedOptions };
    });
    setFormQuestions(updatedFormOptions);
  }, []);

  const onQuestionSelect = (selectedId, questionId) => {
    const updatedQuestion = formQuestions
      .filter(({ id }) => id === questionId)
      .pop();
    const updatedQuestionOption = {
      ...updatedQuestion,
      options: updatedQuestion.options.map(({ id, selected, value }) => {
        if (selectedId === id) {
          return { id, selected: !selected, value };
        }
        return { id, selected, value };
      }),
    };
    const updatedFormQuestions = formQuestions.map(formQuestion => {
      if (formQuestion.id === questionId) {
        return updatedQuestionOption;
      }
      return formQuestion;
    });
    setFormDirty(true);
    setFormQuestions(updatedFormQuestions);
  };

  //render jsx of questions and its form with required input form elements
  const renderQuestionForm = () => {
    return formQuestions.map(({ id, title, options }) => {
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
                  id={option.id}
                  label={option.value}
                  selected={option.selected}
                  onSelect={selectedId => onQuestionSelect(selectedId, id)}
                />
              );
            })}
          </div>
        </div>
      );
    });
  };
  const onFormSubmit = () => {
    console.log('form submit');
  };
  return (
    <>
      {<div className="survey_question_form">{renderQuestionForm()}</div>}
      <BaseButton
        disabled={!isFormDirty}
        title="Submit"
        onBtnClick={onFormSubmit}
      />
    </>
  );
});

SurveyQuestionForm.propTypes = {
  questions: PropTypes.array,
};

export default SurveyQuestionForm;
