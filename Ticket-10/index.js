"use strict";
let person = {
  name: "Bro",
  age: 25,
  location: "Buea, Cameroon",
  sayHello: function () {
    return `Hi, I'm ${this.name} from ${this.location}.`;
  },
};

console.log(person.sayHello());
