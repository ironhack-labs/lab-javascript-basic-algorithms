/*
PAIR PROGRAMMING!
*/


/* Iteration 1 - Names and Inputs ----------------------------------------
    1.1 Create a variable called "driver" with the driver's name.
    1.2 Print in the console "The driver's name is XXXX"
    1.3 Create a variable called "navigator" with the navigator's name.
    1.4 Print in the console "The navigator's name is YYYY"
*/
let driver = "Marc";
let navigator= "Felipe";
console.log(`The driver's name is ${driver}`);
console.log(`The navigators's name is ${navigator}`);



/* Iteration 2: Conditionals ---------------------------------------------
    2.1. Depending on which name is longer, print:
    - Driver has the longest name, it has XX characters. or
    - Navigator has the longest name, it has XX characters. or
    - Wow, you both have equally long names, XX characters!.
*/
if (driver.length > navigator.length){
  console.log(`Driver has the longest name, it has ${driver.length} characters`);
} else if (navigator.length > driver.length){
  console.log(`Navigator has the longest name, it has ${navigator.length} characters`);
} else {
  console.log(`Wow, you both have equally long names, ${navigator.length} characters`);
}


/* Iteration 3: Loops ----------------------------------------------------
    3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
    3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
*/
let drivername = "";

for(let c=0; c<driver.length; c++){
      drivername+=driver.charAt(c);
      drivername+=" "; 
}
console.log(drivername.toUpperCase());


let navname = "";

for(let c=navigator.length-1; c>=0; c--){
  navname+=navigator.charAt(c);
}
console.log(navname);


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
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed magna nisl. Nunc eget gravida ex. Curabitur vitae neque bibendum, dictum elit non, ultrices velit. Duis neque sem, semper vel eros ac, porta ornare dui. Sed et lacus a lacus vestibulum pharetra. Aliquam a orci elementum, lobortis libero in, ultrices urna. Vivamus congue venenatis lectus sit amet tincidunt. Maecenas laoreet bibendum nibh, pellentesque finibus orci ultrices a.";
lorem += "In lacinia felis quis felis posuere, sit amet fringilla enim feugiat. Donec mauris est, tristique quis turpis et, malesuada sagittis turpis. Mauris placerat luctus elit. Mauris facilisis nec metus sed tempor. Mauris vestibulum justo libero, vitae dignissim eros iaculis a. Integer sit amet pellentesque diam. Donec non ante risus. Pellentesque libero nibh, fringilla luctus massa in, commodo commodo purus. Aenean nunc dui, vestibulum vel nisi vitae, congue ullamcorper purus. Suspendisse placerat maximus semper. Curabitur arcu mi, commodo sit amet risus in, elementum lacinia diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum enim arcu, aliquam eu tincidunt eget, vulputate vitae tortor. Quisque congue imperdiet lectus nec commodo.";
lorem +="Nullam scelerisque tellus id velit posuere vehicula. Praesent a accumsan velit. Pellentesque nibh elit, dignissim eu felis ac, consectetur laoreet felis. Fusce vitae odio metus. Integer quam nisl, varius et accumsan in, laoreet a felis. Aliquam a ante urna. Morbi pharetra massa ac ligula elementum aliquam. Integer id volutpat ligula.";

let searchWord= " ";
let contador = 0;
let lastPosition = 0;
while (lastPosition >= 0){
  lastPosition = lorem.indexOf(searchWord, lastPosition+1);
  if (lastPosition >= 0) contador++;
}
console.log(`Numero de palabras = ${contador+1}`);

searchWord= "et";
contador = 0;
lastPosition = 0;
while (lastPosition >= 0){
  lastPosition = lorem.indexOf(searchWord, lastPosition+1);
  if (lastPosition >= 0) contador++;
}
console.log(`Numero de veces de "et" = ${contador}`);

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

let phraseToCheck = "A man a plan a canal Panama";
//let phraseToCheck = "Pepito pedro no es pedro pepito";
let cleanPhrase = "";
let reversePhrase = "";
for (let c=0;c<phraseToCheck.length;c++){
    if (phraseToCheck.charAt(c)!=" ") cleanPhrase+=phraseToCheck.charAt(c);
}
for (let c=phraseToCheck.length-1;c>=0;c--){
    if (phraseToCheck.charAt(c)!=" ") reversePhrase+=phraseToCheck.charAt(c);
}
if (cleanPhrase.toLowerCase()===reversePhrase.toLowerCase()){
    console.log(`La frase "${phraseToCheck}" es Palíndroma`);
} else {
    console.log(`La frase "${phraseToCheck}" NO es Palíndroma`);
}
