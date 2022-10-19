// Iteration 1: Names and Input

console.log("I'm ready.")

let hacker1 = "Travis";
let hacker2 = "Captain Cook"

let hackerLength = hacker1.length;
let hacker2Length = hacker2.length;

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hackerLength > hacker2Length) {
    console.log(`The driver has the longest name, it has ${hackerLength} characters.`);
}
else if (hackerLength < hacker2Length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`);
}

else {
    console.log("Wow, you both have equally long names, ")
}

// Iteration 3: Loops
// 3.1

let strName = "";

for(let i = 0; i < hackerLength; i++) {
    strName += hacker1.charAt(i) + " ";
}
console.log(strName.toUpperCase());

//3.2
let reverse = "";

for(let i = hacker2Length-1; i >= 0; i--) {
    reverse += hacker2[i];
}
console.log(reverse);

// 3.3 Comparison
let a = hacker1.localeCompare(hacker2);

if(a === -1) {
    console.log(`The driver's name goes first`)
} else if (a === 1 ) {
    console.log(`Yo, the navigator goes first definetely`)
} else {
    console.log("What?! You both have the same name?")
}

/* Bonus 1 */
/*  Lorem ipsum number of words counter */

let loremStr = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis dolorum aliquam id cum vero doloremque illum officia error vel, omnis, rem veritatis dolore quidem nisi et aperiam repudiandae atque eaque. Debitis itaque, fugiat deleniti sed culpa ducimus. Saepe, laudantium velit, amet maiores itaque ducimus cupiditate quod soluta excepturi ea dolor consectetur nulla sapiente sit expedita in, cumque quos magnam incidunt! Consequatur ad autem quam rem quibusdam doloremque tempora fugiat libero, temporibus hic quidem officia laboriosam earum eos. Tenetur, quae quasi nam eveniet officiis doloremque. In eos labore debitis voluptas rerum."
let counter = 0;
let etCounter = 0;
for(let i = 0; i <= loremStr.length; i++) {
    if(loremStr.charAt(i) == " ") {
        counter++;
    }
}

console.log(counter);

/* Number of times "et" appears */
const loremArr = loremStr.split(" ");

for(word of loremArr) {
    if (word == "et") {
        etCounter++;
    }
}
console.log(etCounter);

/* Bonus 2 */

/* Palindrome checker */

let phraseToCheck = "Storkower strasse"

function palindromeChecker(word) {
    word = word.toLowerCase();
    word = word.replaceAll(",", "");
    word = word.replaceAll("!", "");
    word = word.replaceAll(".", "");

    word = word.split(" ").join("");

    let wordArr = word.split("");
    let reverseArr = wordArr.reverse();

    let reversedWord = reverseArr.join("");

    return word === reversedWord;
}

/* -----------------------------------------------------------*/


function palindromeCheckerLooped (word) {
    let trimmedWord = word.replace(/[^0-9a-z]/gi, '').toLowerCase().split("");
    trimmedWord = trimmedWord.join("");

    let trimmedWordReverse= "";
    for(let i = trimmedWord.length-1; i >= 0; i--) {
        trimmedWordReverse += trimmedWord[i];
    }
    return trimmedWord === trimmedWordReverse;
}
palindromeChecker ("Amor, Roma!");
palindromeCheckerLooped ("Amor, Roma!");



