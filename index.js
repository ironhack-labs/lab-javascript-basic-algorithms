// Iteration 1: Names and Input
let hacker1 = "Victor";
let hacker2 = "Santiago";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    }
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

//3.1

let driverName = hacker1.toUpperCase();
let result = "";

for (i =0; i < driverName.length; i++){
    result += driverName[i] + " ";
}

let resultDriver = result.slice(0, result.length - 1);
console.log(resultDriver);

//3.2

let resultNavigator = ""
for (i = hacker2.length - 1; i >= 0; i--){
    resultNavigator += hacker2[i];
}
console.log(resultNavigator);

//3.3

if (resultDriver < resultNavigator){
    console.log("The driver's name goes first.");
} else if (resultDriver > resultNavigator){
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}


// Bonus 1
/* Generate 3 paragraphs. Store the text in a variable type of string. */
let longText = 
`What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing et typesetting industry.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.`;

console.log(longText);

/* Make your program count the number of words in the string. */

function countWords(text){
    return text.length;
}

let text = longText;
console.log(countWords(longText));

/* Make your program count the number of times the Latin word et appears. */

function countEt(text){
    let countResult = 0;
    let words = text.split(" ");
    for (let i = 0; i < words.length; i++){
        if (words[i] == "et"){
            countResult ++;
        }
    }
    return countResult;
}

console.log(countEt(text));


// Bonus 2
/* Create a new variable, phraseToCheck, containing some string value. Write a code to check if the value assigned to this variable is a Palindrome. Here are some examples of palindromes:

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon". */

let example1 = "Hello, it's me!";
let example2 = "WoW";
let example3 = "A man, a plan, a canal, Panama!";

function isPalindrome(phrase){
    let normalPhrase = phrase.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let reversePhrase = "";
        for (let i = normalPhrase.length - 1; i >= 0; i--){
            reversePhrase += normalPhrase[i];
        }
    if (normalPhrase == reversePhrase){
        return true;
    } else {
        return false;
    }
}

let phraseToCheck = example3;
console.log(isPalindrome(phraseToCheck));


