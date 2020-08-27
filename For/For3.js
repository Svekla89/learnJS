"use strict"

//Даны два целых числа A и B (A < B). Вывести в порядке убывания все целые числа, расположенные между A и B (
    //не включая числа A и B), а также количество N этих чисел.


const {getRandomIntInterval} = require('../utils')
const A = getRandomIntInterval(0, 5)
const B = getRandomIntInterval(6, 9)
console.log(A,B) 
for(let i= B -1; i>A; i--) {
console.log(i)
console.log(B-A) 
}