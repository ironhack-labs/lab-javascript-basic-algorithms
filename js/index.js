/*
PAIR PROGRAMMING!
*/


/* Iteration 1 - Names and Inputs ----------------------------------------
    1.1 Create a variable called "driver" with the driver's name.
    1.2 Print in the console "The driver's name is XXXX"
    1.3 Create a variable called "navigator" with the navigator's name.
    1.4 Print in the console "The navigator's name is YYYY"
*/
let driver = "Toni";
let navigator = "Irene";




/* Iteration 2: Conditionals ---------------------------------------------
    2.1. Depending on which name is longer, print:
    - Driver has the longest name, it has XX characters. or
    - Navigator has the longest name, it has XX characters. or
    - Wow, you both have equally long names, XX characters!.
*/
if (driver.length > navigator.length) {
  console.log(`Driver has the longest name, it has ${driver.length} characters`)
} else if (driver.length < navigator.length) {
  console.log(`Navigator has the longest name, it has ${navigator.length} characters`)
} else {
  console.log(`Wow, you both have equally long names, ${driver.length} characters!`)
}



/* Iteration 3: Loops ----------------------------------------------------
    3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
    3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
*/
let nombre = [];
for (let i=0; i < driver.length ; i++){
  nombre.push(driver[i].toUpperCase());
  console.log(nombre.join(''));
}

let nombrereves = []

for (let x = driver.length-1; x >= 0; x--){  
  nombrereves.push(driver[x].toUpperCase());
  console.log(nombrereves.join(''));
}



/*  Bonus Time!
    Bonus 1: -------------------------------------------------------------
    Go to lorem ipsum generator and:
    Generate 3 paragraphs. Store the text in a variable type of string.
    Make your program count the number of words in the string.
    Make your program count the number of times the Latin word "et" appears.
    Podeis utilizar indexOf. Para que sepas, para el metodo indexOf podeis
    passar un segundo parámetro que indica a partir de donde va a encontrar la 
    palabra buscada
    Sintaxix: str.indexOf(searchValue [, fromIndex])
    ejemplo: 
        let lastPosition = 0;
        lasPosition = str.indexOf("et", lastPosition);

*/

let paragraph =  "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

function wordCount(str) { 
  console.log( `The number of words is:${str.split(" ").length}`) ;
}
wordCount(paragraph);


function etNumber(str,val) {
  console.log(`The number of times 'et' appears is:${str.split(val).length}`) 
}
etNumber(paragraph, 'et');





/*  Bonus 2:
    Create a new variable phraseToCheck and have it contain some string value. 
    Write a code that will check if the value we assigned to this variable is 
    a Palindrome. Here are some examples of palindromes:
    "Amor Roma"
    "race car"
    "stack cats"
    "taco cat"
    "put it up"
    "A man a plan a canal Panama"
    "step on no pets"
*/
let phraseToCheck = ['amor', 'roma'];

function bonus2 (arr, arr2) {
  let word1 = []
  let word2 = []

  for (let i = 0; i < arr.length; i++){
    word1.push(arr[i])
    console.log(word1.join(''));
  }
  for (let i = arr2.length-1; i >= 0; i--){
    word2.push(arr2[i])
    console.log(word2.join(''));
  }
 if (word1[0] == word2[0]) {
   console.log("It's a Palindrome");
 } else {console.log('somos malisimos')}
}

bonus2(phraseToCheck[0],phraseToCheck[1]);


