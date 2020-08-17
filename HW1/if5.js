"use strict"

/*Даны три целых числа. Найти количество положительных и количество отрицательных чисел 
в исходном наборе. */

const {getRandomIntInterval} = require("../utils")
const A = getRandomIntInterval(-6,9)
const B = getRandomIntInterval(-6,9)
const C = getRandomIntInterval(-6,9)
let positive = 0
let negative = 0

if (A > 0) {
    positive = positive +1 
} else if (A<0) {
    negative = negative +1
}
if (B > 0) {
    positive = positive +1 
} else if (B<0) {
    negative = negative +1
}
if (C > 0) {
    positive = positive +1
} else if (C<0) {
    negative = negative +1
}
console.log(A,B,C)
console.log(positive, negative)
