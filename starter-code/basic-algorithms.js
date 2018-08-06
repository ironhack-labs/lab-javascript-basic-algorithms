// Names and Input
Abi Summers Github abisummers
Manon Salaun Github MSLN8
// Paste your code here
var hacker1 = "Abi"
console.log ("the drive's name is "+ hacker1 )
var hacker2= "Manon"
console.log ("the navigator's name is " + hacker2 )

//Conditionals

if (hacker1.length>hacker2.length) {
    console.log ("the driver has the longest name, it has " + hacker1.length)
}
    else if (hacker1.length<hacker2.length) {
        console.log ("yo navigator got the longest name, it has " + hacker2.length + " characters !!")
    }
    
    else if (hacker1.length===hacker2.length) {
        console.log ("wow, you both got equally long names " + hacker1.length + "!!")
    }
    
    console.log(hacker1.toUpperCase().split("").join(" "))


var reverse = ""
console.log(hacker1.split("").reverse().join(""))

var hacker1 = "Abi" 
var hacker2 = "Manon"

var one = (hacker1[0])
var two = (hacker2[0])


var final = one.localeCompare(two)

if (final === -1 ) {
 console.log("The driver's name goes first")
} 
else if (final === 1) {
 console.log("Yo, the navigator goes first definitely")
}
else  {
 console.log("you both have the same name")
}

var string = prompt("Write a palindrome");


var string = string.split(" ").join("").toLowerCase();


var fir = string.slice(0, string.length / 2);
 console.log(fir);
var sec = string.slice(string.length / 2, string.length);
 console.log(sec);
var reverse = sec
 .split("")
 .reverse()
 .join("");

;
var second = string.slice(string.length / 2 + 1, string.length);
 console.log(second);
var reversed = second
 .split("")
 .reverse()
 .join("");

if (string.length % 2 !== 0 && fir === reversed) {
 console.log("palindrome");
} else if (string.length % 2 === 0 && fir === reverse) {
 console.log("palindrome");
} else {
 console.log("it’s not a palindrome");
}

// Lorem ipsum generator

