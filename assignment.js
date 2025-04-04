// let country = "ghana"
// let nation = "africa"
// population = "200000"
// console.log(country);
// console.log(nation);
// console.log(population);


// let isIsIand = false;
// let language = 

// console.log(typeof isIsIand);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// values comes in either OBJECT OR PREMITIVE


// */Set the value of language to the language spoken
//  where you live (some countries have multiple languages, 
// but just choose one).

// Think about which variables should be const variables 
// (which values will never change, and which might change?).
//  Then, change these variables to const.

// Try to change one of the changed variables now,
//  and observe what happens.

// language = 'english'
// const country = 'ghana'
// const continent = 'africa'
// const isIsIand = 'false'
// isIsIand = true;

// Exercise

//If your country split in half, 
// and each half would contain half the population, 
// then how many people would live in each half?

//Increase the population of your country by 1 and log the result to the console.

//Finland has a population of 6 million.
 //Does your country have more people than Finland?

//The average population of a country is 33 million people.
 //Does you country have less people than the average country?

// Based on the variables you created,
//  create a new variable description which 
//  contains a string with this format: 
//  'Portugal is in Europe, and its 11 million people speak portuguese'.


// let contryPopulation = 100000;
// let halfPopulation = 100000 / 2;
// console.log(halfPopulation);

// let contryPopulation =100000;
// contryPopulation++;
// console.log(contryPopulation);

// let finlandPopulation = 6000000;
// let mycountryPopulation = 100000;

// if(mycountryPopulation > finlandPopulation){

// console.log("my country is more ppopulated");
// }else{

// console.log("finland is more populated");
// }

// let mycountryPopulation = 100000;
// let avrragePopulation = 33000000;
 
// if ( mycountryPopulation < avrragePopulation){
//     console.log("my country has lesser population");

// }else{
//     console.log("my country has more population than arrave ");
// }

// let country = "portugal";
// let continent = "Europe"
// let population = 11;
// let language = "portuguese";

// let description = `portugal is in Europe and its 11 million people speaking portugal`;
// console.log(description);

// exercise
// Recreate the description variable from the last assignment, 
// this time using the template literal syntax.

// const country = "Portugal";
// const continent = "Europe";
// const population = 11;
// const language = "Portuguese";

// const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;

// console.log(description);

//example

// Mark and John are trying to compare their BMI (Body Mass Index),
//  which is calculated using the formula:
//   BMI = mass / (height * height) (mass in kg and height in meters).

// Your task is to write some code to help them:

// Store Mark's and John's mass and height in 
// variables called massMark, heightMark, massJohn and heightJohn.

// Calculate both their BMIs using the formula,
//  and store the results in two variables called 
//  BMIMark and BMIJohn.

// Log the value of BMIMark and BMIJohn to the console.

// BONUS: Create a boolean variable markHigherBMI 
// containing information about whether

// Mark has a higher BMI than John. Log it to the console too

// TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. 
// John weighs 92 kg and is 1.95 m tall.

// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. 
// John weights 85 kg and is 1.76 m tall.

// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// // let heightJohn = 1.95;

// let massMark = 95;
// let heightMark = 1.88;
// let massJohn = 85;
// let heightJohn = 1.76;

// let BMIMark = massMark / heightMark ** 2;
// let BMIJohn = massJohn / (heightJohn * heightJohn);
// let markHigherBMI =BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markHigherBMI);


// // converting strings to number

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);
// console.log(String(23), 23);

// // FALSY VALUES:
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100;
// if(money){
// console.log("dont spend it all");
// }else{
//     console.log('you should get a job');
// }
// EQUALITY OPERATORS
// 

// excersis

// here are two gymnastics teams: Dolphins and Koalas.
//  They compete against each other 3 times. 
//  The winner with the highest average score wins a trophy!

// Your tasks:

// 1. Calculate the average score for each team, 
// using the test data included below. 
// The average score for Dolphins should be assigned to the 
// scoreDolphins variable,
//  and the average score of Koalas should be assigned to 
// the scoreKoalas variable.

// 2. Compare the team's average scores to 
// determine the winner of the competition,
//  and print to the console:

// "Dolphins win the trophy" if Dolphins win, or

// "Koalas win the trophy" if Koalas win, or

