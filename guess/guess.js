var magicNumber = 42;

var stringGuess = prompt("I'm thinking of a number! Can you guess it?");

var guess = Number(stringGuess);

if (guess === magicNumber) {
  alert("Wow, you got it right!");
}

else if (guess < magicNumber) {
  alert("Try guessing higher.");
}

else {
  alert("Try guessing lower.");
}
