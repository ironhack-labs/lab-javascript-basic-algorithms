// Names and Input
console.log("I'm Ready!");
var hacker1="Yulia"
console.log("The driver's name is " + hacker1);
var hacker2;
var hacker2 = prompt("The navigator's name is")
console.log("The navigator's name is " + hacker2)

if (hacker1.length>hacker2.length){
console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
}
else if (hacker2.length>hacker1.length){
console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
}
else if (hacker1.length==hacker2.length){
console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}


console.log(hacker1.toUpperCase().split("").reverse().join(" "));
//option1:
// let a = hacker1.localeCompare(hacker2)
// console.log(a)
// let b = hacker2.localeCompare(hacker1)
// console.log(b)
// let c = hacker1.localeCompare(hacker2)
// console.log(c)
// if (hacker1.localeCompare(hacker2)>0)
//  console.log("The driver's name goes first")
//  else if (hacker1.localeCompare(hacker2)<0)
//  console.log("Yo, the navigator goes first definitely");
//  else 
//  console.log ("What?! You both got the same name?");

//option2
for (i=0; i <=hacker1.length; i++){

var upper1 = hacker1.toUpperCase()
var upper2 = hacker2.toUpperCase()


if (upper1.charCodeAt(i) < upper2.charCodeAt(i)){
console.log ("The driver's name goes first")
break;
}
else if (upper1.charCodeAt(i) > upper2.charCodeAt(i)){
console.log ("Yo, the navigator goes first definitely")
break;
}
else if (hacker1 == hacker2){
console.log ("What?! You both got the same name?")
break;

} else 
console.log("almost equal")
break
}
var input;
var input = prompt("Write a palidrome sentence");
var palindrome = input.split("").reverse().join("");
if (input == palindrome) {
console.log("yes, this is a palindrome");
}
else ("no, this is not a palindrome");




//Conditionals


// Lorem ipsum generator
