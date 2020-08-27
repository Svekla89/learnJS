"use strict"

//Дано целое число N (> 0). Найти произведение ряда 1.1*1.2*1.3 ... * N .


const {getRandomIntInterval} = require('../utils')

const N = getRandomIntInterval(0, 9)
let K = 0


for(let i=1; i<=N; i++, K++) {
    console.log(((i/10)+1)*K)
    console.log(N)
}