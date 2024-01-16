//In JavaScript, the comma operator , allows you to evaluate multiple expressions, returning the value of the last expression.
let a = 1, b = 2, c = 3;
let result = (a++, b++, c++);
console.log(result);  // Output: 3
console.log(a, b, c); // Output: 2 3 4
