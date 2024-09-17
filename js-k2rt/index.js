// Statement
console.log('Hello World');
// Variables
let name = '1';
//console.log(name);
// Name cannot be a reserved keyword
// Name should be meaningful
// Name cannot start with a number
// Cannot contain a space or hyphen (-), can contain _
// Names are case-sensitive

let firstName = 'Mosh';
let lastName = 'Hamedani';

const interestRate = 0.3;
// interestRate = 1;
console.log(interestRate);
// Kasuta const defaultina, kasuta let, siis kui tead, et selle väärtus võib muutuda

let nimi ='John'; // String Literal, ülakomad on ainult stringidel, string on nagu nimisõna
let age = 30; // Number Literal
let isApproved = true; // Boolean Literal, boolean on nagu tegusõna, väärtus on true või false
let firstName2 = undefined; // Undefined on kui väärtus pole ära määratud (kas on string või number või mis?)
let selectedColor = null; // Null on pmst tühi

let vanus = 12;

let person = {
    name1: 'Mosh',
    age: 30
}

// Dot Notation
person.name = 'John';

// Bracket Notation
person ['name'] = 'Mary';
// console.log(person.name);

let selectedColors = ['red','blue'];
selectedColors [2] = 'green';
console.log(selectedColors[0]);

// Funktsioonid (tegevused)
// Performing a task
function greet(name, lastName) { //parameeter
console.log('Hello ' + name + '' + lastName);
}

greet('John ', 'Smith'); //argument ehk väärtus
greet('Mary ', 'Doe');

// Calculating a value
function square(number) {
 return number * number;
}
console.log(square(2));

// If/Else ehk tingimused
// Conditional statements

// if statement
let age2 = 20;

if(age2 > 18){
    console.log("You are an adult.");
} //Vanus on 20. Kui vanus on suurem kui 18, siis näitab teksti: You are an adult.

let country = "India";
let age5 = 20;
if(age >= 18 && country == "India"){
    console.log("You can get a driver's license.");
}

//If else

let age3 = 16;

if(age3 > 18){
    console.log("You are an adult.");
}
else if(age >= 16){
    console.log("You are a teenager.")
}
else{
    console.log("You are a minor.");
}

//Kui else if'e on rohkem kui 3, siis kasuta switchi

//Switch

let value = 42;

switch (typeof value) {
    case "number":
        console.log("Number")
    break;
case "string":
        console.log("string")
        break;
case "boolean":
        console.log("boolean")
        break;
   default:
        console.log("Other")
        break;
}

let dayName = 3;

switch (dayName) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    
        default:
            dayName = "Invalid day number"
            break;
}
console.log("The day is: " + dayName);

// Ternary operator

let age6 = 20;
if (age6 >= 18)
{
    console.log("You are an adult.");
}
else {
    console.log("You are a minor.");
}

// condition ? value_if_true : value_if_false

let age7 = 20;
let msg = (age7 >= 18) ? "You are an adult." : "You are a minor.";
console.log(msg);
// See on lühendatud versioon (parem)

// For loop

for (let i = 0; i < 10; i++){ //Alguses väärtus, siis tingimus, senikaua kui i on väiksem kui 10, siis ta teeb tegevust
    console.log(i);

}

let coding = ["JavaScript", "Python", "CPP"] // Massiiv, kus on 3 stringi sees

for(let i = 0; i < coding.length; i++){ //Käsklus: Alusta lugemist nullist, tee seda nii kaua kui pikk on see massiiv, suurenda seda arvu ühe võrra
    console.log(coding[i]);
}


for(let i = 1; i < 5; i++) { 
    console.log(i);

    for(let j = 1; j<= 3; j++){
        console.log("Inner loop " + j);
    }
}

// While loop

// while(condition){
    // code to be repeated
//}

let i = 0;

while(i<=10){
    console.log(i);
    i++;
}

// do...while loop – selle variandi puhul ta teeb tegevust vähemalt ühe korra enne väärtuse checkimist

//do{
    // code to be repeated
//}while(condition);

let k = 10;

do{
    console.log(k)
    k++;
}while(k<=5);


//break / continue

for(let i = 1; i <= 5; i++){

    if(i == 3){
        continue;
    }
    console.log(i);
}

// Array map

// function multiply(num1, num2) {
//    const result = num1 * num2
 //   return result
//}

const multiply = (num1, num2) => {
    const result = num1 * num2
    return result
}

const array1 = [1, 4, 9, 16];

const map1 = array1.map((x) => x * 2);

console.log(map1);

const myArray = ["Mulle", "meeldivad", "šokolaadiga", "maasikad."];
const madeAString = myArray.join(" ");
console.log(madeAString);

const fruits = [];
fruits.push("banaan", "õun", "virsik");
console.log(fruits.length); // 3

function kontrolliPaarisVõiPaaritu(arv) {
    return (arv % 2 === 0) ? "Arv on paaris." : "Arv on paaritu.";
}
console.log(kontrolliPaarisVõiPaaritu(5));

// Ülesanne 1
const küljepikkus = 9;
const pindala = küljepikkus * küljepikkus;
console.log("Ruudu pindala on: ", pindala);

// Ülesanne 2
const eesnimi = "Sandra";
const sünniaasta = 1995;
const thisYear = new Date().getFullYear();
const vanus2 = thisYear - sünniaasta;
console.log("Tere, "+ eesnimi + "! Sa oled " + vanus2 + "-aastane.");

// Array ülesanne
let snäkid = ["krõpsud", "küpsised","šokolaad","kummikommid","juustupulgad"];
console.log(snäkid);

snäkid[5] = "kananagitsad"
console.log(snäkid);

snäkid[0] = "pähklid"
console.log(snäkid);

console.log(snäkid.length);

console.log(snäkid.sort());

// Tsüklite ülesanne 1
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

let sum = 0;
for (let i = 1; i <= 10; i++) {
    if ( i % 2 === 0 ){
        sum += i;
    }
}
console.log("Paarisarvude summa on: " + sum);