// "Both win the trophy" if their average scores are equal.
// TEST DATA: Dolphins scored 96, 108, and 
// 89. Koalas scored 88, 91, and 110.

//solution
// const scoreDolphins = (96, + 108, +89);


// agbowuro toyin
// 6:07 AM
// 7.	What is JavaScript used for?
// 8.	How do you declare a variable in JavaScript?
// 9.	What is the difference between let, const, and var?
// 10.	How do you write a function in JavaScript?
// 11.	What is the difference between == and === in JavaScript?
// 12.	What is an array in JavaScript? How do you create one?
// 13.	How do you add and remove elements from an array?
// 14.	What is the difference between null and undefined?
// 15.	How do you check the data type of a variable in JavaScript?
// pkc-vzii-zzq

// let numbers = 23;



// const number = 23;

// var numbe = 23;

// numbers

// let student = "john"
// function (name){

// }

// console.log(5 === "5");
// let fruits = ["qpple", "mango", "cherry"];

// let username = "";
// let displayName = username || "Guest";
// console.log(username);

// function compare(x,y){
//     return x > y;
// }
// console.log(compare(10,5));



// Declare a variable numNeighbours
//  based on a prompt input like this:
// prompt('How many neighbour countries does your contry have?');
// const numNeighbours = prompt('how old are you?');
// console.log(numNeighbours);

// If there is only 1 neighbour, 
//  log to the console 'Only 1 border!' 
// (use loose equality == for now)

//Write a function using the ternary operator
//  that takes a temperature in Celsius and returns whether
//  it's "Cold" (below 15°C), "Warm" (15°C - 30°C),
// //  or "Hot" (above 30°C) using if else statement
// function chechecTemprature(temp){
// if (temp < 15) {
//     return "cold";
// }else if (temp >= 15 && temp <= 30){
//     return "warm";
// }else{
//     return "hot";
// }
// }
// console.log(chechecTemprature(10));
// console.log(chechecTemprature(28));
// console.log(chechecTemprature(35));






// const eplTeams = [
//   "Arsenal",
//   "Aston Villa",
//   "Bournemouth",
//   "Brentford",
//   "Brighton & Hove Albion",
//   "Burnley",
//   "Chelsea",
//   "Crystal Palace",
//   "Everton",
//   "Fulham",
//   "Liverpool",
//   "Luton Town",
//   "Manchester City",
//   "Manchester United",
//   "Newcastle United",
//   "Nottingham Forest",
//   "Sheffield United",
//   "Tottenham Hotspur",
//   "West Ham United",
// ];
// for (const list of eplTeams.entries()){
// console.log(`position ${list[0]+1} is ${list[1]}`);
// }




// 1. Write a for loop that prints numbers from 1 to 20.

// 2.Modify the for loop to print only even numbers from 2 to 10.

// 3.Write a for loop that iterates through an array ["apple", "banana", "cherry"] and logs each fruit.
// 1. Write a for loop that prints numbers from 1 to 20.

// 2.Modify the for loop to print only even numbers from 2 to 10.

// 3.Write a for loop that iterates through an array ["apple", "banana", "cherry"] and logs each fruit.

// const fruit =["apple", "banna", "cherry"];
// for (let x = 0;  x <fruit.length;x++ ){
// console.log(fruit[x]);
// }

// for (const eachFruit of fruit){
//     console.log(eachFruit);
// }

// const airline = 'TAP AIR portugal';
// const plane = 'A320'
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[3]);

// const airline = 'TAP Air Portugal';
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// let character = "interpolation";
// console.log(character[0]);
// console.log(character[8]);


//Determine if a number is positive ,negetive or zero
// function checkNumber (num){
//   if(num > 0){
//     console.log("the number is positive");
//   }else if (num < 0){
//     console.log("the number negative");
//   }else{
//     console.log("the number is zero");
//   }
// }
// console.log(checkNumber(0));

// let sentence = "I love JavaScript and coding";
// let limitedWords = sentence.split(" ", 5); 
// console.log(limitedWords);


// setTimeout(() => {
// console.log("this will repeat...")
// },1000);

