/**
 * @name: QuestionsList
 * @desc container component for the questions list page
 * @props history
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { BaseLayout } from '../../shared/components';

const QuestionsList = () => {
  return (
    <BaseLayout headerTitle="Survey questions">
      <div>Questions lists</div>
    </BaseLayout>
  );
};

export default QuestionsList;
