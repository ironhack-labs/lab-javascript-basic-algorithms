// Names and Input

// Number 1 & 2
let hacker1 = "McLovin";
console.log("The driver's name is " + hacker1);


//Number 3 & 4
let hacker2 = prompt("What is your name?");
console.log("The navigator's name is " + hacker2);


// Number 5
if (hacker1.length > hacker2.length) {
    console.log("The Driver has the longest name, it has " + hacker1.length + " characters")
} else if (hacker2.length > hacker1.length) {
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters")
} else if (hacker1.length === hacker2.length) {
    console.log("wow, you both got equally long names, " + hacker1.length + " characters")
}

//Number 6
let temp1 = [];
for (let i = 0; i < hacker1.length; i++) {
    temp1.push(hacker1[i]);
}
console.log(temp1.join(" "))


//Number 7
let temp2 = [];
for (let j = 0; j < hacker2.length; j++) {
    temp2.push(hacker2[j]);
}
console.log(temp2.reverse().join(""));


//Number 8
if (hacker1.toLowerCase().localeCompare(hacker2.toLowerCase()) < 0) {
    console.log("The driver's name goes first")
} else if (hacker1.toLowerCase().localeCompare(hacker2.toLowerCase()) > 0) {
    console.log("Yo, the navigator goes first definitely")
} else {
    console.log("What?! You both got the same name?")
}



//Bonus Excercises
//Number 9

function palindrome(str) {
    let reg = /[\W_]/g;
    let smallStr = str.toLowerCase().replace(reg, "");


    let reversed = smallStr.split("").reverse().join("");
    if (reversed === smallStr) {
        console.log("Yup! It is a palindrome!");
    } else {
        console.log("Nope! It is not a palindrome!");
    }
}

palindrome(prompt("Give me a palindrome!"));

// Lorem ipsum generator

