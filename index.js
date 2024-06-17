// Iteration 1: Names and Input
let hacker1="jhon";
console.log("The driver´s name is "+hacker1);
let hacker2="YYYY";
console.log("The navigator´s name is "+hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has "+hacker1.length+" characters");
} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has "+hacker2.length+" characters");
} else { console.log("Wow, you both have equally long names, "+hacker1.length+" characters");}

// Iteration 3.1: Loops
let mayusHacker= hacker1.toUpperCase();
console.log(mayusHacker);
let mayusHackerSpace="";
for (let i= 0; i < mayusHacker.length; i++) {
    // console.log(mayusHacker.charAt(i));
    mayusHackerSpace=mayusHackerSpace + mayusHacker.charAt(i)+" ";
}
console.log(mayusHackerSpace);
let reverseHacker= "";
for (let i= hacker1.length-1; i >= 0; i--) {
    reverseHacker= reverseHacker + hacker1.charAt(i);
}
console.log(reverseHacker);
// Itineration 3.2: localeCompare
let orden= hacker1.localeCompare(hacker2);
if (orden= -1) {
    console.log("The driver´s "+hacker1+" goes first");
}else if (orden = 1) {
    console.log("Yo, the "+hacker2+" goes first, definitely");
}else {
    console.log("What?! You both have the same name");
}
console.log(hacker1.localeCompare(hacker2), orden, typeof(orden));