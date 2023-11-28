# React Home Assignment for Qualitest Junior FE role

[![Technologies](https://skillicons.dev/icons?i=ts,react,redux,styledcomponents)](https://skillicons.dev)

## Summary
Starting from a skeleton project made with React, TypeScript, Redux and StyledComponents build a Home page which handles user input, makes a REST request to get multiple dummy persons and displays them one by one as in a slideshow.

## Features
### The project requirements consisted of:
- Handle user input so that we make sure to receive a valid number which we'll pass further as a QueryParam in our REST request.
- Debounce the input so that we don't spam with HTTP requests when we enter a character and automatically submit the entered input when we finished typing
- Manage the HTTP async request and handle error cases accordingly
- Display the received array of JSON objects through a UserProfile component that shows the user's photo and their full name

## Restrictions
### The project had the followin restrictions:
- Use Redux to store the fetched users
- Handle all errors
- Validate the entered input so that we make sure to only send valid numbers in the request
- Don't install more packages, meaning that we are allowed to use only StyledComponents for styling and the other basic React dependencies (react-router-dom, @testing-library/react)

## Setup
1. Clone this repository
```
https://github.com/Rodioo/qualitest-react-home-assignment.git
```
2. Install the dependencies
```
npm i
```
3. Start the application in dev mode
```
npm run start
```
4. The application should automatically start on your default browser on http://localhost:3000
