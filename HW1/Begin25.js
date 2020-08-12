"use strict";
//Найти значение функции "y=3x−6x−7" при данном значении "x".
const {getRandomIntInterval} = require("../utils")
const x = getRandomIntInterval(1, 78)
const y= Math.round(3*x−6*x−7)
console.log(x, y)


