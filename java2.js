"use strict";

//array or arrays

let students = [ 
    ['shaikha','shaikha@gmail.com', 90] , 
    ['hamda','hamda@gmail.com', 87] , 
    ['Mai', 'mai@gmail.com',77] , 
    ['Maryam','maryam@gmail.com',80]];

let student1 = {
    firstName :'Shaikha',
    lastName : 'Majid',
    email : 'shaikha@gmail.com',
    score: 90,
};

//Loop

let validPassword = '1234';
let password = '';
let trials = 0;

while(validPassword != password){
    password = prompt("Enter Password");
    trials++;
    if(trials == 3) break;
    console.log('you only have' + (3 - trials) + 'left');

    
}

if (validPassword == password) console.log("correct password");
else console.log("incorrect password");

//do {
//    password = prompt("Enter Password");

//} while(validPassword != password);

Count(students)
for(let i=0; i<students.length; i+=2) {
    console.log(students[i]);
}

console.log(students);