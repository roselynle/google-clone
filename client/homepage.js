const searchBtn = document.getElementById("google-search-btn");

// when clicked then search results html should how up on page
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.replace("/searchResults.html");
});

