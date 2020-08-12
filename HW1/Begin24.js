"use strict";


//Даны переменные A, B, C. Изменить их значения, переместив содержимое "A" в "C", "C" в "B", "B" в "A", 
//и вывести новые значения переменных "A", "B", "C".
const {getRandomIntInterval} = require("../utils")

let a= getRandomIntInterval(1,9);
let b= getRandomIntInterval(1,9);
let c= getRandomIntInterval(1,9);
let tempA, tempB
console.log(a,b,c)
tempA = a //4
a=c; //9
tempB = b //5
b= tempA; //4
c= tempB; //9

console.log(a,b,c)
