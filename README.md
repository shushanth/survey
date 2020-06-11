# survey
survey application with set of questions and handles feedback of the respective questions displayed

## Project setup
(bootstrapped with create react app)
```
yarn 
```

### Build and minifies for production
```
yarn build
```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!


### Usage
**(Compiles and hot-reloads for development)**

```
yarn start 
```
open (http://localhost:3000/)

```
yarn test
```
Launches the test runner in the interactive watch mode.<br />

#### Details
Surveys app consists of the two routes and uses routing in the app to route to survey list and survey detail pages. App has a default header.

- Survey list and survey details page 
     1. _Surveys List_ : This page acts a container component which manages the state required for available surveys. 
     Displays available surveys in list format on select of the surveys, redirect to survey detail page. 
     Each survey row displays title and tagline of the survey . Informs status of the survey is it completed or not, as of now displays status for _001_ survey id as the api provides the completed status only for _001_.
    2. _Survey Detail_:  This page is navigated from survey list page on select of any individual survey row and display the questions of the selected survey. On successful submission of the survey success toast message is been displayed and after some seconds gets redirect back to survey list page.

#### Implementations
-  Implemented surveys form and ui layer components (button, layout, checkbox ..etc) with hooks.
-  Added _redux_ as state container and uses hooks to dispatch actions and get the state
-  Added unit tests , uses _react testing library_ .
-  Uses sass for styles with its required functionalities. 
-  Automatically format the code before every commit using prettier.

#### Assumptions
- In Survey detail page, the respective questions doesn't have multiple selection option.
- In Survey detail page, submit button is enabled when minimum one question is answered.

#### Improvements to be done.
- Api and mock tests.
- More intuitive design 


#### breaking changes and issues
-  Added setupTest to handle global test configuration , but not working as using the values in each test file.(_import "@testing-library/jest-dom/extend-expect";_). 
