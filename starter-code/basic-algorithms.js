// Names and Input
let hacker1 = "Henry";
console.log("The driver's name is " + hacker1);

let hacker2 = window.prompt("What is navigator name?", "Write Navigator Name Here");
console.log("The navigator name is " + hacker2);

//Conditionals
if(hacker1.length > hacker2.length){
    console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
}else if(hacker1.length < hacker2.length){
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
}else {
    console.log("wow, you both got equally long names, " + hacker1.length + " characters!!")
}

//Prints hacker1 name uppercase with spaces

let upperCaseHacker1 = hacker1.toUpperCase();
console.log(upperCaseHacker1);
let hacker1Chars = upperCaseHacker1.split('');
console.log("Driver's name is: " + hacker1Chars.join(" "));

//Prints hacker1 name in reverse order
let splitHacker1 = hacker1.split('');
let reversedHacker1 = splitHacker1.reverse();
console.log("Driver's name in reverse order: " + reversedHacker1.join(''));

//Alphabetical order
compareStrings(hacker1, hacker2);

function compareStrings(a, b){
    let upperCaseA = a.toUpperCase();
    let upperCaseB = b.toUpperCase();
    if(upperCaseA < upperCaseB) { 
        console.log("The driver's name goes first: " + hacker1);
    } else if(upperCaseA > upperCaseB){
        console.log("Yo, the navigator goes first definitely: " + hacker2);
    }else {
        console.log("Wait What?! You both got the same name?: " + hacker1 + " " + hacker2);
    }
}

// Lorem ipsum generator
