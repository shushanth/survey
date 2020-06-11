import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Route, MemoryRouter } from 'react-router-dom';

import SurveyDetail from './SurveyDetail';
import rootState from '../../store/reducers/rootState';

describe('SurveyDetail', () => {
  const SurveyDetailCmpMock = () => {
    const mockStore = configureStore();
    const store = mockStore(rootState);
    return (
      <Provider store={store}>
        <MemoryRouter initialEntries={['/surveys']}>
          <Route path="surveys/:surveyId">
            <SurveyDetail />
          </Route>
        </MemoryRouter>
      </Provider>
    );
  };

  it('should render with recipe detail component', () => {
    const { container } = render(SurveyDetailCmpMock());
    expect(container).toBeDefined();
    expect(container.querySelector('.selected_survey')).toBeDefined();
  });
});
