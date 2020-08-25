"use strict"

//Дано расстояние L в сантиметрах. 
//Используя операцию деления нацело, найти количество полных метров в нем (1 метр = 100 см).

const {getRandomIntInterval} = require("../utils")

const L = getRandomIntInterval(50000, 90000)
console.log(L)
const B = L / 100

console.log(Math.floor(B)) 
