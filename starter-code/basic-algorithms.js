var hacker1 ="Kenneth";
console.log(`The driver's name is ${hacker1}`);

var hacker2 = prompt("What is the users name");

console.log(`The navigator's name is ${hacker2}`)

if (hacker1.length > hacker2.length){
  console.log(`The Driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length){
  console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`)
} else console.log(`wow, you both got equally long names, ${hacker1.length} characters!!`)


// var arrayOfLetters = hacker1.split("")
var arrayOfNewLetters = [];
var stringBackTogether = "";
var reverseName = "";

for (var i = 0; i < hacker1.length; i++){
  stringBackTogether = stringBackTogether + hacker1[i] + " ";
}

console.log(stringBackTogether.toUpperCase());

// console.log(arrayOfLetters.join(" ")) 

var temp = []

for (var i = hacker2.length - 1; i >= 0; i--){
  reverseName += hacker2[i] + " ";
}
console.log(reverseName);


 theResultToCheck = hacker1.localeCompare(hacker2);

if (theResultToCheck === -1){
  console.log("The driver's name goes first");
} else if (theResultToCheck === 1){
  console.log("Yo, the navigator goes first definitely");
} else{
  console.log("What?! You both got the same name?");
}


var giveMeString = prompt("Please give me a random new string?");
function palindrome(str){
  const reversed = str
  .split('')
  .reverse()
  .join('');

return str.toLowerCase() === reversed.toLowerCase();

}

if(palindrome(giveMeString) === true){
  console.log(`${giveMeString} is a palindrome`);
} else {
  console.log(`${giveMeString} is not a palindrome`);
}
palindrome(giveMeString);















































