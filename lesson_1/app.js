//
// alert("Hello");
//
// const userName = prompt("What is your name?");
//
// alert("Hello " + userName + "!");
// console.log("Hello " + userName + "!");
// document.write("Hello " + userName + "!");
//
// setTimeout(() => {
//     document.body.style.backgroundColor = "blue";
//     document.body.style.color = "yellow";
// }, 2500);
//
//
// document.body.style.fontSize = "5rem";

// Frontend, Backend, Mobile apps
// V8 JavaScript Engine

// переменные
// условия
// циклы
// структуры данных: массивы, объекты
// функции
// работа с интерфейсом

// Переменные: let, const, var
// Camel case

//Data types - типы данных
// 1. String - текстовый, строковый
// 2. Number - числовой
// 3. Boolean - логический
// 4. Null
// 5. Undefined
// 6. Object
// 7. BigInt
// 8. Symbol


let clientName = "Evgeniy";

// clientName = "Vadim";
// clientName = 5;


const clientSurname = 'Kiselev';
var clientFatherName = "Dmitrievich";

let clientFullName = clientSurname + " " + clientName + " " + clientFatherName;

console.log("Client full name is:" + clientFullName);

let clientMonthSalary = 2_500_000.89;
let clientId = 454871;

let isResident = true; // 1
let clientUsaResident = false; // 0

let clientBirthday = null;
let clientAccount; // undefined

// key-value
let clientPassport = {
    series: "ID",
    no: "123456",
    issueDate: "01-01-2015",
    isUnlimited: true,
    expireDate: null,
    authority: "GRS Bishkek",
    prolongationCount: 2
};

// let newPassportData = prompt("Enter series and number");
// // AN987654
//
// console.log("Before:" + clientPassport.series + clientPassport.no);
//
// clientPassport.series = newPassportData.slice(0,2);
// clientPassport.no = newPassportData.slice(2);

console.log("After:" + clientPassport.series + clientPassport.no);


let client = {
    name: "hurev",
    surname: "nuvinepr",
    birthDay: null,
    isResident: true,
    passport: {
        series: "",
        no: ""
    }
}

let experienceInYears = -8;
let grade;

if(experienceInYears > 1.5) {
    console.log("Your are welcome");
}else{
    console.warn("Sorry, try later...")
}

if(experienceInYears > 0 && experienceInYears <= 1){
    grade = "Junior"
}else if(experienceInYears > 1 && experienceInYears < 5){
    grade = "Middle";
}else if(experienceInYears > 5){
    grade = "senior"
}else {
    console.error("Invalid value");
}

console.log("You're " + grade + "-developer")

















