const searchBtn = document.getElementById("google-search-btn");

// when clicked then search results html should how up on page
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.replace("../../searchResults.html");
});

// function searchButton() {
//     document.getElementById('google-search-btn').addEventListener("click", async (e) => {
//         e.preventDefault()
//         const query = searchbar.value
//         try {
//             if (query.length < 1) throw new Error('please enter a search query')
//             const data = await apiFuncs.getData(`http://localhost:3000/search/${query}`)

//             //destroys old content
//             const resSect = document.querySelector('#resultSection');
//             resSect.innerHTML = "";

//             appendList(data.body)
//             handlerFuncs.layoutChange()
//             window.location.replace("../../searchResults.html");
//         } catch(err) {
//             alert(err)
//             throw err
//         }
//     })
// }

// searchButton()

function luckyButton() {
    document
        .getElementById("feeling-lucky-btn")
        .addEventListener("click", async (e) => {
            e.preventDefault();
            const query = document.getElementById("search").value.trim();
            let url = `http://localhost:3000/lucky/${query}`;
            console.log(url);
            fetch(url).then((r) => r.json())
            .then((content) => {
                window.location.href = content.body.url;
            }).catch((err) => {
                console.log(err);
            });
        });
}

luckyButton();
