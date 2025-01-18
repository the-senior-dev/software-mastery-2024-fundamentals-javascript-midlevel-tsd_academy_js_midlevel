/* Higher-Order Functions
- Create a higher-order function named timeExecution 
- It takes a function as an argument and returns a new function. 
- When the new function is called
    - It should measure the time taken for the argument function to execute 
    - Return that time along with the result of the function.

Requirements:
- the function timeExecution should accept a function fn as its parameter.
- the returned function should accept any number of arguments.
- the returned function should measure the time before and after the function fn executes.
- the returned function should return an object containing two properties: { result: 7, time: 0.1234 }

Example:
const add = (a, b) => a + b;
const timedAdd = timeExecution(add);
const output = timedAdd(3, 4);
console.log(output); // Output should be something like { result: 7, time: 0.1234 }
*/

function timeExecution(fn) {
  return function measure(...args) {
    let startTime = performance.now(); // record the start time
    let fnResult = fn(...args); // call the passed in function
    let endTime = performance.now(); // set the end time
    let timeTaken = endTime - startTime;

    return { result: fnResult, time: timeTaken };
  };
}

module.exports = timeExecution;
