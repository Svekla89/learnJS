"use strict"

//Дано целое число. Если оно является положительным, то прибавить к нему 1; 
//если отрицательным, то вычесть из него 2; если нулевым, то заменить его на 10. 
//Вывести полученное число.

const {getRandomIntInterval} = require("../utils")
let A = getRandomIntInterval(-3,3)
console.log(A)
if(A > 0) {
   A = A + 1
} else if(A < 0) {
    A = A - 2
} else {
    A = 10
}
console.log(A)

