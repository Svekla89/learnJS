"use strict"

//Даны два целых числа: A, B. Проверить истинность высказывания: «Каждое из чисел A и B нечетное».

const {getRandomIntInterval} = require("../utils")

const A = getRandomIntInterval(-1, 12)
const B = getRandomIntInterval(-1, 13)

if ((A % 2 != 0)&&(B % 2 != 0)){
    console.log(A,B,'все числа нечетные')
} else {
    console.log(A,B,'как минимум одно число нечетное')
}