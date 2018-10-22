// aware of global scope problems, fixed it with a closure
// everything that you declare at the root level is going to
// live in the global scope, thus isolating the code here to
// prevent collision of variables
(() => {
    const ul = document.querySelector("#list");
    const form = document.querySelector("#form");
    const inputField = document.querySelector("#todo-field");

    // using async/await can be a good thing or a bad thing
    // es6 for the future, es5 for backwards compatability
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
})();
