"use strict";
//Даны катеты прямоугольного треугольника a и b. Найти его гипотенузу "C" и периметр "P": "C=a+b", "P=a+b+С".//
const {getRandomIntInterval} = require('../utils')

const a = getRandomIntInterval(0, 10)
const b = getRandomIntInterval(0, 10)
const c = a+b;
console.log(c)




