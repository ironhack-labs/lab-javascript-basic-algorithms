// Iteration 1: Names and Input
const hacker1 = "Manolo";
console.log("The driver's name is " + hacker1);

const hacker2 = "Manolo";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " + hacker1.length + " characters");
}
if (hacker1.length < hacker2.length){
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters");
}
if (hacker1.length === hacker2.length){
    console.log("Wow, you both have equally long names, " + hacker2.length + " characters");
}

// Iteration 3: Loops
//3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
let separedName = "";

for (let i = 0; i < hacker1.length; i++){
    let upperChar = hacker1[i].toUpperCase();
  
  //If it's the last character, don't add an extra space
    if (i === hacker1.length - 1){
        separedName += upperChar;
        break; //Exit the loop after the last character
    }else{
        separedName += upperChar + " "; //Add a space after the character
    }
}
console.log(separedName);


//3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
let reversedName = "";

for (let i = hacker2.length - 1; i >= 0; i--){
    reversedName += hacker2[i];
}
console.log(reversedName);


//3.3 Depending on the lexicographic order of the strings, print:
    //The driver's name goes first.
    //Yo, the navigator goes first, definitely.
    //What?! You both have the same name?
let comparedName = "";
let minLength = Math.min(hacker1.length, hacker2.length);//We loop throught both names simultaneously until the length of the shorter name
    
for (let i = 0; i < minLength; i++){
    if (hacker1[i] < hacker2[i]){
        comparedName = "The driver's name goes first.";
        break;
    } else if (hacker1[i] > hacker2[i]){
        comparedName = "Yo, the navigator goes first, definitely.";
        break;
    } else{
        comparedName = "What?! You both have the same name?";
    }
}
console.log(comparedName);


//Bonus 1:
    //Go to the lorem ipsum generator website and:
    
    //Generate 3 paragraphs. Store the text in a new string variable named longText.
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


    //Make your program count the number of words in the string.
let wordsCount = 0;

for (let i = 0; i < longText.length; i++){
    if (longText[i] === " " || longText[i] === "\n" || i === longText.length - 1){
        wordsCount++;
    }
}
console.log("Total words: ", wordsCount);


    //Make your program count the number of times the Latin word et appears.
let etCount = 0;

for (let i = 0; i < longText.length; i++){
    if (longText.slice(i, i + 2) === "et"){
        etCount++;
    }
}
console.log("Number of ocurrences of 'et' : ", etCount);