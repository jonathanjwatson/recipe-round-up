# Recipe Round Up

## App Purpose

A restaurant needs to keep track on how many ingredients it has left in stock after each order has been placed. They also want to know how many times a recipe has been ordered. This app is a ui that will let management keep track of these things in a cohesive dashboard.

## App Commands

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## App Functionality

1. View pending orders and items inventory on same screen. 
2. Top navbar with current number of cancelled, pending, in progress, and fulfilled orders is visible.
3. Create Order checks for items in stock and will not create the order if appropriate items are not in stock.
4. Items may be filtered by color. 

## Future Development

1. Ability to cancel an order in pending state within three minutes of the order being created (suggest a back-end update for created DTTM).
2. Order should be in "pending" state when first created and transitioned into "in progress" after 3 minutes of being created (suggest building a CRON scheduler microservice to handle this at the database layer ).
3. Would like to extract data store into a redux store. 

## App Technologies

* Recipe Round Up is built in React using typescript. 
* Bootstrap CSS framework was imported for initial mockup. 
* App is automatically deployed to AWS Amplify on push to master or develop.
* Unit tests (primarily only snapshots) are run with React Testing Library
* A re-usable error boundary wraps each component to ensure the dashboard will continue to load, even if an error occurs in a single child component.

## Deployed App

Master Branch can be found here: https://master.d389g2auxz2t46.amplifyapp.com/

Develop Branch can be found here: https://develop.d389g2auxz2t46.amplifyapp.com/
 