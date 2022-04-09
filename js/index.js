// Iteration 1: Names and Input
//1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = "Carolina"
//1.2 Print `"The driver's name is XXXX"`.
console.log(`"The driver's name is ${hacker1}"`)
//1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = "leo"
//1.4 Print `"The navigator's name is YYYY"`.
console.log(`"The driver's name is ${hacker2}"`)



// Iteration 2: Conditionals
/*- `The driver has the longest name, it has XX characters.` or <br>
	  - `It seems that the navigator has the longest name, it has XX characters.` or <br>
	  - `Wow, you both have equally long names, XX characters!`.
    */ 
if (hacker1.length>hacker2.length){ // --> Mide largo de hacker1 vs hacker2
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length<hacker2.length){ // --> Mide largo de hacker2 vs hacker1
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else if ( hacker1.length === hacker2.length) {// -->  Si el largo es igual, imprime frase
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops
//3.1  Print all the characters of the driver's name, separated by a space and [in capitals]
hacker1 = hacker1.toUpperCase () // --> Vuelve todo a Mayúsculas
console.log(hacker1.split("").join(" ")) // --> split = Separa por letras join = une y separa por espacios

//3.2 Print all the characters of the navigator's name, in reverse order. 
console.log(hacker1.split("").reverse().join(""));

//3.3


  // -------------------------Bonus 1 ----------------------------------------------

  /*Generate 3 paragraphs. Store the text in a variable type of string.
  - Make your program count the number of words in the string.
  - Make your program count the number of times the Latin word [`et`](https://en.wiktionary.org/wiki/et#Latin) appears.*/

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`

console.log(lorem.split(" ")) // --> Separa las letras para poder contar por palabras
console.log(lorem.length) // --> Cuenta el número de palabras que hay en el array

 let countEt;

 for ( i=0; i < lorem.length; i++) {
   if (lorem[i] === "et") {
    countEt = countEt + 1
   }
 }
 console.log(countEt) //! PORQUE ESTO DA UNDEFINED ! 

 
 // -------------------------Bonus 2 ----------------------------------------------

/*Create a new variable `phraseToCheck` and have it contain some string value. Write a code that will check if the value we assigned to this variable is a [Palindrome](https://en.wikipedia.org/wiki/Palindrome). Here are some examples of palindromes: 
  - "A man, a plan, a canal, Panama!"
  - "Amor, Roma"
  - "race car"
  - "stack cats"
  - "step on no pets"
  - "taco cat"
  - "put it up"
  - "Was it a car or a cat I saw?" and "No 'x' in Nixon".*/

  let phraseToCheck = "Amor, Roma";
  phraseToCheck = phraseToCheck.toLocaleLowerCase()// --> Pasamos todo a minusculas para que JS lo pueda reconocer. 
  console.log(phraseToCheck)
  phraseToCheck = phraseToCheck.split(" ")  // ---> Separamos las palabras " devuelve array"
  console.log(phraseToCheck) 
  phraseToCheck = phraseToCheck.reverse(" ")
  console.log(phraseToCheck) 
  phraseToCheck = phraseToCheck.join("") // -> Junta las palabras nuevamente
  console.log(phraseToCheck)  

  let palindrome = ""
  let NotPalindrome = ""

  for ( let i = 0; i < phraseToCheck.length; i++) { // -- > lee de izquierda a derecha 
    if (phraseToCheck[i] === " " || phraseToCheck[i] === "," || phraseToCheck[i] === "?"|| phraseToCheck[i] === "!"|| phraseToCheck[i] === "."  ) { // --> Si tiene alguno de estos signos
      continue; // ----> CONTINUA
  } 
}

//! NO SE LOGRA IMPRIMIR PALINDROMO

for (let i=phraseToCheck.length-1;i>=0;i--){ // --> lee de derecha a izquierda
  if (phraseToCheck[i] === " " || phraseToCheck[i] === "," || phraseToCheck[i] === "?"|| phraseToCheck[i] === "!"|| phraseToCheck[i] === "."  ) { // --> Si tiene alguno de estos signos
  continue; // ----> CONTINUA
  }
}
//! NO SE LOGRA IMPRIMIR QUE NO ES PALINDROMO


