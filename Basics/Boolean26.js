"use strict"

//Даны числа x, y.
//Проверить истинность высказывания: «Точка с координатами (x, y) лежит в четвертой координатной четверти».

const {getRandomIntInterval} = require("../utils")
const x = getRandomIntInterval(-18, 18)
const y = getRandomIntInterval(-18, 18) 

if ((x >= 0) && (y <= 0)) {
    console.log(x,y, "точка лежит в четвертой координатной плоскости")
} 
