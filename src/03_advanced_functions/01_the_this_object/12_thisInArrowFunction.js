/*
Understanding 'this' in Arrow Functions:
Create a function called exploreThisInArrowFunction that accepts two functions: 
- one arrow function
- one regular function

Inside exploreThisInArrowFunction, declare an object with a name property. 
Assign both functions as methods to the object and invoke them. 
Return an array containing the this.name values accessed by each function.

Requirements:
- both the arrow function and the regular function should return this.name
- create an object within exploreThisInArrowFunction that has a name property
- assign both functions as methods to this object
- invoke both methods and collect their results
- return an array of the two results
*/

const arrow = () => this?.name;
function regular() {
  return this?.name;
}

function exploreThisInArrowFunction(arrowFunc, regularFunc) {
  const person = {
    name: "John Smith",
    arrowFunc: arrowFunc,
    regularFunc: regularFunc,
  };
  return [person.arrowFunc(), person.regularFunc()];
}

exploreThisInArrowFunction(arrow, regular);

module.exports = exploreThisInArrowFunction;
