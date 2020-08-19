"use strict"

//Даны три целых числа, одно из которых отлично от двух других, равных между собой. 
//Определить порядковый номер числа, отличного от остальных.
const {getRandomIntInterval} = require("../utils")
const A0 = getRandomIntInterval(0,14), B1 = getRandomIntInterval(0,14), C2 = A0

if (A0==B1) {
    console.log("C2")
}
if (B1==C2) {
    console.log("A0")
}
if (C2==A0) {
    console.log("B1")
}