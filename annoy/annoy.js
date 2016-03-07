var thereYet = false;

while (!thereYet) {
  var response = prompt("Are we there yet?");
  var yesIndex = response.indexOf("yes");
  var yeahIndex = response.indexOf("yeah");
  var yepIndex = response.indexOf("yep");
  if (yesIndex >= 0 || yeahIndex >=0 || yepIndex >= 0) {
    thereYet = true;
  }
}

alert("Yay, we finally made it!");
