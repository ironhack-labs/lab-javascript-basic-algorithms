/* LAB | JS Basic Algorithms
// ------------------------------------------------------------------------------------------------------------- //

[Iteration 1: Names and Input]
1.1 Create a variable hacker1 with the driver's name.
1.2 Print "The driver's name is XXXX".
1.3 Create a variable hacker2 with the navigator's name.
1.4 Print "The navigator's name is YYYY".

// ------------------------------------------------------------------------------------------------------------- //

[Iteration 2: Conditionals]
2.1. Depending on which name is longer, print:
    * The driver has the longest name, it has XX characters. or
    * It seems that the navigator has the longest name, it has XX characters. or
    * Wow, you both have equally long names, XX characters!.

// ------------------------------------------------------------------------------------------------------------- //

[Iteration 3: Loops]
3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

3.3 Depending on the lexicographic order of the strings, print:
    * The driver's name goes first.
    * Yo, the navigator goes first, definitely.
    * What?! You both have the same name?

// ------------------------------------------------------------------------------------------------------------- //

[Bonus Time!]

[Bonus 1]
- Go to the lorem ipsum generator website and:
    * Generate 3 paragraphs. Store the text in a new string variable named longText.
    * Make your program count the number of words in the string.
    * Make your program count the number of times the Latin word et appears.

[Bonus 2]
- Create a new variable, phraseToCheck, containing some string value. Write a code to check if the value assigned to this variable is a Palindrome. 

    * Here are some examples of palindromes:
        "A man, a plan, a canal, Panama!"
        "Amor, Roma"
        "race car"
        "stack cats"
        "step on no pets"
        "taco cat"
        "put it up"
        "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// ------------------------------------------------------------------------------------------------------------- */

// Iteration 1: Names and Input
function namesHackers_one(hacker1, hacker2) {

    console.log("The driver's name is " + hacker1);
    console.log("The navigator's name is " + hacker2);
}

// Iteration 2: Conditionals
function namesLongest_two(lengthHacker1, lengthHacker2) {
    
    if (lengthHacker1 > lengthHacker2) {
        console.log("The driver has the longest name, it has " + lengthHacker1 + " characters.");
    } else if (lengthHacker1 < lengthHacker2) {
        console.log("It seems that the navigator has the longest name, it has " + lengthHacker2 + " characters.");
    } else {
        console.log("Wow, you both have equally long names, " + lengthHacker1 + " characters!.");
    }
}

// Iteration 3: Loops
function namesPrint_Spaced_UpperCase(hacker1, lengthHacker1) {

    for (let i = 0; i < lengthHacker1; i++) {
        console.log(hacker1[i].toUpperCase());
        if (i < lengthHacker1 - 1) {
            console.log(" ");
        }
    }
}

function namesPrint_Reverse(hacker2, lengthHacker2) {
    
    for (let i = lengthHacker2 - 1; i >= 0; i--) {
        console.log(hacker2[i]);
    }
}

function namesLexOrder(hacker1, hacker2) {
    
    if (hacker1.toLowerCase() < hacker2.toLowerCase()) {
    console.log("The driver's name goes first.");
    } else if (hacker1.toLowerCase() > hacker2.toLowerCase()) {
    console.log("Yo, the navigator goes first, definitely.");
    } else {
    console.log("What?! You both have the same name?");
    }
}

function namesLoops_three(hacker1, lengthHacker1, hacker2, lengthHacker2) {

    namesPrint_Spaced_UpperCase(hacker1, lengthHacker1);
    namesPrint_Reverse(hacker2, lengthHacker2);
    namesLexOrder(hacker1, hacker2);
}

// Bonus 1: Largo de un String

function countWords_et(longText) {
    let words = longText.toLowerCase().split(" ");
    let wordsCount = words.length;
    let etCount = 0;
    let wordsFinalCount = 0;

    for (let i = 0; i < wordsCount; i++) {
        if (words[i] == " ") {
            continue;
        }
        else if (words[i] == "\n") {
            continue;
        }
        else if (words[i] == "") {
            continue;
        }
        else if (words[i].toLowerCase().includes("et") == true) {
            etCount++;
            wordsFinalCount++;
            continue;
        }
        else {
            wordsFinalCount++;
        }
    }
    console.log("The number of words in the text is: " + wordsFinalCount);
    console.log("The word 'et' appears " + etCount + " times in the text.");
}

// Bonus 2: Comprobación de Palíndromos

