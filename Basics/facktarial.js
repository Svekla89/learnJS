"use strict"

const { getRandomIntInterval } = require("../utils")

//Дано целое число N (> 0). Найти "N! = 1·2·...·N" (N–факториал).

const N = getRandomIntInterval(1,10)
console.log(N)
let temp = 1

for (let i = 1; i <= N; i=i+1) {
    temp = temp * i  
    console.log(i,N,temp)
}

