"use strict";
//Дано целое число A. Проверить истинность высказывания: «Число A является четным».
const {getRandomIntInterval} = require("../utils"), X= getRandomIntInterval(0,8)

if (X % 2 === 0){
    console.log(X, 'X is even')
} else {
    console.log(X, 'X is odd')
}

console.log('//Дано целое число A. Проверить истинность высказывания: «Число A является четным»'.indexOf('.') )

