var cars = require('./cars');
// console.log(cars);

var moment = require('moment');
//Fecha actual
console.log(moment().format('DD/MM/YYYY'));
console.log(moment().add(10,'days').format('DD/MM/YYYY'));