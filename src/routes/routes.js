import React from 'react';
import { Router, Route, Redirect } from 'react-router';
import { createBrowserHistory } from 'history';

import SurveysList from '../pages/surveys-list/SurveysList';
import SurveyDetail from '../pages/survey-detail/SurveyDetail';
const history = createBrowserHistory();

const AppRoutes = () => {
  return (
    <Router history={history}>
      <Route
        exact
        path="/surveys"
        component={() => <SurveysList history={history} />}
      />
      <Route
        exact
        path="/surveys/:surveyId"
        component={() => <SurveyDetail history={history} />}
      />
      <Route exact path="/" render={() => <Redirect to="/surveys" />} />
    </Router>
  );
};

export default AppRoutes;
