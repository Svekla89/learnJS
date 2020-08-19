"use strict"

//Дано двузначное число. Вывести вначале его левую цифру (десятки), а затем — его правую цифру (единицы).
// Для нахождения десятков использовать операцию деления нацело, 
//для нахождения единиц — опeрацию взятия остатка от деления.

const {getRandomIntInterval} = require("../utils")
const A = getRandomIntInterval(11, 99)
console.log(A)

console.log(Math.floor(A/10))
console.log(A%10)


