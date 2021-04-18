    // functions 

function split(letters) {
    let arrayLetters = [];

    for (letter of letters) {
        arrayLetters.push(letter)
    }
    return arrayLetters;

}

function reverseArray (arrayLetters) {
    let reverseArray = [];

    for (var i = arrayLetters.length -1; i >= 0; i--) {
        let letter = arrayLetters[i]
        reverseArray.push(letter);
    }

    return reverseArray;
}

function join(arrayLetters) {
    let stringLetters = "";

    for (letter of arrayLetters) {
        stringLetters = stringLetters + letter
    }
    return stringLetters;
}

function reverseString(phrase) {

    let splitted = split(phrase);
    let reversed = reverseArray(splitted);
    let result = join(reversed);
    return result
}



// // iteration 1

let hacker1 = "Angel"
console.log ( `The driver's name is ${hacker1}`)
let hacker2 = "Shirley"
console.log (`The navigator's name is ${hacker2}`)

// // iteration 2
const hacker1Length = hacker1.length 
const hacker2Length = hacker2.length 

if (hacker1Length > hacker2Length) {
    console.log(`The driver has the longest name, it has ${hacker1Length} characters`)
} else if (hacker1Length < hacker2Length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2Length} characters`)
} else {
    console.log (`Wow, you both have equally long names, ${hacker2Length}  characters!`)
}

// iteration 3.1

let name = hacker1.toUpperCase().split('').join(' ')
console.log(name)

// iteration 3.2

let nameReverse = reverseString(hacker1)
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

function isPalindrome(phrase)  {
    phrase = phrase.toUpperCase().replaceAll(" ","")
    const reversed = reverseString(phrase);
  
    if (phrase === reversed) {
        return true;
    } else {
        return false;
    }
}

const phrase = prompt('Escribe la frase');

if (isPalindrome(phrase)) {
    alert(`"${phrase}" es un palindromo`);
} else {
    alert(`"${phrase}" no es un palindromo`);
}
