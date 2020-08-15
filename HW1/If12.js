"use strict"

//Даны три числа. Найти наименьшее из них.

const {getRandomIntInterval} = require("../utils")
const A = getRandomIntInterval(0,9), B = getRandomIntInterval(0,9), C  = getRandomIntInterval(0,9)
console.log(A,B,C)
let min;


  if(A < B && A < C) {
    min = A
  } else if(B < C && B < A) {
    min = B
  } else {
     min = C
  }
  console.log(min)

