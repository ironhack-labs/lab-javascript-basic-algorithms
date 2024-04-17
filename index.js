//Interaction1: Names and Input

let hacker1= "Alma";
console.log("The driver's name is " + hacker1);

let hacker2= "Rosalia";
console.log("The navigator's name is " + hacker2);

// Interation2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log( "The driver has the longer name, it has" + hacker1.length + "characters")
}
else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " +hacker2.length + "characters")
}
else {
    console.log("Wow, you both have equally long name,"+ hacker1.length + "characters!")
}
// Interaction3: Loops

 //3.1 loop

console.log(hacker1.toUpperCase().split("").join(" "));

//3.2* alternative method 
let reversed = ""; 
console.log(hacker1.split("").reverse().join(""));

//3.2* loop 
for (let i = hacker2.length - 1; i >= 0; i--) {
    reversed = reversed + hacker2[i];
}

// 3.3* loop

/* Create a funcion for:
 if hacker1 > hacker2 alfabéticamente -> show1
 if hacker1 < hacker2 alfabéticamente -> show2
 if hacker1===hacker2 alfabéticamente -> show3 */

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2){
    console.log("Yo, the navigator goes first, defenitely");
} else {
    console.log("What?! You both have the same name?");
}
