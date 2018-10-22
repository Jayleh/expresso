// Senior (Best)
(() => {
    // using a data attribute means we can easily find the elements used for js logic
    // it also prevent css mutations
    const ul = document.querySelector("[data-js=todo-list]");
    const clickCatcher = document.querySelector("[data-js=sidebar-click-catcher");
    const openButton = document.querySelector("[data-js=open-sidebar]");
    const themeButton = document.querySelector("[data-js=theme-button]");
    const sidebar = document.querySelector("[data-js=sidebar]");
    const form = document.querySelector("[data-js=form]");
    const inputField = document.querySelector("[data-js=todo-field]");

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
            sidebar.classList.toggle("sidebar--open");
        });

    // Need a click catcher if user click outside of the nav
    // expected behavior
    clickCatcher &&
        clickCatcher.addEventListener("click", event => {
            event.preventDefault();
            sidebar.classList.toggle("sidebar--open");
        });

    themeButton &&
        themeButton.addEventListener("click", event => {
            event.preventDefault();

            // this is great
            // toggles this class to the body of the document,
            document.body.classList.toggle("body--themed");
        });

    
    // Thinking about debugging
    // If there is a broken element we need to catch it because it's a broken feature
    // 
    if (!ul) throw new Error("Could not find [data-js=todo-list]");
    if (!clickCatcher) throw new Error("Could not find [data-js=sidebar-click-catcher");
    if (!openButton) throw new Error("Could not find [data-js=open-sidebar]");
    if (!themeButton) throw new Error("Could not find [data-js=theme-button]");
    if (!sidebar) throw new Error("Could not find [data-js=sidebar]");
    if (!form) throw new Error("Could not find [data-js=form]");
    if (!inputField) throw new Error("Could not find [data-js=todo-field]");
})();
