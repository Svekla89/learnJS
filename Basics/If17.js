"use strict"

//Даны три переменные вещественного типа: A, B, C. 
//Если их значения упорядочены по возрастанию или убыванию, то удвоить их; 
//в противном случае заменить значение каждой переменной на противоположное. 
//Вывести новые значения переменных A, B, C.

const {getRandomFloatInterval} = require("../utils")
const A = getRandomFloatInterval(5, 18)
const B = getRandomFloatInterval(5, 18)
const C = getRandomFloatInterval(5, 18) 
console.log(A,B,C) 

if (((A<B)&&(B<C)) || ((A>B)&&(B>C))) {
    console.log(A * 2)
    console.log(B * 2)
    console.log(C * 2)
} else   {
    console.log(-A)
    console.log(-B)
    console.log(-C)
}  
