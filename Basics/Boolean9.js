"use strict"

//Даны два целых числа: A, B. Проверить истинность высказывания: «Хотя бы одно из чисел A и B нечетное». 


const {getRandomIntInterval} = require("../utils")
const A = getRandomIntInterval(-1, 2)
const B = getRandomIntInterval(-1, 2)

if ((A>0)||(B>0)) {
    console.log(A,B)
} else {
    console.log('оба числа либо четные или нечетные')
}

// EO
