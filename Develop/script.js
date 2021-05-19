// Current day using moment.js
var currentDay = moment().format("ll");

// j query 
$ ("#currentDay").text (currentDay);

// setting timeblock to the daily schedule using moment.js
var hour7 = moment().hour(7);
var hour8 = moment().hour(8);
var hour9 = moment().hour(9);
var hour10 = moment().hour(10);
var hour11 = moment().hour(11);
var hour12 = moment().hour(12);
var hour13 = moment().hour(13);
var hour14 = moment().hour(14);
var hour15 = moment().hour(15);
var hour16 = moment().hour(16);

// create an array for the hours blocks for the code
var hours = [hour7, hour8, hour9, hour10, hour11, hour12, hour13, hour14, hour15];

// storage data
var event7 = JSON.parse(localStorage.getItem('hour'));
var event8 = JSON.parse(localStorage.getItem('hour'));
var event9 = JSON.parse(localStorage.getItem('hour'));
var event10 = JSON.parse(localStorage.getItem('hour'));
var event11 = JSON.parse(localStorage.getItem('hour'));
var event12 = JSON.parse(localStorage.getItem('hour'));
var event13 = JSON.parse(localStorage.getItem('hour'));
var event14 = JSON.parse(localStorage.getItem('hour'));
var event15 = JSON.parse(localStorage.getItem('hour'));

// 