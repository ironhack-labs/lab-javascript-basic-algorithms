
// Iteration 1
console.log("I'm ready!");
let hacker1 = 'Maud';
console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'Myra';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2
function whoHasLongestName(param1, param2) {
  let longestName;
  if (param1.length > param2.length) {
    longestName = `The driver has the longest name, it has ${param1.length} characters.`;
  } else if (param1.length < param2.length) {
    longestName = `It seems that the navigator has the longest name, it has ${param2.length} characters.`;
  } else {
     longestName = `Wow, you both have equally long names, ${param2.length} characters.`;
  }
  return longestName;
}

console.log(whoHasLongestName(hacker1, hacker2))

// Iteration 3
// Iteration 3.1 - Method 1
function spaceAndCapitalizeName(param) {
  return param.split("").join(" ").toUpperCase();
}

console.log(spaceAndCapitalizeName(hacker1));

// Iteration 3.1 - Method 2
var resultSpaceUpper='';
var reverHacker1='';
for(let i=0;i<hacker1.length;i++)
{
    resultSpaceUpper+=hacker1[i].toUpperCase()+' ';
}
for(let i=hacker1.length;i>0;i--)
{
    reverHacker1+=hacker1[i-1];
}
console.log(resultSpaceUpper);

// Iteration 3.2
function reverseName(param) {
  return param.split("").reverse().join('');
console.log(reverseName(hacker1));
}

console.log(reverseName(hacker1));

// Iteration 3.3
function sortNames(param1, param2){
  if (param1.localeCompare(param2) < 0) {
    return 'The driver\'s name goes first.';
  } else if (param1.localeCompare(param2) > 0) {
    return 'Yo, the navigator goes first definitely.';
  } else {
    return 'What?! You both have the same name?';
  }
}
console.log(sortNames(hacker1, hacker2))

// Bonus 1

// Generate 3 paragraphs. Store the text in a variable type of string.
let par1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
let par2 = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
let par3 = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."

// Make your program count the number of words in the string.
function howManyWords(paragraphe) {
  return paragraphe.split(' ').length;
}
console.log(howManyWords(par1));

// Make your program count the number of times the Latin word 'et' appears
// itérer sur tous les mots
// chaque occurrence => +1
function finder(paragraphe){
  let listOfWords = paragraphe.split(' ');
  let count = [];
  for (var i = 0; i < listOfWords.length; i++) {
    if (listOfWords[i].includes("et")) {
      count.push(listOfWords[i])
    }
  }
  return count.length;
}
console.log(finder(par1))

