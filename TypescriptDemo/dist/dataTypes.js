"use strict";
//string
let myNames = "Yvonne IZERIMANA";
let newMyNames = myNames.toLocaleUpperCase();
console.log(newMyNames);
//number
let age;
age = 25;
console.log(age);
let dob = "25";
let result = parseInt(dob);
console.log(result);
//array
let empList;
empList = ["ange", "nelly", "netty", "agabe"];
console.log(empList);
let reverse = empList.reverse();
console.log(reverse);
let numList;
numList = [1, 2, 3, 4, 5, 6, 6];
let filterNumber = numList.filter((num) => num > 3);
console.log(filterNumber);
let findNumber = numList.find((num1) => num1 === 2);
console.log(findNumber);
let addArray = numList.reduce((a, b) => a + b, 0);
console.log(addArray);
//enum
var color;
(function (color) {
    color[color["red"] = 1] = "red";
    color[color["blue"] = 2] = "blue";
    color[color["green"] = 3] = "green";
    color[color["yellow"] = 4] = "yellow";
})(color || (color = {}));
let getEnum = color.green;
console.log(getEnum);
//tuples
let swappNumbers;
let swapp = (num1, num2, num3) => {
    return [num1, num2, num3];
};
console.log(swapp(23, 34, 56));
//any
let department;
department = "IT";
department = 45;
department = true;
console.log(department);
//# sourceMappingURL=dataTypes.js.map