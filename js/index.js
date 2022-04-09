console.log("I'm ready!");

// Iteration 1: Names and Input
    //1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = prompt("Driver's name?");


    //1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}.`)

    //1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = prompt("Navigator's name?");

    //1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker1.length}.`)

// Iteration 2: Conditionals  
    //aqui declaro dos variables con nombres más distintivos para recordar más fácil cuál es cuál, aunque sé que pude haber hecho hacker1.length directo
driverLength = hacker1.length
navigatorLength = hacker2.length

if (driverLength>navigatorLength){
    console.log(`The driver has the longest name, it has ${driverLength} characters.`);} 
else if (driverLength<navigatorLength){
    console.log(`It seems that the navigator has the longest name, it has ${navigatorLength} characters.`);}
    else if (driverLength === navigatorLength){
        console.log("Wow, you both have equally long names, XX characters!");
    }

// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N" 
const driverCapitals = hacker1.toUpperCase().split("").join(" ");
console.log (driverCapitals)

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
const navigatorReverse = hacker2.split("").reverse().join("");
console.log (navigatorReverse)

//3.3 Depending on the lexicographic order of the strings, print:
if(hacker1===hacker2){
    console.log ("What?! You both have the same name?")
} else if (hacker1>hacker2){
    console.log ("The driver's name goes first.")
} else {
    console.log ("Yo, the navigator goes first definitely.")
}
