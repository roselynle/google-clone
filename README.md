### Google Homepage

## Installation & Usage

### Installation

-   Clone or download the repo.
-   Open terminal and navigate to `google-homepage` folder.
-   Run `npm install` to install dependencies.

### Usage

-   Run `npm run dev` to launch server using nodemon

## Changelog

### app.js

[x] Created a route for retrieving all 10 search results\
[x] Created a route for retrieving a specific search result based on id\
[x] Get the server running on port 5000\

### data.js

[x] Moved search result data into a new separate file and exported

### index.html

[x] Added navigation bar with links and menu button icon\
[x] Added Google Logo\
[x] Added search bar\
[x] Added search buttons\
[x] Added footer with links\
[x] Added a script to generate a random website (from our 10 search results) when I'm feeling lucky is clicked

### style.css

[x] Styled nav bar\
[x] Styled search bar and buttons\
[x] Styled footer\
[x] Used grids to layout the page

### homepage.js

[x] Added event listener to relocate to window to searchResults.html when Google Search Button is clicked

### searchResults.html

[x] Added a seperate html page for search results to be displayed

### searchResults.js

[] Add event listener so when the page loads it will fetch the search results from the local server

## Bugs

[] Search results are not generated on the html page when fetching data from local server\
[] searchResults.js is incomplete

## Wins & Challenges

### Wins

-   Managed to get the local server running
-   Managed to get all search results when directed to http://localhost:5000/pizzaresult
-   Managed to get a specific search result based on id number when directed to http://localhost:5000/pizzaresult/id

### Challenges

-   Made some edits to searchResults.js file but had difficulties getting data from server onto client side
-   Time management - spent too much time on the front end getting the local server running
-   Git flow - trouble working with git collaboraitvely and having error messages. Therefore the commits are mostly coming from one person even though we worked as a team
