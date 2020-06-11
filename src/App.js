/**
 * @name App
 * @desc handles app routes in the app
 *
 * App has two level of route
 * 1. /surveys is home route of the app. which displays available surveys
 * 2. /surveys/surveyId, which displays questions form and survey detail of the selected survey.
 */

import React from 'react';

import AppRoutes from './routes/routes';

const App = () => <AppRoutes />;

export default App;
