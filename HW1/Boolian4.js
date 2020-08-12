"use strict"

const { getRandomIntInterval } = require("../utils")

//Даны два целых числа: A, B. 
//Проверить истинность высказывания: «Справедливы неравенства A > 2 и B ≤ 3»

const a = getRandomIntInterval(0,5)
const b = getRandomIntInterval(0,5)
console.log(a,b)
console.log((a>2)||(b<3))

