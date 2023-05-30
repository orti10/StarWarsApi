# StarWarsApi

## Summary
Application that performs searches over a star wars dataset.
The service should expose a REST API, whose data will be fetched using subsequent calls
to https://swapi.dev/documentation

## Getting Started
1. Clone the repository to your local machine 
git clone https://github.com/orti10/StarWarsApi.git
2. Install the dependencies by running `npm i` on the command line from the project directory.
3. Configure the PostgreSQL database connection
open 2 terminals:
1. Start the backend server - cd server and after: npm run dev
2. Start the frontend client - cd client and after: npm start
![terminal](https://github.com/orti10/StarWarsApi/assets/44768171/ace3b4a9-3317-451f-8207-726632c829af)


## Features 
* Users can search for a star wars film and get a paginated list of characters from that film.
* There may be several results returned from the search so the user can select one before characters are fetched.

## Technology Stack
The Response Time Tracker application uses the following technology stack:
* ReactJS for the frontend
* Node.js and Express.js for the backend server

Dashboars with data:
![dashboard](https://github.com/orti10/StarWarsApi/assets/44768171/c36f48de-be39-417c-880e-7c1d585ada24)

