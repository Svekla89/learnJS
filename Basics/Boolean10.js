"use strict";
//Даны два целых числа: A, B. Проверить истинность высказывания: «Ровно одно из чисел A и B нечетное».
const {getRandomIntInterval} = require("../utils"), 
const A = getRandomIntInterval(0,9)
const B = getRandomIntInterval(0,9)

if (A % 2 === 0) {
    console.log(A)
} else {
    console.log(B)
}
