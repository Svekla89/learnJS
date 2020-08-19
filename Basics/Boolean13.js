"use strict"

//Даны три целых числа: A, B, C. Проверить истинность высказывания: 
//«Хотя бы одно из чисел A, B, C положительное».

const {getRandomIntInterval} = require("../utils")
const A = getRandomIntInterval(-81, 12)
const B = getRandomIntInterval(-71, 13)
const C = getRandomIntInterval(-41, 12)

console.log(A,B,C)

console.log((A>0)||(B>0)||(C>0))

