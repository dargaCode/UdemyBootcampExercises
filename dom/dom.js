var selection;

// GET ELEMENT

console.log("");
console.log("GET ELEMENT");

console.log('1 - selection = document.getElementById("first");');
selection = document.getElementById("first");
console.log(selection);

console.log('2 - selection = document.getElementsByClassName("special")[0];');
selection = document.getElementsByClassName("special")[0];
console.log(selection);

console.log('3 - selection = document.getElementsByTagName("p")[0];');
selection = document.getElementsByTagName("p")[0];
console.log(selection);

// QUERY ID

console.log("");
console.log("QUERY ID");

console.log('4 - selection = document.querySelector("#first");');
selection = document.querySelector("#first");
console.log(selection);

console.log('5 - selection = document.querySelectorAll("#first")[0];');
selection = document.querySelectorAll("#first")[0];
console.log(selection);

// QUERY CLASS

console.log("");
console.log("QUERY CLASS");

console.log('6 - selection = document.querySelector(".special");');
selection = document.querySelector(".special");
console.log(selection);

console.log('7 - selection = document.querySelectorAll(".special")[0];');
selection = document.querySelectorAll(".special")[0];
console.log(selection);

// QUERY TAG

console.log("");
console.log("QUERY TAG");

console.log('8 - selection = document.querySelector("p");');
selection = document.querySelector("p");
console.log(selection);

console.log('9 - selection = document.querySelectorAll("p")[0];');
selection = document.querySelectorAll("p")[0];
console.log(selection);

//QUERY CHILD TAG

console.log("");
console.log("UERY CHILD TAG");

console.log('10 - selection = document.querySelector("body p");');
selection = document.querySelector("body p");
console.log(selection);

console.log('11 - selection = document.querySelectorAll("body p")[0];');
selection = document.querySelectorAll("body p")[0];
console.log(selection);

//QUERY IMMEDIATE CHILD TAG

console.log("");
console.log("UERY IMMEDIATE CHILD TAG");

console.log('12 - selection = document.querySelector("body > p");');
selection = document.querySelector("body > p");
console.log(selection);

console.log('13 - selection = document.querySelectorAll("body > p")[0];');
selection = document.querySelectorAll("body > p")[0];
console.log(selection);

//QUERY ADJACENT TAG

console.log("");
console.log("UERY ADJACENT TAG");

console.log('14 - selection = document.querySelector("h1 + p");');
selection = document.querySelector("h1 + p");
console.log(selection);

console.log('15 - selection = document.querySelectorAll("h1 + p")[0];');
selection = document.querySelectorAll("h1 + p")[0];
console.log(selection);

//QUERY PSEUDOSELECTORS

console.log("");
console.log("UERY PSEUDOSELECTORS");

console.log('16 - selection = document.querySelector("p:nth-child(2)");');
selection = document.querySelector("p:nth-child(2)");
console.log(selection);

console.log('18 - selection = document.querySelector("p:first-of-type");');
selection = document.querySelector("p:first-of-type");
console.log(selection);

console.log('17 - selection = document.querySelector("p:nth-of-type(1)");');
selection = document.querySelector("p:nth-of-type(1)");
console.log(selection);
