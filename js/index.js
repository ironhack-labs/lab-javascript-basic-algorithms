// Iteration 1: Names and Input
const hacker1 = "Bouziane";
console.log("The driver's name is " + hacker1)
const hacker2 = "Marina";
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
} else if (hacker1.length < hacker2.length){
    console.log("It seems that the navigator has the longest name, it has "+ hacker2.length + " characters.")
} else{
    console.log("Wow, you both have equally long names,"+ hacker2.length+  " characters!")
}

// Iteration 3: Loops
var hacker1UpSpaceName = "";
var hacker2ReverseName = "";

for (let i = 0 ;i < hacker1.length ;i++){
    hacker1UpSpaceName += hacker1.charAt(i).toUpperCase() + " ";
}
console.log(hacker1UpSpaceName);



for(let i = 0; i < hacker2.length; i++){
    hacker2ReverseName += hacker2.charAt(i)
}
console.log(hacker2ReverseName.split("").reverse("").join(""));


const alphabetic = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const searchTermHacker1 = hacker1.charAt(0);
const searchTermHacker2 = hacker2.charAt(0);
const indexOfFirst = alphabetic.indexOf(searchTermHacker1);
const indexOfSecond = alphabetic.indexOf(searchTermHacker2);

for (let i = 0; i < alphabetic.length; i++){
    if (indexOfFirst < indexOfSecond){
        console.log("The driver's name goes first.");
        break;
    } else if (indexOfFirst > indexOfSecond){
        console.log("Yo, the navigator goes first definitely.");
        break;
    } else {
        console.log("What?! You both have the same name?");
    }
}











