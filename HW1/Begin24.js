"use strict";
const {getRandomIntInterval} = require("../utils")

//Даны переменные A, B, C. Изменить их значения, переместив содержимое "A" в "C", "C" в "B", "B" в "A", 
//и вывести новые значения переменных "A", "B", "C".


let a="4";
let b="5";
let c="9";

a=c;
b=a;
c=b;

console.log (a)
console.log (b)
console.log (c)