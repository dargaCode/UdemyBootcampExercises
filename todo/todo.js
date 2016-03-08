var todos = [];

var command;

function listTodos() {
  if (todos.length === 0) {
    console.log("There are no Todos to list!");
  }

  else {
    console.log("**********");
    todos.forEach(function(item, index) {
      console.log(index + " - " + item);
    });
    console.log("**********");
  }
}

function addTodo() {
  var newTodo = prompt("Enter your new todo:");
  todos.push(newTodo);
  console.log('Added item "' + newTodo + '"');
}

console.log("Started the Todo List app!");

while (command !== "quit") {
  command = prompt("What would you like to do?").trim();

  if (command === "add") {
    addTodo();
  }
  else if (command === "list") {
    listTodos();
  }

}

console.log("Quit the Todo List app!");
console.log("");
