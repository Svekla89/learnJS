"use strict"

const { getRandomIntInterval } = require("../utils")

/* Даны целые положительные числа A и B (A > B). 
На отрезке длины A размещено максимально возможное количество отрезков длины B (без наложений). 
Используя операцию деления нацело, найти количество отрезков B, 
размещенных на отрезке A. */

let A = getRandomIntInterval(2, 15) 
let B = getRandomIntInterval(6, 9)
console.log(A,B)

if (A > B) {
    console.log(Math.floor(A / B)) 
} else {
    console.log("B>A")
}

