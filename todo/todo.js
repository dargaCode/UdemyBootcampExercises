var todos = [];

var command;

function listTodos() {
  if (todos.length === 0) {
    console.log("There are no items to list!");
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
  var newTodo = prompt("Name your new Todo List item:");
  todos.push(newTodo);
  console.log('Added item "' + newTodo + '"');
}

function removeTodo() {
  if (todos.length === 0) {
    console.log("There are no items to remove!");
  }

  else {
    var removeIndex = prompt("What number item would you like to remove?");

    if (removeIndex < 0 || removeIndex > todos.length-1 || isNaN(Number(removeIndex))) {
      console.log("There is no item with that number.");
    }

    else {
      var remodedTodo = todos.splice(removeIndex, 1);
      console.log('Removed item "' + remodedTodo + '"');
    }
  }
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
  else if (command === "remove") {
    removeTodo();
  }

}

console.log("Quit the Todo List app!");
console.log("");
