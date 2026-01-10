/*

+   Plus
-   Minus
*   Impact
/   Divide
%   Remainder
**  Power of

*/


// MATHEMATICAL EXPRESSIONS
console.log("6 + 12 = ", 6 + 12);
console.log("12 - 7 = ", 12 - 7);
console.log("8 * 3  = ", 8 * 3);
console.log("3 ** 3 = ", 3 ** 3);
console.log("81 / 9 = ", 81 / 9);
console.log("89 % 9 = ", 89 % 9);



// LOGICAL EXPRESSIONS
let numberValue = 25;
numberValue = numberValue+1;
numberValue += 1;
numberValue++;
console.log(numberValue);

let remainderNumber = 37;
remainderNumber%=3;
console.log(remainderNumber);

let powerOfNumber = 3;
powerOfNumber**=3;
console.log(powerOfNumber);



// MATH METHODS
console.log(Math);

/* Print PI */
console.log(Math.PI);

/* To round to a whole number */
console.log(Math.round(5.3));
console.log(Math.round(5.8));

/* To round to the lower integer */
console.log(Math.floor(5.8));

/* To round to the upper integer */
console.log(Math.ceil(5.8));

/* To delete the decimal of a number */
console.log(Math.trunc(5.8));

/* Create a random number */
console.log(Math.random());
console.log(Math.random()*10);