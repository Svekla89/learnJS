"use strict"

//x ≤ 0 и y ≥ 0;
// Даны числа x, y. 
//Проверить истинность высказывания: «Точка с координатами (x, y) лежит во второй координатной четверти».
const {getRandomIntInterval} = require("../utils")
const x = getRandomIntInterval(-18, 18)
const y = getRandomIntInterval(-18, 18) 

if ((x <= 0) && (y >= 0)) {
    console.log(x,y, "точка лежит во второй координатной плоскости")
} 