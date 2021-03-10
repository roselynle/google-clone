document.addEventListener("DOMContentLoaded", getResults);
const section = document.getElementById("results");
// Getting data from server
function getResults() {
    fetch("http://localhost:3000/pizzaresults")
    .then(((res) => res.json())
    .then((data) => { section.innerHTML = data.body })
    );
}

getResults();
