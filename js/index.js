
// // iteration 1

let hacker1 = "Angel"
console.log ( `The driver's name is ${hacker1}`)
let hacker2 = "Shirley"
console.log (`The navigator's name is ${hacker2}`)

// // iteration 2

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log (`Wow, you both have equally long names, ${hacker2.length}  characters!`)
}

// iteration 3.1

let name = hacker1.toUpperCase().split('').join(' ')
console.log(name)

// iteration 3.2

let nameReverse = hacker1.split('').reverse().join('')
console.log(nameReverse)

// iteration 3.3

/*
cada letra tiene un orden lexicografico y las cadenas se pueden comparar teniendo en cuenta el orden 
lexicografico de cada letra.
*/

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.")
} else if(hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}


// Bonus 1

let paragraph1 =  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt condimentum nunc."
let paragraph2 =  "Ut sodales ante eu tortor gravida, sed viverra metus aliquam tincidunt molestie enim vitae."
let paragraph3 =  "ut laoreet neque et fringilla quis. Donec at purus mi. Nunc fermentum lorem mi, sed posuere arcu lobortis."

let sumaParagraph = paragraph1 + paragraph2 + paragraph3 
console.log(sumaParagraph)

let countWords = sumaParagraph.split(' ').length
console.log(countWords)

let word = "et"
let countOccurences = 0

for (let posicion=0;posicion < sumaParagraph.length;posicion++) {
  const substr = sumaParagraph.substr(posicion, 2);
 if (word === substr) {
    countOccurences = countOccurences + 1
 }
}
console.log(countOccurences)


// Bonus 2

// solucion 1

// let phraseToCheck = "put it up"

// // manipulamos la cadena de texto
// phraseToCheck = phraseToCheck.replaceAll(" ", "") // Borramos los espacios
// phraseToCheck = phraseToCheck.toUpperCase() // convertimos en mayusculas
// console.log(phraseToCheck)
// let resultado = ''

// for (let letter of phraseToCheck) {
//   resultado = letter + resultado
// }

// if(phraseToCheck === resultado) {
//   console.log("si es un palindromo");
// } else {
//   console.log("no es un palindromo");
// }


// solucion 2

let phraseToCheck = "taco cat"

phraseToCheck = phraseToCheck.replaceAll(" ", "") // Borramos los espacios
phraseToCheck = phraseToCheck.toUpperCase() // convertimos en mayusculas
console.log(phraseToCheck)

let array = phraseToCheck.split('');
console.log(array)
let reverse = array.reverse('');
console.log(array)
let reverseWord = reverse.join('');
console.log(reverseWord)

if(phraseToCheck.toUpperCase() === reverseWord.toUpperCase()) {
    console.log("si es un palindromo")
} else {
    console.log("no es un palindromo" )
}


