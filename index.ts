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

function sum(a: number, b: number){
    return a + b;
}

function concact(a: string , b: string){
    return a + b;
}

function isHappy(happy: boolean){
    if(happy){
        // console.log('Estou feliz!');
    } else {
        // console.log('Estou triste.')
    }
}

sum(24, 32);
concact("Oi, ", "tudo bem?");
// sum({ batata: "Batata Frita"}, "Ornitorrinco");

/* Union Type */
function chooseAFruit(fruit: "Banana" | "Maçã" | "Pera" | "Uva"){
    return "Sua fruta é:" + fruit;
}

/* Tipagem de Objetos (descreve um objeto */

interface iPet{
    name: string;
    type: "Cachorro" | "Gato" | "Ramnster" | "Coala" | "Papagaio";
}

interface IPerson{
    name: string;
    age: number;
    pet?: iPet;
}

let person: IPerson = {
    name: "Alex",
    age: 32,
    pet: {
        name: "Luz",
        type: "Cachorro",
    }
}

let person2: IPerson = {
    name: "Jose da Silva",
    age: 63,
}

function showPerson(person: IPerson){
    if(person){
        return "Seja feliz com Molejão" + person.name;
    } else {
        return false;
    }
}

showPerson(person);

function showPersonList(people: IPerson[]){
    return people.filter(person => person.age < 30);
}

showPersonList([person, person2]);

