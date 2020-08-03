"use strict";

//Дана масса "M" в килограммах. Используя операцию деления нацело, найти количество полных тонн в ней (1 тонна = 1000 кг).
const {getRandomIntInterval} = require("../utils")
const m = getRandomIntInterval(300, 9000)
console.log(m)
const t = Math.round(m/1000)
console.log(t)
