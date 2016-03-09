function isEven(num) {
  if (num % 2 == 0) {
    return num + " is even"
  }
  else {
    return num + " is not even"
  }
};

function square(num) {
  return num + " squared is " + num * num;
}

Array.prototype.forEach = function(func) {
  for (var i = 0; i < this.length; i++) {
    console.log(func(this[i]));
  }
};

var arr = [12, 453, 68, 821, -6, 0, 527];

console.log("")
console.log("arr = " + arr);
console.log("arr.forEach(isEven):")
console.log("**********");
arr.forEach(isEven)
console.log("**********");



console.log("")
console.log("arr = " + arr);
console.log("arr.forEach(square):")
console.log("**********");
arr.forEach(square);
console.log("**********");
