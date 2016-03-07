console.log("Print all integers from -10 to 19");

for (var i = -10; i <= 19; i++) {
  console.log(i);
};

console.log("Print only even integers from 10 to 40");

for (var i = 10; i <= 40; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("Print only odd integers from 300 to 333");

for (let i = 300; i <= 333; i++) {
  if (i % 2 !==0) {
    console.log(i);
  }
}

console.log("Print only integers from 5 to 50 which are divisible by both 3 and 5");

for (let i = 5; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}
