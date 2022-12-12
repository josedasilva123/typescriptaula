"use strict";
/*
const number: number = 123;
const string: string = "String";
const boolean: boolean = true;
*/
let number = 123;
number = 24;
// let string = "String";
let otavioSilva = "String";
const number2 = 123;
function sum(a, b) {
    return a + b;
}
function concact(a, b) {
    return a + b;
}
function isHappy(happy) {
    if (happy) {
        // console.log('Estou feliz!');
    }
    else {
        // console.log('Estou triste.')
    }
}
sum(24, 32);
concact("Oi, ", "tudo bem?");
// sum({ batata: "Batata Frita"}, "Ornitorrinco");
/* Union Type */
function chooseAFruit(fruit) {
    return "Sua fruta é:" + fruit;
}
let person = {
    name: "Alex",
    age: 32,
    pet: {
        name: "Luz",
        type: "Cachorro",
    }
};
let person2 = {
    name: "Jose da Silva",
    age: 63,
};
function showPerson(person) {
    if (person) {
        return "Seja feliz com Molejão" + person.name;
    }
    else {
        return false;
    }
}
showPerson(person);
function showPersonList(people) {
    return people.filter(person => person.age < 30);
}
showPersonList([person, person2]);
