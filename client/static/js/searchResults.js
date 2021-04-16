
document.addEventListener("DOMContentLoaded", parseData);

let resultsbox = document.getElementById("results");
function parseData(content) {
    for (let i = 0; i < content.length; i++) {
        // let listItem = document.createElement("li");
        // listItem.innerText = JSON.stringify(content);
        // parent.appendChild(listItem);
        resultsbox.appendChild(content);
    }
  }