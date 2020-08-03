"use strict";
//Дан размер файла в байтах. Используя операцию деления нацело, 
//найти количество полных килобайтов, которые занимает данный файл (1 килобайт = 1024 байта).
const {getRandomIntInterval} = require("../utils")
const b = getRandomIntInterval(3000, 9000)
console.log(b)
const k = Math.round(b/1024)
console.log(k)
