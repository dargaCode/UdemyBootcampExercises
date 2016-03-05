var yearsOld = prompt("Not so fast, what's your age?");

if (yearsOld < 1) {
  alert("That's not a real age!");
}

else if (yearsOld < 12) {
  alert("That's not even good parenting right there.");
}

else if (yearsOld < 18) {
  alert("Sorry, minors aren't allowed.");
}

else if (yearsOld < 21) {
  alert("Don't bother trying to wash off this X.");
}

else if (yearsOld == 21) {
  alert("Happy birthday! Here's a drink token.");
}

else if ((Math.sqrt(yearsOld) % 1) === 0) {
  alert("A real square, huh?");
}

else if (yearsOld % 2 === 1) {
  alert("I thought you seemed odd.");
}

else {
  alert("Two drink minimum tonight.");
}
