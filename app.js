document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#search-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        fetch("superheroes.php")
            .then(response => response.text())
            .then(data => {
                alert(data);
            })
            .catch(error => {
                console.log(error);
            });
    });
});
