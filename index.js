// Iteration 1: Names and Input

// 1.1 Create a variable `hacker1` with the driver's name.

const hacker1 = "Miguel";

// 1.2 Print `"The driver's name is XXXX"`.

console.log(`The driver's name is ${hacker1}`);

// 1.3 Create a variable `hacker2` with the navigator's

const hacker2 = "Pouria";

console.log(`The navigator name is ${hacker2}`);


// Iteration 2: Conditionals

// 2.1. Depending on which name is longer, print:

const hacker1Length = hacker1.length;
const hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) {
    console.log(`The driver has the longest name, it has ${hacker1Length} characters.`)
}
else if (hacker1Length < hacker2Length) {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`)
}

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals
const hacker1Capitalized = hacker1.toUpperCase();

const hacker1Letters = hacker1Capitalized.split("");

console.log(hacker1Letters)

// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

const hacker2Letters = hacker2.split("");
const hacker2Reversed = hacker2Letters.reverse();
const hacker2String = hacker2Reversed.join("");

console.log(hacker2String);


// 3.3 Depending on the lexicographic order of the strings, print:

const hacker1Lexicographic = hacker1Letters.sort();
const hacker2Lexicographic = hacker2Letters.sort();

if (hacker1Lexicographic > hacker2Lexicographic) {
    console.log("The driver's name goes first.")
} 
else if (hacker1Lexicographic < hacker2Lexicographic) {
        console.log("Yo, the navigator goes first, definitely.")
} else {
    console.log("What?! You both have the same name?");
}

//Bonus 1:


const longText = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque sed nulla nec ultrices. Morbi ac ultricies mi. Nulla facilisi. Ut placerat lorem nunc, quis rhoncus arcu auctor ac. Maecenas sed neque pulvinar sem convallis dignissim et finibus nunc. Quisque efficitur rutrum arcu ac dapibus. Sed in pharetra mauris.

    Phasellus et ante nec velit faucibus fringilla. Cras magna risus, dapibus sit amet venenatis ut, ultricies non eros. Mauris sit amet lacinia lorem. Maecenas eget purus ultrices, lobortis lectus eget, ultrices lacus. Aliquam sed diam ac dolor gravida ultrices. Integer quis tempus lectus. Proin nec malesuada elit, ac sagittis sem. Nam in arcu risus. Donec fringilla hendrerit ex, vitae commodo sem scelerisque et.
´
    Aenean vitae semper enim. Vestibulum semper  velit eu magna interdum, eget congue dui aliquet. Morbi aliquam mi leo, ac pulvinar leo pulvinar quis. Donec sodales lectus turpis, ut auctor est vestibulum sit amet. Donec ac ultricies odio. Curabitur feugiat risus sem, gravida congue justo luctus vel. Nunc eleifend sodales condimentum. Maecenas et ornare nisi. Proin sit amet consectetur ipsum. Morbi gravida, lacus et lobortis luctus, augue ipsum convallis purus, non pulvinar sem nunc eu tortor.`

const words = longText.split(" ");
const numOfWords = words.length;

console.log(numOfWords)

let count = 0

function getLatin(words) {
    
    for (let i = 0; i < words.length; i++) {
        if (words[i] === "Latin") {
            count++;
        }
    }
    return count
}

const latin = getLatin(words);
console.log(latin)


// Bonus 2:


const phraseToCheck = "A man, a plan, a canal, Panama";

const cleanedPhrase = phraseToCheck.toLowerCase().replace(/[^a-z0-9]/g, '');

let isPalindrome = true;

for (let i = 0; i < cleanedPhrase.length / 2; i++) {
    
  if (cleanedPhrase[i] !== cleanedPhrase[cleanedPhrase.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log(`${phraseToCheck} is a palindrome.`);
} else {
  console.log(`${phraseToCheck} is not a palindrome.`);
}

