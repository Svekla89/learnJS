"use strict"

//Даны три целых числа: A, B, C. Проверить истинность высказывания:: 
//«Каждое из чисел A, B, C положительное».

const {getRandomIntInterval} = require("../utils")
const A = getRandomIntInterval(-1, 12)
const B = getRandomIntInterval(-1, 13)
const C = getRandomIntInterval(-1, 12)

if ((A>0)&&(B>0)&&(C>0)) {
    console.log(A,B,C)
} else {
    console.log("одно из чисел отрицательное")
}