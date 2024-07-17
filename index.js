// Iteration 1: Names and Input
let hacker1 = "Anthony"
console.log("The driver's name is " + hacker1);
let hacker2 = "Ashton"
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length ){
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
}else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
} else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters.");
}

// Iteration 3: Loops

// 3.1

//Easy way to use methods
let hacker1Spaces = hacker1.split('').join(' ');
console.log(hacker1Spaces);


// looped version

let loopNameSpace = "";

for(i = 0; i < hacker1.length; i++){
    loopNameSpace += hacker1[i] + " ";
}
console.log(loopNameSpace);



// 3.2

let hacker1Reversed = hacker1.split('').reverse().join('');
console.log(hacker1Reversed);

//looped way to do it

let loopedNameReversed = "";

for (i = hacker1.length - 1; i >= 0; i--){
    loopedNameReversed += hacker1[i];
}

console.log("This is reversed version " + loopedNameReversed );


// 3.3
hacker1 = "A";
hacker2 = "B";

if (hacker1 < hacker2) {
    console.log("The driver goes first");
} else if ( hacker1 > hacker2){
    console.log("Yo, the navigator goes first, definitely");
}else {
    console.log("What?! You both have the same name?");
}



//Bonus 1

let longText = "Nulla quis aliquip Lorem veniam. "; 
let wordCount = 0;


for(i = 0; i < longText.trim().length + 1; i++){
    if(longText[i] == ' ' ){
        wordCount++;
    }
}
console.log(wordCount);


//I don't kow how to code Bonus 2 without the use of a method.

//Bonus 2

let phrases = ["A man, a plan, a canal, Panama!", "Amor, Roma", "race car", "stack cats", "step on no pets", "taco cat", "put it up", "Was it a car or a cat I saw?", "No 'x' in Nixon"];
for(let i = 0; i < phrases.length; i++){
    let phraseToCheck = phrases[i];
    
    let cleanUp = phraseToCheck.toLowerCase().replace(/[^a-z0-9]/g, "")
    let isPalindrome = true;
    
    for(let i = 0; i < cleanUp.length / 2; i++){
        if(cleanUp[i] !== cleanUp[cleanUp.length - 1 - i]){
            isPalindrome = false;
            break;
        }
}
console.log(isPalindrome);
}

