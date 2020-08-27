"use strict"
//С начала суток прошло N секунд (N — целое). Найти количество полных минут, прошедших с начала суток.
//1440

const {getRandomIntInterval} = require("../utils")
const A = getRandomIntInterval(20, 2000)
console.log(A)

let min = A/60

console.log(min)
min = parseInt(String(min).split(".")[0])
console.log(min)
console.log(String(min).split(".")[0].length)