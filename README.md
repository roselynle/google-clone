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
    -   Access: server on localhost:3000/
-   Navigate into the `client` folder and run `python3 -m http.server` / `http-server` (node)
    -   Access: client on localhost:8000/ (or just open the `index.html` file in your browser)

## Technologies

-   Client side: HTML, CSS and JavaScript
    -   Dependencies: concurrently, watchify
-   Server side: Node.js
    -   Dependencies: cors, express, body-parser, nodemon, axios

## Task Requirements

-   [x] Your version of Google should have a homepage, with a logo, search bar and two buttons.
-   [] Upon pressing one button an API call should be executed and users should be shown a page with ten results.
-   [x] Upon pressing the other, users should be taken to the page of one of the results.

## Bugs

-   Webpage is not reponsive and only works on desktop
-   Search button is still not rendering the search results from the API call

## Wins & Challenges

### Wins

-   Managed to get the local server up and running
-   API calls successully retrieves data
-   Feeling lucky button successfully makes an API call and redirects to a random url based on the user's search keywords

### Challenges

-   Difficulties rendering data from server onto client side
-   Trying to get the search button to render 10 results (from the API call) onto a new page

