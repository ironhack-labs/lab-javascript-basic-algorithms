// Iteration 1: Names and Input

let hacker1 = "Magda";
let hacker2 = "Daniela";

console.log(`The driver's name is ${hacker1}.`)
console.log(`The navigator's name is ${hacker2}.`)


// Iteration 2: Conditionals

const driverLength = hacker1.length;
const navigatorLength = hacker2.length;

    if (driverLength > navigatorLength) {
         console.log(`The driver has the longest name, it has ${driverLength} characters.`);
     } else if (navigatorLength > driverLength) {
         console.log(`It seems that the navigator has the longest name, it has ${navigatorLength} characters.`);
     } else {
         console.log(`Wow, you both have equally long names, ${driverLength} characters!`);
     } 

// Iteration 3: Loops

let nameUpperC = "";

for (let i = 0; i < driverLength; i++) {
     
   nameUpperC += hacker1[i] + " ";
}


console.log(nameUpperC.toUpperCase());


let navigatorReverse="";

for (let i = (navigatorLength-1); i >= 0; i--) {

    navigatorReverse += hacker2[i];
}

console.log(navigatorReverse);



/* if (hacker1.toLowerCase() === hacker2.toLowerCase()) {
    console.log("What?! You both have the same name?")
} else if (hacker1.toLowerCase() > hacker2.toLowerCase()) {
    console.log("Yo, the navigator goes first, definitely.")
} else {
    console.log("The driver's name goes first.")
} */


let nameOrder = hacker1.toLowerCase().localeCompare(hacker2.toLowerCase());

if (nameOrder === 1) {
    console.log("Yo, the navigator goes first, definitely.")
}
else if (nameOrder === -1) {
    console.log("The driver's name goes first.")
}
else {
    console.log("What?! You both have the same name?")
}

/* Bonus 1 */

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tellus at mi luctus hendrerit vitae eleifend lorem. Suspendisse arcu neque, commodo eu gravida nec, elementum et nulla. Maecenas blandit dui at velit euismod pellentesque. Quisque nec ipsum vel ligula tristique consectetur. Maecenas at vehicula enim. Vivamus suscipit tortor vitae varius aliquet. Ut iaculis, purus eget pulvinar consequat, sapien risus cursus tellus, at lobortis nisi est vitae quam. Sed blandit purus vel quam pretium sagittis. Morbi sit amet tellus placerat, fermentum orci vel, eleifend ante. Phasellus luctus elit et sem varius interdum at sit amet urna.

Proin ut massa felis. Cras vitae eleifend dolor. Curabitur velit nunc, rhoncus ac euismod ut, suscipit ac urna. Nam suscipit lorem in est fringilla, luctus commodo nibh commodo. Nunc lacinia augue ornare, faucibus magna a, sodales neque. Aenean eu turpis semper nulla sollicitudin aliquet. Aliquam aliquet fringilla mi, et maximus ante tincidunt posuere. Duis vel sem odio. Vestibulum efficitur sapien nec mi facilisis, sit amet semper eros gravida. Donec convallis lacinia condimentum. Vivamus ullamcorper non dui at mollis. Maecenas pulvinar elit convallis, eleifend nibh eu, dapibus felis. Vestibulum blandit, diam sed pretium vulputate, nunc elit varius mauris, id pharetra erat est imperdiet lectus. Donec ac arcu in tortor placerat eleifend. In enim arcu, congue ultricies lectus vel, consectetur dignissim risus. Nulla vulputate velit non diam vestibulum accumsan.

Suspendisse fermentum, eros vitae porttitor elementum, est mauris pharetra nisi, ac semper est ante a urna. In quis velit vitae risus porttitor scelerisque. Mauris porta dui enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed eu libero purus. Integer elementum diam at urna molestie, id fermentum est facilisis. Fusce feugiat mauris lectus, convallis sodales erat efficitur in. Praesent pharetra et sem vel gravida. Ut consectetur non felis at lacinia.`

let wordsSum = ""

for (let i = 0; i < longText.length; i++ ) {
    if (longText[i] === " ") {
        wordsSum++;
    }
}

console.log(wordsSum+3);


/* Bonus 2 */

let phraseToCheck = "A man, a plan, a canal, Panama!";


let noSpacePhrase ="";

for (let i=0; i < phraseToCheck.length; i++) {
    if (phraseToCheck[i] === " " || phraseToCheck[i] === "," || phraseToCheck[i] === "." || phraseToCheck[i] === "?" || phraseToCheck[i] === "!") {
        continue;
    } else {
    noSpacePhrase += phraseToCheck[i]
    }
}

noSpacePhrase = noSpacePhrase.toLowerCase();


let reversePhrase ="";

for (let i=(noSpacePhrase.length - 1); i >= 0; i-- ) {
    reversePhrase += noSpacePhrase[i];
}



if (noSpacePhrase === reversePhrase) {
    console.log(`${phraseToCheck} is a palindrome!`)
} else {
    console.log(`${phraseToCheck} is not a palindrome!`)
}


/* Is there a build in function that checks if the letter is a letter not a special character? */