function isPalindrome(phraseToCheck) {
    
    let wordsPhraseToCheck = phraseToCheck.toLowerCase();
    let phraseCleaned = "";
    let isPalindrome = false;
    
    // Remove spaces and convert to lowercase
    for (let i = 0; i < wordsPhraseToCheck.length; i++) {

        if (wordsPhraseToCheck[i] == " " || wordsPhraseToCheck[i] == "\n" || wordsPhraseToCheck[i] == "") {
            // Ignoro espacios
            continue;
        }
        else if (wordsPhraseToCheck[i] == "." || wordsPhraseToCheck[i] == "," || wordsPhraseToCheck[i] == "!" || wordsPhraseToCheck[i] == "?") {
            // Ignoro puntuación
            continue;
        }
        else if (wordsPhraseToCheck[i] == "'" || wordsPhraseToCheck[i] == "-" || wordsPhraseToCheck[i] == ":") {
            // Ignoro otros caracteres
            continue;
        }
        else {
            phraseCleaned += wordsPhraseToCheck[i];
        }
    }

    // Invierto la frase
    let phraseReversed = "";
    for (let i = phraseCleaned.length - 1; i >= 0; i--) {
        phraseReversed += phraseCleaned[i];
    }

    // Compruebo si es palíndromo
    if (phraseReversed == phraseCleaned) {
        isPalindrome = true;
    } else {
        isPalindrome = false;
    }

    // Condición de palíndromo. Output en consola
    if (isPalindrome == true) {
        console.log("It's a palindrome!");
    } else {
        console.log("It's not a palindrome.");
    }
}

function bonusPart() {
    // Bonus 1
    let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum turpis fermentum mi gravida eleifend. Phasellus faucibus nunc sed accumsan rutrum. Nullam lobortis purus sit amet eleifend blandit. Suspendisse lectus lectus, sodales nec fermentum et, ornare a sem. Integer rutrum sapien vestibulum velit tincidunt pharetra. Sed ullamcorper tempus semper. Vivamus vehicula arcu id blandit tincidunt.\nPraesent ullamcorper mauris odio, sed dictum odio cursus non. Cras sem mauris, sollicitudin ac faucibus at, congue id libero. Nulla elit mauris, tincidunt sed ultrices ut, tempor vel neque. Phasellus varius nec nulla sit amet vestibulum. Aliquam sed ipsum dapibus, maximus nunc ut, consectetur nulla. Aenean vestibulum est quam, in gravida justo maximus at. Integer fringilla efficitur arcu id ultrices. Suspendisse potenti. Sed id est tincidunt, sodales ante non, volutpat turpis. Morbi viverra dui quis porttitor consequat. Fusce volutpat volutpat neque, non accumsan neque finibus a.\nInteger sodales tellus ipsum, non mattis nisi iaculis eu. Nulla tincidunt ut erat quis consequat. Vivamus mollis vestibulum nulla, ac imperdiet metus imperdiet at. Praesent molestie mattis mi, a consectetur libero viverra eget. Vivamus porta pellentesque neque eget suscipit. Sed blandit viverra elementum. Mauris id lacus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec fringilla augue ac viverra elementum. Integer ultricies pharetra interdum. Quisque libero risus, hendrerit at dapibus in, dignissim non purus. Ut in diam urna. Nulla nec urna vitae risus laoreet lobortis. Curabitur lorem lacus, tincidunt nec lorem ac, gravida elementum mauris. Maecenas vel rutrum dui. Aliquam diam nibh, tincidunt eget est feugiat, luctus auctor turpis.";

    countWords_et(longText);

    // Bonus 2
    let phraseToCheck = "C Assnns s AC";
    
    isPalindrome(phraseToCheck);
}  

// ----- [!] Main program ----- \\

const hacker1 = "Kiko24";
const hacker2 = "AchoPijo42";

let lengthHacker1 = hacker1.length;
let lengthHacker2 = hacker2.length;

while (true) {
    // Selecciono el ejercicio a comprobar
    let choice = prompt("Which section do you want to review? ([1] for Iterations / [2] for Bonus part). Write 'exit' to leave the program. Choose: ");
    switch (choice) {
        case "1":
            namesHackers_one(hacker1, hacker2);
            namesLongest_two(lengthHacker1, lengthHacker2);
            namesLoops_three(hacker1, lengthHacker1, hacker2, lengthHacker2);
            break;
        case "2":
            bonusPart();
            break;
        case "exit":
            console.log("Terminating the program. Goodbye!");
            break;
        default:
            console.log("Not valid. Chose and option: 1 or 2. Or write 'exit' to leave the program.");
    }
    // Salgo del bucle si escribo 'exit'
    if (choice === "exit") {
        break;
    }
}