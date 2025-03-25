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

let mycountryPopulation = 100000;
let avrragePopulation = 33000000;
 
if ( mycountryPopulation < avrragePopulation){
    console.log("my country has lesser population");

}else{
    console.log("my country has more population than arrave ");
}

let country = "portugal";
let continent = "Europe"
let population = 11;
let language = "portuguese";

let description = `portugal is in Europe and its 11 million people speaking portugal`;
console.log(description);

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
// let heightJohn = 1.95;

let massMark = 95;
let heightMark = 1.88;
let massJohn = 85;
let heightJohn = 1.76;

let BMIMark = massMark / heightMark ** 2;
let BMIJohn = massJohn / (heightJohn * heightJohn);
let markHigherBMI =BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);


// converting strings to number

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(String(23), 23);
