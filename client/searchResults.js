document.addEventListener("click", getResults);

function getResults() {
    fetch("http://localhost:5000/pizzaresult")
        .then((r) => r.text())
        .then((result) =>
            (document.getElementbyId("but").textContent = result).catch(
                (error) => {
                    console.log("Error");
                }
            )
        );
}

getResults();
