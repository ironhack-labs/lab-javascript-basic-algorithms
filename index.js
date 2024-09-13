// Iteration 1: Names and Input
let hacker1 = "John"; 
console.log ("The driver's name is: " + hacker1);

let hacker2 = "Frederika";
console.log ("The navigator's name is: " + hacker2);

// // Iteration 2: Conditionals

let lenghtOfName1 = hacker1.length;
let lenghtOfName2 = hacker2.length;

if(lenghtOfName1 > lenghtOfName2){
    console.log("The driver has the longest name, it has 4 characters.");
}
else if(lenghtOfName2 > lenghtOfName1){
    console.log("It seems that the navigator has the longest name, it has 9 characters.");
}
else if(lenghtOfName1 === lenghtOfName2){
    console.log("Wow, you both have equally long names, XX characters!");
}
else{
    console.log("No valid data! Try again.");
}

// // Iteration 3: Loops
// Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
let charactersOfName1 = "John";
let upperCaseName = charactersOfName1.toUpperCase();
let text = "";
for (let i = 0; i < upperCaseName.length; i++) {
    text += upperCaseName[i] + " ";
}
console.log(text);

// Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
let navigatorName = "Frederika";
let reverse = "";
for (let i = navigatorName.length - 1; i >= 0; i--) {
    reverse += navigatorName[i];
}
console.log(reverse);



let condition1 = "The driver's name goes first.";
let condition2 = "Yo, the navigator goes first, definitely.";
let condition3 = "What?! You both have the same name?";
let result = 0;

for (i = 0; i < hacker1.length && i < hacker2.length; i ++){
    if (hacker1[i] < hacker2[i]) {
    result = -1;
    break;
     }
    else if (hacker1[i] > hacker2[i]) {
        result = 1;
        break;
     }
 }
 
 if (result === 0) {
    if (hacker1.length < hacker2.length) {
        result = -1; 
    } else if (hacker1.length > hacker2.length) {
        result = 1; 
    } else {
        result = 0; 
    }
}

if (result === -1) {
    console.log(condition1);
} else if (result === 1) {
    console.log(condition2);
} else {
    console.log(condition3);
}


