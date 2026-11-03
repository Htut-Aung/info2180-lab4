document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#search-form");
    const search = document.querySelector("#search");
    const result = document.querySelector("#result");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const query = search.value.trim();

        fetch("superheroes.php?query=" + encodeURIComponent(query))
            .then(response => {
                if (!response.ok) {
                    throw new Error("Request failed");
                }
                return response.text();
            })
            .then(data => {
                result.innerHTML = data;
            })
            .catch(error => {
                console.log(error);
                result.textContent = "An error occurred.";
            });
    });
});
