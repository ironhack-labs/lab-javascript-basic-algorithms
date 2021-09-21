// Iteration 1: Names and Input

//hacker 1
const hacker1 = "Aintzane";

console.log(`The driver's name is ${hacker1}`);

//hacker 2
const hacker2 = "Alice";

console.log(`The navigator's name is ${hacker2}`);

//------------------------------------------------------------------//

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
        console.log('The driver has the longest name, it has  '+ hacker1.length + ' characters.' );
    } else if (hacker2.length > hacker1.length) {
        console.log( 'It seems that the navigator has the longest name, it has '+ hacker2.length + ' characters.');
    } else {
        console.log('Wow, you both have equally long names, ' + hacker1.length + ' characters!');
};

//------------------------------------------------------------------//

// Iteration 3: Loops

//to sort the names alphabetically
let items = [hacker1, hacker2];
const namesInOrder = items.sort((a, b) => a.localeCompare(b));

//console.log(namesInOrder)


//to print the desired messages depending on the order of the names
if(hacker1 === hacker2) {
  console.log("What?! You both have the same name?")
} else if (namesInOrder[0] === hacker1) {
  console.log("The driver's name goes first.")
} else {
  console.log("Yo, the navigator goes first definitely.")
}


//------------------------------------------------------------------//


//Bonus 1


//to store lorem ipsum
const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


//count the amount of words
function WordCount(str) {
  return str.split(" ").length;
};

console.log(WordCount(loremIpsum));


//count the amount of 'et'
function count(str, find) {
  return (str.split(find)).length - 1;
}

console.log(count(loremIpsum, "et"));


//------------------------------------------------------------------//


//Bonus 2

//a random string
let somePalindrome = "put it up";

//make the string without space
somePalindrome = somePalindrome.split(" ").join("");

//console.log(somePalindrome);

//check if string is a palindrome
function checkPalindrome(str) {
  let l = str.length;
  for (let i = 0; i < l/2; i++) {
   if (str[i] !== str[l - 1 - i]) {
    return false;
   };
  };
  return true;
 };

 console.log(checkPalindrome(somePalindrome));