// Senior
(() => {
    const ul = document.querySelector("#list");
    const openButton = document.querySelector(".open-sidebar");
    const themeButton = document.querySelector(".theme-button");
    const sidebar = document.querySelector(".sidebar");
    const form = document.querySelector("#form");
    const inputField = document.querySelector("#todo-field");

    // using async/await can be a good thing or a bad thing
    // es6 for the future, es5 for backwards compatability
    form && // guarding for null values (if null, the rest of the script will still work)
        form.addEventListener("submit", async e => {
            // Don"t want to refresh page on submit
            e.preventDefault();

            const res = await fetch("http://localhost:3000/todo", {
                method: "Post",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ todo: inputField.value })
            });

            const json = await res.json();

            const li = document.createElement("li");

            li.innerHTML = json.todo;

            ul.appendChild(li);
        });

    openButton &&
        openButton.addEventListener("click", event => {
            event.preventDefault();
            sidebar.classList.toggle("sidebar-open");
        });

    themeButton &&
        themeButton.addEventListener("click", event => {
            event.preventDefault();

            // this is okay
            const buttons = Array.from(document.querySelectorAll("button"));
            const headers = Array.from(document.querySelectorAll("h1"));
            const elements = buttons.concat(headers);

            console.log("Buttons", buttons);
            console.log("Headers", headers);
            console.log("Elements", elements);

            document.body.classList.toggle("themed");
            elements.forEach((element) => element.classList.toggle("themed"));

        });
})();