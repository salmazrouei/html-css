'use strict';

//short circuiting && || ?? ?

let x = name || 0 || 'guest';
console.log(x);

//const calculateTax = function(val,tax) {
//    tax = tax || 0.14;
//    return val * tax;
//};

//console.log(calculateTax(1000));
//console.log(calculateTax(1000,0.2));

let address = null ;//{floorNo:12,aptNo:'4'}
//let floorNo = address && address.floorNo;

let floorNo = address ?.floorNo;  // ?/?? works on null or undefiened (nullish coalecing operator)
console.log(floorNo);

function calculateTaxEgypt(val){
    return val *0.14;
}

function calculateTaxKSA(val){
    return val *0.15;
}



function calculateTotalValue(val, calculateTax){
    let shipping = val*0.1;
    let tax = calculateTax(val);
    let subTotal = shipping + val + tax;
    let total = subTotal * 1.05;
    return total;
}

console.log(calculateTotalValue(1000,calculateTaxEgypt));
console.log(calculateTotalValue(1000,calculateTaxKSA));


//array functions

// for (let s of studentArray){
//    console.log('Name', Score:${s[2]}+${s[3]},${s[4]})
//}
//studentArray.forEach(display);

//ForEach
studentArray.forEach((s) =>{
    console.log('name:' ${s[1]}, score:)
})

//filter
let arr =studentArray.filter((s) => s[4] == 5);
console.log(student);

//find
let student = studentArray.find((s) => s[4] ==5);
console.log(student);

//FindIndex
let studentIndex =studentArray.findImdex((s) => s[4] == 5);
console.log(studentIndex);

//map
let studentObjects = studentArray.map ((s) => {
    return{
        name:s[1],
        score: s[4],
    };
});
console.log(studentObjects);

//reduce
let total = 0;
for (let s of studentObjects){
    total += s.score;
}
console.log(total);

let score =  studentObjects.map((s) => s.score);
console.log(score);
total = score.reduce((t,s) => (t +=s));
console.log(total);

let n = [1,2,3,4];
let sum = n.reduce((a,v) => (a +=v));
let mult = n.reduce((a,v) => (a *= v), 1);

let smallest = n.reduce((a,v) => (a = v > a ? a : v ), n[0]);
let largest = n.reduce((a,v) => (a = v < a ? a : v) , n[0]);

console.log(sum);
console.log(mult);
console.log(smallest);
console.log(largest);



let temp = n[0];
for (let v of n){
    if(v < temp){
        temp = v;
    }
}


//some
let hasSome = studentArray.some ((s) => s[4] = 5);
console.log(hasSome);

//every
let hasEvery = studentArray.every((s) => s[4] =5);
console.log(hasEvery)

//sets and maps
let emails = studentArray.map(s=>s[2] .trim().toLowercase());
let uniqueEmails =[];
emails.forEach((e) => {
    if (!uniqueEmails.includes(e)) uniqueEmails.push(e);
});
console.log(uniqueEmails);

let emailSets = new Set();
emails.forEach((e) => {
    emailSets.add(e);
   
});
console.log(emailSets);

let studentScores = new Map();
studentArray.forEach((s) =>{
    const email = s[2].trim().toLowercase();
    if (!studentScores.has(email)) studentScores.set(email,0);
    studentScores.set(email, studentScores.get(email)+s[4]);
});

console.log(studentScores);
console.log(isNaN(Number('3.5')));
console.log(0.1 + 0.2 == 0.3);