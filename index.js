// Iteration 1: Names and Input
/*1.1 Create a variable hacker1 with the driver's name.
1.2 Print "The driver's name is XXXX".
1.3 Create a variable hacker2 with the navigator's name.
1.4 Print "The navigator's name is YYYY".*/

const hacker = "Erik";
console.log(`The driver's name is ${hacker}.`);
const hacker2 = "Senay";
console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals
/*2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.*/

if(hacker.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker.length} charackters.`);
}else if(hacker2.length > hacker.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} charackters.`);
}else{
    console.log(`Wow, your both have equally long names, ${hacker.length} charackters.`);
}



// Iteration 3: Loops
/*
3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
3.3 Depending on the lexicographic order of the strings, print:

The driver's name goes first.
Yo, the navigator goes first, definitely.
What?! You both have the same name?
*/

let driver = "";
for(let i = 0; i < hacker.length; i++){
    driver += hacker[i].toUpperCase() + " ";
    
}
console.log(driver);

let result = "";
for(let i = hacker.length - 1; i >= 0; i--){
    result += hacker[i];

}
console.log(result);

if(hacker.localeCompare(hacker2) === -1){
    console.log(`The driver's name goes first.`);
}else if(hacker2.localeCompare(hacker) === -1){
    console.log(`Yo, the navigator goes first, definitely.`)
}else{
    console.log(`What?! You both have the same name?`);
}

/**
Bonus 1:
Go to the lorem ipsum generator website and:

Generate 3 paragraphs. Store the text in a new string variable named longText.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.
 */

const longText = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 

Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.`

const words = longText.split(" ");
console.log(words.length);
let count = 0;

for(let i = 0; i < words.length; i++){
    if(words[i] === "et"){
        count++;
    }
}
console.log(count);

/**
 Bonus 2:
Create a new variable, phraseToCheck, containing some string value. Write a code to check if the value assigned to this variable is a Palindrome. Here are some examples of palindromes:

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".

 */

const phraseToCheck = "A man, a plan, a canal, Panama!";

let reversedPhraseToCheck = "";
let clearedPhraseToCheck = "";

for(let i = phraseToCheck.length - 1; i >= 0; i--){
    if(phraseToCheck[i] === " " || phraseToCheck[i] === "!" || phraseToCheck[i] === "." || phraseToCheck[i] === ","){
        continue;
    }else{
        reversedPhraseToCheck += phraseToCheck[i];
    }
    
    
}

for(let i = 0; i < phraseToCheck.length; i++){
    if(phraseToCheck[i] === " " || phraseToCheck[i] === "!" || phraseToCheck[i] === "." || phraseToCheck[i] === ","){
        continue;
    }else{
        clearedPhraseToCheck += phraseToCheck[i];
    }
    
    
}
if(clearedPhraseToCheck.toLowerCase() === reversedPhraseToCheck.toLowerCase()){
    console.log("Palindrome");
}else{
    console.log("No!");
}

