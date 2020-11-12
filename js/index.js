// Iteration 1: Names and Input

console.log("1.1 ****************");

var hacker1 = "TRAN Thi Thanh Xuan";
var hacker2 = "PHAM Quang Minh";

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);


// Iteration 2: Conditionals
console.log("2.1 ****************");
//remove whitespace in name
var hacker1_noSpace = hacker1.replace(/\s+/g, '');
var hacker2_noSpace = hacker2.replace(/\s+/g, '');

//then count number of characters in each name

var nCharactersOfHack1 = hacker1_noSpace.length;
var nCharactersOfHack2 = hacker2_noSpace.length;

if (nCharactersOfHack1 == nCharactersOfHack2) {
  console.log(`Wow, you both have equally long names, ${nCharactersOfHack1} characters!`)
} else if (nCharactersOfHack1 > nCharactersOfHack2) {
  console.log(`The driver has the longest name, it has ${nCharactersOfHack1} characters.`)
} else {
  console.log(`It seems that the navigator has the longest name, it has ${nCharactersOfHack2} characters.`)
}

// Iteration 3: Loops
// 3.1 
console.log("3.1 ****************");
//this name has uppercase letters
var upperCaseDriverName = hacker1.toUpperCase();
//print a string driverName that has all characters in driver's name, characters are separated by a space

var driverName = '';
for (let i = 0; i < upperCaseDriverName.length; i++) {
  driverName += (upperCaseDriverName[i] + ' ');
}
console.log("Driver name is ", driverName);

//3.2
console.log("3.2 ****************");
//create a new array, then reverse it, finally join all elements of this array into a string
var reverserName = hacker2.split("").reverse().join('');
console.log(reverserName);

//3.3
console.log("3.3 ****************");

var arrayName = [hacker1.toUpperCase(''), hacker2.toUpperCase('')];
var newArrayName = arrayName.sort();
if (newArrayName[0] == newArrayName[1]) {
  console.log(`What?! You both have the same name?`)
}
else if (newArrayName[0] == hacker1.toUpperCase('')) {
  console.log(`The driver's name goes first.`)
}
else {
  console.log(`Yo, the navigator goes first definitely.`)
}
console.log(arrayName)

//Bonus 1
console.log("Bonus 1****************");

var stringA = "Lorem et Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."

// count the number of words in the string.
console.log('Number of words in the string: ', stringA.split(' ').length);

// count the number of times the Latin word appears
var latinWord = 'et';
var x = stringA.split(' ').filter(x => x === latinWord);
console.log(latinWord + ' : ' + x.length);

console.log("Bonus 2****************");

var phraseToCheck = `AWas it a car or a cat I saw?" and "No 'x' in Nixon`;

function isPalindrome(string) {
  if (!string) {
    return 'Check your string!';
  } else {
    // convert characters to lowercase, remove all special characters;
    var characters = string.toLowerCase().replace(/[^A-Za-z0-9]/g, '');

    var len = characters.length;

    for (let i = 0; (i < len / 2); i++) {
      if (characters[i] !== characters[len - 1 - i]) {
        return false;
      }
    }
    return true;
  }
}

console.log(isPalindrome("Amor, Roma"));

console.log(isPalindrome(phraseToCheck));
console.log(isPalindrome(''));
