// Iteration 1: Names and Input
const hacker1 = "Elliot";
console.log(hacker1);
const hacker2 = "Darlene"
console.log(hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2){console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)}
else if (hacker1.length < hacker2.length){console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)}
else {`Wow, you both have equally long names, ${hacker1.length} characters!`}

// Iteration 3: Loops
const first = hacker1.toUpperCase().split("").join(" "); 
console.log(first);

const second = hacker2.split("").reverse().join("");
console.log(second);

//BONUS1
const longText = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor ";
const words = longText.split(" ").length;
const etNum = longText.split("et").length;

//BONUS2
const phraseToCheck = "A man, a plan, a canal, Panama!"

// const transformedString = phraseToCheck.toLowerCase().replaceAll(/\s/g, '').replaceAll(',', '').replaceAll('.', '').replaceAll('!', '');
// first I did it like this 

const phraseToCheck = "A man, a pl an, a canal, Panama!"

function transformString (phraseToCheck){
  let str = "";
  for (let i=0; i<phraseToCheck.length; i++){
    if(phraseToCheck[i] != " " && phraseToCheck[i] != "," && phraseToCheck[i] != "." && phraseToCheck[i] && phraseToCheck != "!" ){
      str += phraseToCheck[i];
    }   
  }
  return str;
} 

let transformedString = transformString(phraseToCheck);

// then I built a function myself to remove all unwanted characters from the string

function isItPalindrome(transformedString){
    for (let i = 0; i < (transformedString.length / 2); i++){
        if (transformedString[i] !== transformedString[transformedString.length - 1 - i]){
            return "It is not a palindrome";
        }
    }
    return "It is a palindrome!";
}

const value = isItPalindrome(transformedString);

console.log(value);


// 