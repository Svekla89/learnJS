"use strict"

//Даны два целых числа: A, B. 
//Проверить истинность высказывания: «Каждое из чисел A и B нечетное».

const {getRandomIntInterval} = require("../utils")
const A = getRandomIntInterval(0,9), B = getRandomIntInterval(0,9)
console.log(A,B)
console.log((A % 2 === 0)|| (B % 2 === 0))
