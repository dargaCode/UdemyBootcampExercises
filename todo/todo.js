var todos = [];

var command;

while (command !== "quit") {
  command = prompt("What would you like to do?").trim();

  if (command === "add") {
    var newTodo = prompt("Enter your new task:");
    todos.push(newTodo);
    console.log('Added item "' + newTodo + '"');
  }
  else if (command === "list") {
    console.log(todos);
  }

}

console.log("Exited the todo app!");
