//Iteration 1: Names and Input

let hacker1 = "Roberto Martineli";
console.log("The driver's name is " + hacker1);

let hacker2 = "Javier Perez Gonzalez";
console.log("The navigator's is " + hacker2);

//Iteration 2: Conditionals

console.log("The lenght of the hacker1 name is " + hacker1.length);
console.log("The lenght of the hacker2 name is " + hacker2.length);

if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + "characters.")
}

else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
}

else {
    console.log("Wow, you both have equally long names, " + hacker1.length + "characters!")
}


//Iteration 3: Loops

//3.1 Print the characters of the driver's name, separated by space, and in capital letters.
let driversName = "Roberto Martineli";

for (let i = 0; i < driversName.length; i++) 
    {
        console.log(driversName[i].toUpperCase() + "")
}
 

//3.2 Print all the characters of the navigator's name in reverse order. 

let navigatorName = "Javier Perez Gonzalez";
for (let i = navigatorName.length - 1; i >= 0; i--) {
    console.log(navigatorName[i]);
}

//3.3 Depending on the lexicographic order of the strings, print: 

let comparison = driversName.localeCompare(navigatorName);

if(comparison <0){
console.log("The driver's name goes first.");
}
else if (comparison >0){
    console.log("Yo, the navigator goes first, definitely.");
}
else {
    console.log("What?! You both have the same name?");
}
