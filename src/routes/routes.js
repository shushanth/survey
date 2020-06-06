import React from 'react';
import { Router, Route, Redirect } from 'react-router';
import { createBrowserHistory } from 'history';

import QuestionsList from '../pages/questions-list/QuestionsList';

const history = createBrowserHistory();

const AppRoutes = () => {
  return (
    <Router history={history}>
      <Route
        exact
        path="/questions"
        component={() => <QuestionsList history={history} />}
      />
      <Route exact path="/" render={() => <Redirect to="/questions" />} />
    </Router>
  );
};

export default AppRoutes;
