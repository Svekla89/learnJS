"use strict";

//Даны два числа a и b. Найти их среднее арифметическое: "(a + b)/2

const {getRandomIntInterval} = require('../utils')

const a = getRandomIntInterval(0, 10)
const b = getRandomIntInterval(0, 10)

console.log(a, b)
//Начало программы

const average = (a + b)/2

//Конец программы
console.log(average)
//Сделано
