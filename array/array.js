function printReverse(array) {
  for (var i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}

console.log("");
console.log("PRINT REVERSE")
console.log("printReverse([1,2,3,4])");
printReverse([1,2,3,4]);
console.log("printReverse(['a','b','c'])");
printReverse(["a","b","c"]);


function isUniform(array) {
  var firstValue = array[0];
  for (var i = 1; i < array.length; i++) {
    if (firstValue !== array[i]) {
      return false;
    }
  }
  return true;
}

console.log("");
console.log("IS UNIFORM")
console.log("isUniform([1,1,1,1]) returns " + isUniform([1,1,1,1]));
console.log("isUniform([2,1,1,1]) returns " + isUniform([2,1,1,1]));
console.log("isUniform(['a','b','p']) returns " + isUniform(["a","b","p"]));
console.log("isUniform(['b','b','b']) returns " + isUniform(["b","b","b"]));

function sumArray(numbers) {
  var total = 0;
  numbers.forEach(function(value) {
    total += value;
  });
  return total;
}

console.log("");
console.log("SUM ARRAY");
console.log("sumArray([1,2,3]) returns " + sumArray([1,2,3]));
console.log("sumArray([10,3,10,4]) returns " + sumArray([10,3,10,4]));
console.log("sumArray([-5,100]) returns " + sumArray([-5,100]));

function max(numbers) {
  var maxNum = numbers[0];
  for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNum) {
      maxNum = numbers[i];
    }
  }
  return maxNum;
}

console.log("");
console.log("MAX");
console.log("max([1,2,3]) returns " + max([1,2,3]));
console.log("max([10,3,10,4]) returns " + max([10,3,10,4]));
console.log("max([-5,100]) returns " + max([-5,100]));
