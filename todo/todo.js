var todos = [];

var command;

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
    console.log(todos);
  }

}

console.log("Quit the Todo List app!");
console.log("");
