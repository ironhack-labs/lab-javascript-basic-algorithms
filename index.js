/* Iteration 1: Names and Input
1.1 Create a variable hacker1 with the driver's name.
1.2 Print "The driver's name is XXXX".
1.3 Create a variable hacker2 with the navigator's name.
1.4 Print "The navigator's name is YYYY".
*/

let hacker1 = 'Ramiro';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Nuria';
console.log(`The navigator's name is ${hacker2}`);

/* Iteration 2: Conditionals
2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.
*/

let count1 = hacker1.length;
let count2 = hacker2.length;
if (count1 > count2) {
    console.log(`The driver has the longest name, it has ${count1} characters.`);
} else if (count1 < count2) {
    console.log(`It seems that the navigator has the longest name, it has ${coiunt2} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${count1} characters!`);
}

/* Iteration 3: Loops
3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
3.3 Depending on the lexicographic order of the strings, print:
The driver's name goes first.
Yo, the navigator goes first, definitely.
What?! You both have the same name?
*/

console.log(hacker1.toUpperCase().split("").join(" "));

console.log(hacker2.split("").reverse().join(""));

if (hacker1 > hacker2) {
    console.log(`The driver's name goes first.`);
} else if (hacker1 < hacker2) {
    console.log(`Yo, the navigator goes first, definitely.`);
} else {
    console.log(`What?! You both have the same name?`);
}

/*Bonus 1:
Go to the lorem ipsum generator website and:
Generate 3 paragraphs. Store the text in a new string variable named longText.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.
*/ 

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas auctor enim et cursus.
Fusce vulputate maximus dolor, sed commodo sapien sagittis eget. Aliquam purus eros, ultrices vitae consectetur vel, hendrerit et diam.
Fusce erat sapien, accumsan non rhoncus vitae, tincidunt sit amet lacus. Sed pharetra ex faucibus fringilla dapibus. Mauris elementum ac ipsum et bibendum.
Ut auctor luctus nisi, eu ornare est tincidunt vitae. Duis tempus augue ut aliquam laoreet. Integer in venenatis neque. Sed et dui nec purus placerat varius.
Nunc at rutrum leo. Phasellus varius massa eget libero lobortis condimentum. Integer interdum consectetur massa gravida tempus.
Vivamus eros justo, pharetra sit amet est porttitor, congue consequat arcu. Proin justo ipsum, molestie commodo consectetur a, congue at nisl. Ut cursus nulla libero, non iaculis diam varius pretium.
Maecenas nec diam facilisis, mattis sapien lobortis, auctor neque. Proin imperdiet nec augue nec facilisis. Quisque augue est, interdum eget lacus at, facilisis sollicitudin ligula. Aenean non dolor magna.
Phasellus convallis iaculis lorem nec consequat. Quisque iaculis ante magna, quis imperdiet justo iaculis posuere.
Quisque molestie turpis ut tincidunt fringilla. Nunc convallis, lacus nec ullamcorper fermentum, velit orci facilisis lorem, ac vestibulum tellus justo nec leo.
Nulla dignissim hendrerit quam,faucibus nulla interdum a. Nulla velit leo, pulvinar in magna id, placerat gravida libero. Integer ligula sapien, pharetra dictum neque et, dapibus fringilla ante.
Sed dignissim sem porttitor nisl ornare malesuada. Donec leo justo, varius vel auctor a, laoreet non tellus. Vivamus in iaculis enim. Nunc non dui rhoncus, aliquam libero fringilla, ultricies turpis.
Curabitur eget nulla accumsan tellus hendrerit scelerisque. Duis libero dolor, tristique eu dui sit amet, rhoncus tincidunt mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
Curabitur sagittis tortor sollicitudin, ultricies nisi vitae, fermentum purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed non orci a magna pretium hendrerit eget ultricies libero
 Nulla nec arcu vitae urna molestie feugiat et et ipsum.`;

console.log(longText.split(" ").length); /*separo solo por esapcios*/
let words = longText.split(/\s+/); /*separo según espacio en blanco, tabs y líneas nuevas*/
console.log(words.length);
let etwords = words.filter(word => word === "et")
let etcount = etwords.length;
console.log(etcount);

/*
Bonus 2:
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

Happy coding! ❤️
*/

let phraseToCheck = "A man, a plan, a canal, Panama!";
let cleanedPhrase = "";

// Limpio la frase
for (let i = 0; i < phraseToCheck.length; i++) {
    let char = phraseToCheck[i]; /*Obtengo la letra*/
    let lowerChar = char.toLowerCase(); /*La convierto a minúsculas*/
    
    // Filtro todo lo que no es una letra
    if ((lowerChar >= "a" && lowerChar <= "z") && (lowerChar != " ")) {
        cleanedPhrase += lowerChar
    } 
}
console.log(cleanedPhrase);

// Chequeo si la frase limpia es un palindromo
let isPalindrome = true;
for (let i = 0; i < cleanedPhrase.length / 2; i++) {
    if (cleanedPhrase[i] !== cleanedPhrase[cleanedPhrase.length-1-i]) {
        isPalindrome = false
        break;
    } 
}

// Imprimo el resultado
if (isPalindrome == true) {
    console.log('"' + phraseToCheck + '"', "is a palindrome.");
} else {
    console.log("The phrase is not a palindrome.");
}
