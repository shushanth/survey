import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import SurveysList from './SurveysList';
import { getMockSurveys } from '../../store/reducers/mocks/mockSurveys';
import rootState from '../../store/reducers/rootState';

describe('SurveysList', () => {
  let mockSurveys = [];
  beforeEach(() => {
    mockSurveys = getMockSurveys();
  });

  const SurveysListCmpMock = () => {
    const history = { push: () => {} };
    const mockStore = configureStore();
    const store = mockStore(rootState);
    return (
      <Provider store={store}>
        <SurveysList history={history} />
      </Provider>
    );
  };

  it('should render with surveys list layout items and have proper classes', () => {
    const { container } = render(SurveysListCmpMock(mockSurveys));
    expect(container.querySelector('.surveys_list_container')).toBeDefined();
    expect(container.querySelector('.question_container')).toBeDefined();
    expect(container.querySelector('.question_title')).toBeDefined();
    expect(container.querySelector('.question_tagline')).toBeDefined();
    expect(container.querySelector('.survey_completed')).toBeDefined();
    expect(container.querySelector('.question')).toBeDefined();
  });
});
