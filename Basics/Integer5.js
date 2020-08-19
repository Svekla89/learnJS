"use strict";

//Даны целые положительные числа A и B (A > B). 
//На отрезке длины A размещено максимально возможное количество отрезков длины B (без наложений). 
//Используя операцию взятия остатка от деления нацело, найти длину незанятой части отрезка A.
const {getRandomIntInterval} = require("../utils")
const A = getRandomIntInterval(2, 18)
const B = getRandomIntInterval(2, 9) 
console.log(A,B)

if (A>B){
    console.log(A%B)
} else {
    console.log("B>A")
}
