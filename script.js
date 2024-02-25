function addOrUpdateTodo() {
    var inputBox = document.getElementById("todo-input");
    var todoList = document.getElementById("todo-list");

    if (inputBox.value !== "") {
        var listItem = document.createElement("li");
        listItem.className = "todo-item";
        listItem.innerHTML = `
            <span>${inputBox.value}</span>
            <button onclick="removeTodo(this)">Remove</button>
        `;
        todoList.appendChild(listItem);

        inputBox.value = "";
    }
}

function removeTodo(button) {
    var todoItem = button.parentElement;
    todoItem.parentElement.removeChild(todoItem);
}

function populateInput(event) {
    if (event.target.tagName === "SPAN") {
        var inputBox = document.getElementById("todo-input");
        inputBox.value = event.target.innerText;
    }
}