//a funtion that capitalize the input 
// function  capInput(myName){
// const validName = myName.trim().toLowerCase();
// return validName[0].toUpperCase()+ validName.slice(1
// )+ validName[validName.length =1].toUpperCase();
// }
// console.log(capInput("temitope"));

// const number =[2,4, 6, 8, 10];
// const halfNum = number.map((z) =>{
//     return z*0.5;
// });
// console.log(halfNum);

// const number = [2 ,4 , 8, 10];
// const trippleNum = number.map((z) =>{
//     return z*3;
// });
// console.log(trippleNum);
// number.map(() => {

// });

// const number = [1, 2, 3, 4, 5];
// const oddNumber = number.filter((z)=>{
//     return z <4 && z %2 !== 0;
    
// })
// console.log(oddNumber);

//reverse an array
// const fruit = ["apple", "papaya", "mango"];
// fruit.reverse();
// console.log(fruit);

//2. reverse a string




// 1. Write a function that determines 
// whether a given number is positive or negative.
// 2. Write a function that 
// checks if a number is even or odd.
// 3. ⁠Write a function that transforms
//  a numerical grade to a letter grade
//  (e.g grade 10 should display “A”).
// 4. Write a function that calculates 
// the ticket price based on age with 
// the following conditions: age below 
// 12 pay a ticket price of 5, age below 
// 18 pay a ticket price of 10, age below 60 
// pay a ticket price of 20, age over 60 play a ticket price of
// Hover over a message to pin it
// keep
// 5. Write a function that calculates a 
// discount based on the purchase amount.Prices 
// equal or over 100 discount have a discount of 20.
//  Prices equal or over 50 have a discount of 10.
//   Otherwise discount is 0
// 6. Write a simple number guessing function.
// ...>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//1. Write a function that determines 
// whether a given number is positive or negative.
function originalNum(x) {
    if (x > 0) {
      console.log(`${x} is a positive number`);
    } else if (x < 0) {
      console.log(`${x} is a negative number`);
    } else {
      console.log(`${x} is just a number`);
    }
  }
  originalNum(0);
  originalNum(-1);
  originalNum(1);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//2. Write a function that 
// checks if a number is even or odd.
function checkNum(num){
if (num %2 ===0){
    console.log(`${num} is an even number`);
}else{
    console.log(`${num} is odd number`);
}
}
checkNum(-4);
checkNum(7);
checkNum(0);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Write a function that calculates 
// the ticket price based on age with 
// the following conditions: age below 
// 12 pay a ticket price of 5, age below 
// 18 pay a ticket price of 10, age below 60 
// pay a ticket price of 20, age over 60 play a ticket price of
// Hover over a message to pin it
// keep

function ticetPrice(age){
if (age < 12){
console.log(`Age ${age} pay a ticket price of 5 `);
}else if (age < 18){
console.log(`Age ${age} pay a ticket price of 10`);
}else if (age < 60){
    console.log(`Age ${age} pay a ticket price of 15`);
}else{
    console.log(`Age ${age} pays nothing`)
}
}
ticetPrice(8);
ticetPrice(15);
ticetPrice(100);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Write a function that calculates a 
// discount based on the purchase amount.Prices 
// equal or over 100 discount have a discount of 20.
//  Prices equal or over 50 have a discount of 10.
//   Otherwise discount is 0

function discountPrice (prices){
    if (prices >= 100){
        console.log(`prices ${prices} have a discount of 20`);
    }else if (prices >= 50){
        console.log(`prices ${prices} have a discount of 10`);
    }else{
        console.log(`discount is 0`)
    }
}
discountPrice(80);
discountPrice(150);
discountPrice(20);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Write a simple number guessing function. 
// Provide a secret number and a guess. 
// Based on those numbers
//  give players clues if their guess is higher, 
// lower or correct.


function checkingNum(guessNum, secretNum) {
    if (guessNum < secretNum) {
      console.log(`${guessNum} is lower than ${secretNum}`);
    } else if (guessNum > secretNum) {
      console.log(`${guessNum} is higher than ${secretNum}`);
    } else if (guessNum === secretNum) {
      console.log(`${guessNum} is equals to ${secretNum}`);
    } else {
      console.log("Guess is wrong");
    }
  }
  checkingNum(8, 1);
  checkingNum(-1, 1);
  checkingNum(1);
  checkingNum(3, 3);