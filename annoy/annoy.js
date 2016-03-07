var thereYet = false;

while (!thereYet) {
  var response = prompt("Are we there yet?");
  if (response === "yes" || response === "yeah" || response === "yep") {
    thereYet = true;
  }
}

alert("Yay, we finally made it!");
