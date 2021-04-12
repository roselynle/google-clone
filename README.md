# Google Clone

Replica of the Google homepage/results page.

This app was created as part of Futureproof's Coding Challenge.

## Installation & Usage

### Installation

-   Clone or download the repo.

### Usage

-   Open terminal and navigate to `google-clone` folder.
-   Run `npm install` to install dependencies.
-   Navigate into the `server` folder and run `npm run dev` to launch server using nodemon
    -   Access: server on localhost:5000/
-   Navigate into the `client` folder and run `python3 -m http.server` / `http-server` (node)
    -   Access: client on localhost:8000/ (or just open the `index.html` file in your browser)

## Technologies

-   HTML, CSS and JavaScript
    -   Dependencies include: Express, Cors, Nodemon

## Task Requirements

-   [x] Your version of Google should have a homepage, with a logo, search bar and two buttons.
-   [] Upon pressing one button an API call should be executed and users should be shown a page with ten results.
-   [x] Upon pressing the other, users should be taken to the page of one of the results.

## Bugs

-   [ ] searchResults.js is incomplete

## Wins & Challenges

### Wins

-   Managed to get the local server running
-   Managed to get all search results when directed to http://localhost:5000/pizzaresult
-   Managed to get a specific search result based on id number when directed to http://localhost:5000/pizzaresult/id

### Challenges

-   Made some edits to searchResults.js file but had difficulties getting data from server onto client side
-   Time management - spent too much time on the front end getting the local server running
-   Git flow - trouble working with git collaboraitvely and having error messages. Therefore the commits are coming from one person even though we worked as a team
