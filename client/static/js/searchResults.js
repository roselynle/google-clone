document.addEventListener("DOMContentLoaded", getResults);
const searchButton = document.getElementById("search");

let parent = document.getElementById("results");
function parseData(data) {
    for (let i = 0; i < data.length; i++) {
        // let listItem = document.createElement("li");
        // listItem.innerText = JSON.stringify(data);
        // parent.appendChild(listItem);

        // Getting our values
        let address = data[i].url;
        let name = data[i].name;
        let body = data[i].body;

        // Creating elements that will be used to hold text
        let article = document.createElement("article");
        let addressTag = document.createElement("p");
        let nameTag = document.createElement("h3");
        let anchor = document.createElement("a");
        let bodyTag = document.createElement("p");

        // Inserting text into elements
        addressTag.textContent = address;
        nameTag.textContent = name;
        anchor.setAttribute("href", address);
        bodyTag.textContent = JSON.stringify(body);

        // Appending text to anchor
        anchor.appendChild(nameTag);

        // Appending text to article
        article.appendChild(addressTag);
        article.appendChild(anchor);
        article.appendChild(bodyTag);

        // Appending to section
        parent.appendChild(article);
    }
}
