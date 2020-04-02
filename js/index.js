/*
PAIR PROGRAMMING!
*/


/* Iteration 1 - Names and Inputs ----------------------------------------
    1.1 Create a variable called "driver" with the driver's name.
    1.2 Print in the console "The driver's name is XXXX"
    1.3 Create a variable called "navigator" with the navigator's name.
    1.4 Print in the console "The navigator's name is YYYY"
*/
let driver = "Robert";
let navigator = "David"
console.log( "The driver's name is " + driver);
console.log(`The navigator's name is ${navigator}`);



/* Iteration 2: Conditionals ---------------------------------------------
    2.1. Depending on which name is longer, print:
    - Driver has the longest name, it has XX characters. or
    - Navigator has the longest name, it has XX characters. or
    - Wow, you both have equally long names, XX characters!.
*/
if (driver.length > navigator.length) {
  console.log("Driver has the longest name, it has " + driver.length + " characters");
} else if (navigator.length > driver.length) {
  console.log("Navigator has the longest name, it has " + navigator.length + " characters");
} else {
  console.log(`Wow, you both have equally long names, ${driver.length} characters!`)
}



/* Iteration 3: Loops ----------------------------------------------------
    3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
    3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
*/


let tempArr = driver.toUpperCase().split("");
console.log(tempArr.join(" "));

let tempNav = navigator.split("");
let navInv = [];

for(let i = navigator.length - 1; i >= 0; i--){
  navInv.push(navigator[i]);
}
console.log(navInv.join(""));


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


let loremStr = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et laoreet quam. Cras scelerisque porttitor iaculis. Nulla pellentesque mollis vulputate. Donec facilisis quam vitae lorem semper facilisis. Maecenas nec tortor sit amet ligula sodales mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam id velit eget turpis porttitor sollicitudin id vel nunc. Nulla tempus consequat sapien in imperdiet. Aliquam erat volutpat. Nunc at ultricies nunc, quis volutpat elit. Integer dapibus, libero vitae cursus malesuada, tortor arcu auctor diam, at fringilla turpis turpis vitae justo. Maecenas blandit, felis a porta fermentum, purus arcu tempor eros, in interdum ex sem sit amet nisi. Donec placerat nulla quis ex euismod tempor. Aliquam pharetra dapibus lacus, quis elementum nulla malesuada sed. Etiam ac mi libero. Curabitur molestie erat purus, non tempus dolor dictum ut. Integer eget turpis dictum, volutpat urna vitae, consectetur lacus. Nullam at neque vel erat pharetra scelerisque. Ut odio arcu, pharetra quis volutpat congue, tempus nec libero. Cras pharetra in ligula vitae fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer mollis est leo, non suscipit arcu laoreet quis. Proin egestas blandit elit ornare tincidunt. Vestibulum ac ex nunc. Nulla facilisi. Nam pellentesque sem felis, at porttitor nisi vulputate nec. Curabitur aliquam rhoncus pretium. Ut eget consequat neque.';

let numWord = loremStr.split(" ").length;
console.log(numWord);

function countEt (str) {
  let countWords = 0;
  let strArr = str.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    if(strArr[i].indexOf("et") === 0 && strArr[i].length === 2){
      countWords++;
    }
  }
  return countWords;
}

console.log(countEt(loremStr));

/*
recorrer string con indexOf
cuando lo encuentre, sumar 1 a una variable y guardar el valor del index
realizar n iteraciones
*/


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

let phraseToCheck = "Amor Roma";

let phraseToCheckDos = "put it up";


function palindromo(str){  
  let lower = str.toLowerCase().split(" ").join("");
  let limit= lower.length / 2 - 1
  for (let i = 0; i < limit; i++){
    let upperLimit = lower.length - 1 - i;
    if (lower.charAt(i) !== lower.charAt(upperLimit)){
      console.log("No es un palindromo");
      return;
    }
  }
  console.log("Es un Palindrome");
}

palindromo (phraseToCheck);

