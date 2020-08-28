"use strict"
//Дано вещественное число — цена 1 кг конфет. Вывести стоимость 1, 2, ..., 10 кг конфет.

const {getRandomFloatInterval} = require("../utils")

const K = getRandomFloatInterval(1,10) //"цена за кг 1 конфет"

for(let i=1; i<=K; i++){
let K= 10*i
console.log(i,K)
}


