"use strict";
//addition
let addTwoNumbers = (a, b) => {
    return a + b;
};
console.log(addTwoNumbers(2, 4));
//rest parameter
let restParameter = (c, d, ...rest) => {
    return (c + d) + rest.reduce((acc, num) => acc + num, 0);
};
console.log(restParameter(2, 3, ...[1, 2, 3, 4, 5, 6, 7, 8, 9]));
//# sourceMappingURL=functions.js.map