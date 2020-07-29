"use strict";

// Даны катеты прямоугольного треугольника a и b. Найти его гипотенузу "C" и периметр "P": "C=a+b", "P=a+b+С".
const {getRandomIntInterval} = require("../utils")
const a = getRandomIntInterval(2, 5) 
const b = getRandomIntInterval(6, 9)

console.log(a,b);
const c = a+b
console.log (c)

const p = a+b+c
console.log (p)
