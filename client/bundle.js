(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function luckyButton() {
  document
      .getElementById("feeling-lucky-btn")
      .addEventListener("click", async (e) => {
          e.preventDefault();
          const query = document.getElementById("search").value.trim();
          let url = `http://localhost:3000/lucky/${query}`;
          console.log(url);
          fetch(url)
              .then((r) => r.json())
              .then((content) => {
                  window.location.href = content.body.url;
              })
              .catch((err) => {
                  console.log(err);
              });
      });
}

luckyButton();

},{}],2:[function(require,module,exports){
// document.addEventListener("DOMContentLoaded", getResults);

// const searchBtn = document.getElementById("google-search-btn");

// searchBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     window.location.href = "http://localhost:8000/searchResults.html";
// });

function searchButton() {
    document
        .getElementById("google-search-btn")
        .addEventListener("click", async (e) => {
            e.preventDefault();
            const query = document.getElementById("search").value.trim();
            let url = `http://localhost:3000/search/${query}`;
            console.log(url);
            fetch(url)
                .then((r) => r.json())
                .then((content) => {
                    window.location.href =
                        "http://localhost:8000/searchResults.html";
                    parseData(content);
                })
                .catch((err) => {
                    alert(err);
                    throw err;
                });
        });
}
searchButton();

// document.addEventListener("DOMContentLoaded", getResults);

// let resultsbox = document.getElementById("results");
// function parseData(content) {
//     for (let i = 0; i < content.length; i++) {
// let listItem = document.createElement("li");
// listItem.innerText = JSON.stringify(content);
// parent.appendChild(listItem);
// resultsbox.appendChild(content);

// // Getting our values
// let address = content[i].url;
// let name = content[i].name;
// let body = content[i].body;

// // Creating elements that will be used to hold text
// let article = document.createElement("article");
// let addressTag = document.createElement("p");
// let nameTag = document.createElement("h3");
// let anchor = document.createElement("a");
// let bodyTag = document.createElement("p");

// // Inserting text into elements
// addressTag.textContent = address;
// nameTag.textContent = name;
// anchor.setAttribute("href", address);
// bodyTag.textContent = JSON.stringify(body);

// // Appending text to anchor
// anchor.appendChild(nameTag);

// // Appending text to article
// article.appendChild(addressTag);
// article.appendChild(anchor);
// article.appendChild(bodyTag);

// // Appending to section
//         // parent.appendChild(article);
//     }
// }

// function parseData(content) {
//     content.forEach((result) => generateSearchPage(result));
// }

function parseData(result) {
    const resultSection = document.querySelector("#results");
    const resultBox = document.createElement("div");
    resultBox.className = "result-box";
    //hyperlink
    let link = document.createElement("a");
    let resultLink = result.url;
    link.setAttribute("href", resultLink);
    //header
    let textContent = `<h3>${result.title}</h3>`;
    //assign clickable elements
    link.innerHTML = resultLink + textContent;
    // description
    let description = document.createElement("p");
    description.textContent = result.snippet;
    // let description = `<p>${result.snippet}</p>`
    resultBox.append(link);
    resultBox.append(description);
    resultSection.append(resultBox);
}

},{}]},{},[2,1]);
