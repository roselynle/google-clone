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
