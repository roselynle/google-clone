document.addEventListener("DOMContentLoaded", getResults);

function getResults() {
    fetch("http://localhost:5000/pizzaresult")
        .then((r) => r.text())
        .then(
            (result) =>
                (document.getElementbyId("results").textContent = result)
        );
}

getResults();
