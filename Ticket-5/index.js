"use strict";
// Comparison Corner

const num1 = 10;
const num2 = 5;

console.log("Is " + num1 + " greater than " + num2 + "?", num1 > num2);
console.log("Is " + num1 + " less than " + num2 + "?", num1 < num2);
console.log("Is " + num1 + " strictly equal to " + num2 + "?", num1 === num2);
console.log(
  "Is " + num1 + " not strictly equal to " + num2 + "?",
  num1 !== num2
);

function DrivingAge() {
  const age = 18;
  if (10 >= age) {
    console.log("Is old enough to drive");
  } else {
    console.log("Is not old enough to drive");
  }
}

DrivingAge();
