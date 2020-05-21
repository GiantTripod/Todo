    var form = document.querySelector("form");
    var todoList = document.querySelector("ul");
    var button = document.querySelector("button");
    var input = document.getElementById("user-todo");

    var todosArray = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];

    localStorage.setItem("todos", JSON.stringify(todosArray));

    var storage = JSON.parse(localStorage.getItem("todos"));

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      todosArray.push(input.value);
      localStorage.setItem("todos", JSON.stringify(todosArray));
      todoItem(input.value);
      input.value = "";
    });

    var todoItem = function (text) {
      var todo = document.createElement("li");
      var button2 = document.createElement("button");
      todo.textContent = text;
      todo.appendChild(button2);
      button2.innerHTML = "done";
      todoList.appendChild(todo);
    };

    for (var i = 0; i < storage.length; i++) {
      todoItem(storage[i]);
    }

    button.addEventListener("click", function () {
      localStorage.clear();
      while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
      }
    });