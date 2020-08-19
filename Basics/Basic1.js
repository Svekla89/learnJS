"use strict"
/*Дана сторона квадрата a. Найти его периметр P = 4·a */
const { getRandomIntInterval } = require("../utils")

const a = getRandomIntInterval(0,8)
console.log(a)
const P = a * 4
console.log(P)

