let person = {
    age: 45,
    sex: "male"
}

if ((person.sex === "male" && person.age >= 62)
    || (person.sex === "female" && person.age >= 56)) {
    console.log("Yes")
}
// else {
//     console.log("no");
// }