// /*
// PAIR PROGRAMMING!
// */
// /* Iteration 1 - Names and Inputs ----------------------------------------
//     1.1 Create a variable called "driver" with the driver's name.
//     1.2 Print in the console "The driver's name is XXXX"
//     1.3 Create a variable called "navigator" with the navigator's name.
//     1.4 Print in the console "The navigator's name is YYYY"
// */
let driver = "Alex";
let navigator = "Laura";

console.log(`The driver's name is ${driver}`);
console.log(`The navigotr's name is ${navigator}`);
// /* Iteration 2: Conditionals ---------------------------------------------
//     2.1. Depending on which name is longer, print:
//     - Driver has the longest name, it has XX characters. or
//     - Navigator has the longest name, it has XX characters. or
//     - Wow, you both have equally long names, XX characters!.
// */
if (driver.length > navigator.length) {
  console.log(`Driver has a longer name, it has ${driver.length} characters`);
} else if (navigator.length > driver.length) {
  console.log(`Navigator has a longer name, it has ${navigator.length} characters`);
} else {
  console.log("Both have same number if characters");
}
// /* Iteration 3: Loops ----------------------------------------------------
//     3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
//     3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
// */
for(let i = 0; i < driver.length; i++) {

  console.log(i.toUpperCase);
}
let driverUppercased = driver.toUpperCase(); 
console.log(driverUppercased.split('').join(' '));

console.log(navigator.split("").reverse().join(""));
// /*  Bonus Time!
//     Bonus 1: -------------------------------------------------------------
//     Go to lorem ipsum generator and:
//     Generate 3 paragraphs. Store the text in a variable type of string.
//     Make your program count the number of words in the string.
//     Make your program count the number of times the Latin word "et" appears.
//     Podeis utilizar indexOf. Para que sepas, para el metodo indexOf podeis
//     passar un segundo parámetro que indica a partir de donde va a encontrar la 
//     palabra buscada
//     Sintaxix: str.indexOf(searchValue [, fromIndex])
//     ejemplo: 
//         let lastPosition = 0;
//         lasPosition = str.indexOf("et", lastPosition);

// */
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed quam elementum, condimentum nulla eu, tempor erat. Nunc odio ipsum, faucibus vitae odio et, tempor fermentum massa. Suspendisse potenti. Phasellus neque diam, auctor nec odio a, fermentum dapibus augue. Maecenas pretium egestas consequat. Duis efficitur et ipsum in viverra. Aenean libero turpis, fermentum eu sem ut, vulputate pretium dolor. Duis rhoncus dictum massa, ac lacinia augue luctus ut. Vestibulum sapien ipsum, convallis id vulputate sit amet, viverra non nisi. Integer posuere sodales nibh. Cras nec nisi eget lorem efficitur luctus. Donec eget ex venenatis, ullamcorper elit vitae, sodales urna. Vestibulum nulla diam, egestas eu lorem tincidunt, maximus tristique dolor. Integer mollis nulla a dui sollicitudin convallis. Nullam vel posuere lacus. Phasellus in neque sit amet tellus malesuada auctor vel at sapien. Morbi sed justo eros. Vestibulum commodo finibus venenatis. Sed fermentum viverra sodales. In interdum augue erat, auctor ullamcorper ipsum malesuada non. Duis vel mauris eget sapien egestas posuere. Fusce blandit ipsum quis vestibulum commodo. Fusce vestibulum blandit dolor, in euismod nunc aliquam nec.";

let loremWords = lorem.split(" ");
console.log(loremWords);

function count () {
  return loremWords.length;
}

count(loremWords);

// /*  Bonus 2:
//     Create a new variable phraseToCheck and have it contain some string value. 
//     Write a code that will check if the value we assigned to this variable is 
//     a Palindrome. Here are some examples of palindromes:
//     "Amor Roma"
//     "race car"
//     "stack cats"
//     "taco cat"
//     "put it up"
//     "A man a plan a canal Panama"
//     "step on no pets"
// */
