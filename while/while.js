console.log("Print all integers from -10 to 19");

var count = -10;
while (count <= 19) {
  console.log(count);
  count++;
};

console.log("Print only even integers from 10 to 40");

count = 10;
while (count <= 40) {
  if (count % 2 === 0) {
    console.log(count);
  }
  count++;
};

console.log("Print only odd integers from 300 to 333");

count = 300;
while (count <= 333) {
  if (count % 2 !== 0) {
    console.log(count);
  }
  count++;
};

console.log("Print only integers from 5 to 50 which are divisible by both 3 and 5");

count = 5;
while (count <= 50) {
  if (count % 3 === 0 && count % 5 === 0) {
    console.log(count);
  }
  count++;
};
