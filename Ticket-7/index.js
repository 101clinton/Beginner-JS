"use strict";
function greet(name) {
  return `Hello, ${name}! Welcome!`;
}

console.log(greet("Bro"));

function greet(name, timeOfDay) {
  return `Good ${timeOfDay}, ${name}! Welcome!`;
}

console.log(greet("Bro", "morning"));
console.log(greet("Alice", "afternoon"));
