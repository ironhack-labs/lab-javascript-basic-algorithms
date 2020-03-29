// Iteration 1: Names and Input
let driver = "Toni";
let navigator = "Irene";
console.log(`The driver's name is ${driver}`);
console.log(`The navigator's name is ${navigator}`);

// Iteration 2: Conditionals
if (driver.length > navigator.length) {
    console.log(`Driver has the longest name, it has ${driver.length} characters`);
  } else if (driver.length < navigator.length) {
    console.log(`Navigator has the longest name, it has ${navigator.length} characters`);
  } else {
    console.log(`Wow, you both have equally long names, ${driver.length} characters!`);
  }

// Iteration 3: Loops
let nombre = [];
for (let i=0; i < driver.length ; i++){
  nombre.push(driver[i].toUpperCase());
  console.log(nombre.join(''));
}

let nombreReves = []

for (let x = driver.length-1; x >= 0; x--){  
  nombrereves.push(driver[x].toUpperCase());
  console.log(nombrereves.join(''));
}

//BONUS 1
let paragraph =  "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

function wordCount(str) { 
  console.log( `The number of words is:${str.split(" ").length}`) ;
}
wordCount(paragraph);


function etNumber(str,val) {
  console.log(`The number of times 'et' appears is:${str.split(val).length}`) 
}


etNumber(paragraph, 'et');

//BONUS 2
let phraseToCheck = ['amor', 'roma'];

function bonus2 (arr, arr2) {
  //Almacenamos temporalmente lo que nos devuelven los loops
  let word1 = [] 
  let word2 = []

  //Analizamos las letras una a una. La segunda palabra, se analiza al revés.
  for (let i = 0; i < arr.length; i++){
    word1.push(arr[i])
    console.log(word1.join(''));
  }
  for (let i = arr2.length-1; i >= 0; i--){
    word2.push(arr2[i])
    console.log(word2.join(''));
  }
  
 if (word1[0] == word2[0]) {
   console.log(`It's a palindrome`);
 } else {console.log(`The words you entered are not palindromes`)}
}

bonus2(phraseToCheck[0],phraseToCheck[1]);