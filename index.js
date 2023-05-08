

// 1.1 Create a variable hacker1 with the driver's name.
const hacker1Input = document.getElementById("driver");
let hacker1 = ""

// 1.2 Print "The driver's name is XXXX".
const spanDriver = document.getElementById("driver-name")

// 1.3 Create a variable hacker2 with the navigator's name.
const hacker2Input = document.getElementById("navigator");
let hacker2 = ""

// 1.4 Print "The navigator's name is YYYY".
const spanNavigator = document.getElementById("navigator-name")

/*2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.*/

const driverLettersNumber = document.getElementById("driver-letters")
const navigatorLettersNumber = document.getElementById("navigator-letters")
const result2 = document.getElementById("result2")

// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
const result3f = document.getElementById("result3.1")

//3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

let result3s = document.getElementById("result3.2")

/*3.3 Depending on the lexicographic order of the strings, print:

The driver's name goes first.
Yo, the navigator goes first, definitely.
What?! You both have the same name?*/

let result3t = document.getElementById("result3.3")

//Funciones
function firstExercice() {

    hacker1 = hacker1Input.value
    hacker2 = hacker2Input.value

    //Exercice 3.1
    let newHacker1 = '';
    for (i = 0; i < hacker1.length; i++) {
        let temp = '';
        temp = hacker1[i].toUpperCase() + ' ';
        newHacker1 = newHacker1 + temp;
    }

    // Exerccice 3.2
    let newHacker2 = '';
    for (i = hacker2.length - 1; i >= 0; i--) {
        let temp = '';
        temp = hacker2[i];
        newHacker2 = newHacker2 + temp;
    }

    if (hacker1.value === '' || hacker2.value === '') {
        alert("Debe introducir los nombres de los hackers")
    } else {

        spanDriver.innerHTML = hacker1
        spanNavigator.innerHTML = hacker2

        driverLettersNumber.innerHTML = hacker1.length
        navigatorLettersNumber.innerHTML = hacker2.length

        //Exercice 2
        let result2Value = ""
        if (hacker1.length > hacker2.length) {
            result2Value = `The driver has the longest name, it has ${hacker1.length} characters`
        } else if (hacker1.length < hacker2.length) {
            result2Value = `The navigator has the longest name, it has ${hacker2.length} characters`
        } else {
            result2Value = `Wow, you both have equally long names, ${hacker1.length} characters!`
        }
        result2.innerHTML = result2Value

        //Resultado Ejercicio 3.1
        result3f.innerHTML = `Remember! the name of the driver is ${hacker1} ... I mean ${newHacker1} 🫡`;
        //Resultado Ejercicio 3.2
        result3s.innerHTML = `and the navigator is ${newHacker2} ... I mean ${hacker2} 😜`;
        // Ejercicio 3.3
        let result3Value = ""
        if (hacker1.localeCompare(hacker2) === -1) {
            result3Value = "The driver's name goes first."
        } else if (hacker1.localeCompare(hacker2) === 1) {
            result3Value = "The navigator goes first, definitely."
        } else {
            result3Value = "What?! You both have the same name?"
        }
        resultSection = document.getElementById("result-section")
        result3t.innerHTML = result3Value;

        //Mostrar los resultados
        resultSection.style.display = "block";
    }
}
const excercicesButton = document.getElementById("excercices")
excercicesButton.addEventListener("click", firstExercice)

//Bonus 1
/*Go to the lorem ipsum generator website and:
Generate 3 paragraphs. Store the text in a new string variable named longText.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.*/

const inputBonus1 = document.getElementById("bonus1");
const wordNumber = document.getElementById("words-number");
const etNumer = document.getElementById("et-number");
const resultBonus1 = document.getElementById("result-bonus1")


function bonusUno() {
    let longText = inputBonus1.value;

    let count = 0
    for (let i = 0; i < longText.length; i++) {
        if (longText[i].includes(" ")) {
            count++;
        }
    }
    wordNumber.innerHTML = count + 1;

    let countLet = 0;
    for (let i = 0; i < longText.length; i++) {
        if (longText[i].includes('E') || longText[i].includes('e')) {
            if (longText[i + 1].includes('t')) {
                countLet++;
            }
        }
    }
    etNumer.innerHTML = countLet;

    resultBonus1.style.display = "block";
}
const buttonBonus1 = document.getElementById("button-bonus1");
buttonBonus1.addEventListener('click', bonusUno);

/*Bonus 2
Create a new variable, phraseToCheck, containing some string value. Write a code to check if the value assigned to this variable is a Palindrome. Here are some examples of palindromes:

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".
IMPORTANT: If you use Google to help you to find a solution to this iteration, you might run into some advanced solutions that use string or array methods (such as join(), reverse(), etc.). However, we want you to apply your current knowledge and try to come up with a solution by just using the for loop and if-else statements with some break and continue.
*/
const inputBonus2 = document.getElementById("bonus2")
const resultBonus2 = document.getElementById("result-bonus2")

function bonusDos() {

    let phraseToCheck = inputBonus2.value
    let palindrome1 = ''
    let palindrome2 = ''

    for (let i = phraseToCheck.length - 1; i >= 0; i--) {
        let temp = ''
        if (phraseToCheck[i] === ',' || phraseToCheck[i] === ' ') {
            continue
        } else {
            temp = phraseToCheck[i].toLowerCase()
            palindrome1 = palindrome1 + temp
        }
    }

    for (let i = 0; i < phraseToCheck.length; i++) {
        let temp = ''
        if (phraseToCheck[i] === ',' || phraseToCheck[i] === ' ') {
            continue
        } else {
            temp = phraseToCheck[i].toLowerCase()

            palindrome2 = palindrome2 + temp
        }
    }

    if (palindrome1 === palindrome2) {
        resultBonus2.innerHTML = `The sentense "${phraseToCheck}" is a palindrome,`
    } else {
        resultBonus2.innerHTML = `The sentense "${phraseToCheck}" is NOT a palindrome,`
    }
    event.preventDefault();
}

const buttonBonus2 = document.getElementById("button-bonus2");
buttonBonus2.addEventListener("click", bonusDos)
