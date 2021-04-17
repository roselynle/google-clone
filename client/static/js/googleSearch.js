function searchButton() {
    document
        .getElementById("google-search-btn")
        .addEventListener("click", async (e) => {
            e.preventDefault();
            const query = document.getElementById("search").value.trim();
            let url = `http://localhost:3000/search/${query}`;
            console.log(url);
            await fetch(url)
                .then((r) => r.json())
                .then((content) => {
                    console.log(content.body);
                    // window.location.href = "http://localhost:8000/searchResults.html"
                    // document.addEventListener("DOMContentLoaded", parseData);
                    parseData(content.body);
                })
                .catch(console.warn);
        });
}

searchButton();

function parseData(data) {
    data.forEach((apiData) => loadSearchPage(apiData));
}

function loadSearchPage(apiData) {
    // this query selector gets the div on google homepage
    const allResults = document.querySelector("#result");

    // this query selector gets the div on search results page
    // const allResults = document.querySelector("#results");
    const resultDiv = document.createElement("div");
    resultDiv.className = "result-box";
    // link
    let link = document.createElement("a");
    let resultLink = apiData.url;
    link.setAttribute("href", resultLink);
    // title
    let textContent = `<h3>${apiData.title}</h3>`;
    link.innerHTML = resultLink + textContent;
    // description
    let description = document.createElement("p");
    description.textContent = result.snippet;

    resultDiv.append(link);
    resultDiv.append(description);
    allResults.append(resultDiv);
}
