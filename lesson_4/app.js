console.log("Lesson 4");

// let a; // undefined
// let b= null;

// Array

// 80%
// for..of (Arrays)
// for

// 20%
// for..in (objects)
// while
// do..while

let geeksStudent = {
    name: null,
    surname: undefined,
    group: "F36-2",
    course: "frontend",
    phone: "+9968648948864",
}

// validation

let errors = [];

for(let key in geeksStudent){
    console.log(key + " -> " + geeksStudent[key]);
    let value = geeksStudent[key];
    if(!value){
        errors.push(key + " is required");
    }
}

// falsy (ложноподобные):  false, 0, "", null, undefined, NaN

console.log(errors);

// errors = [];

while(errors.length){
    let error = errors.shift();
    // let error = errors.pop();
    console.error(error);
}

let magicNumber = 7;
let userNumber;

// do{
//
//    userNumber = Number(prompt("Guess magic number 1 .. 10"));
//
// } while(userNumber !== magicNumber)


// Functions

// DRY

function sayHello(name){
    console.log("Hello," + name);
}

console.clear();
sayHello("Adam");
sayHello("Eva");
sayHello("Bob");

// function declaration
function getBonus(amount) {

    let bonus = Math.floor(amount / 100);

    if(amount >= 800 && amount <= 1999){
        return bonus;
    }else if(amount >= 2000 && amount <= 4999){
        return bonus * 2;
    }else if(amount >= 5000){
        return bonus * 3;
    }

    return 0;
}




let userBonus = getBonus(100);

// template string
console.log(`Вам начислено ${userBonus} баллов`);


let x1bonuses = getBonus(1500);
let x2bonuses = getBonus(3000);
let x3bonuses = getBonus(8000);


// function expression
let generateCarNumber = function (region){

    // 01 KG 489 ASD

    let regionNumber = Number(region)
    if(regionNumber < 1 || regionNumber > 7 || isNaN(regionNumber)){
        console.error("Invalid region");
        return;
    }

    let regionCode = region;
    let countryCode = "KG";
    let numberCode = getRandomNumber(0, 999).toString().padStart(3, "0");
    let textCode = getRandomString(3).toUpperCase();

    // MVD, UZB, KGZ, GAI,

    return regionCode + countryCode + numberCode + textCode;
}

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomString(length) {

    let result = "";

    while(result.length !== length){
        let randomNumber = getRandomNumber(97, 122);
        result += String.fromCharCode(randomNumber);
    }

    return result;
}

// 04 KG 001 YXO'











