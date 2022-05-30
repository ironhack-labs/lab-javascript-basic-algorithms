// Iteration 1: Names and Input
let hacker1 = 'Dan';
console.log(`The driver's name is ${hacker1}.`)
let hacker2 = 'Linda';
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log('The driver has the longest name, it has ' + hacker1.length + ' characters.')
} else if (hacker2.length > hacker1.length) {
    console.log('It seems that the navigator has the longest name, it has ' + hacker2.length + ' characters.')
} else {
    console.log('Wow, you both have equally long names, + hacker1.lenght + characters!')
}
// Iteration 3: Loops
let capitalHacker = hacker1.toUpperCase().split("").join(" ")
console.log(capitalHacker)

let reverseHacker = hacker2.split("").reverse().join("")
console.log(reverseHacker)


alphabeticalOrder = hacker1.localeCompare(hacker2);
console.log(alphabeticalOrder);

if (alphabeticalOrder == -1) {
    console.log("The driver's name goes first.")
} else if (alphabeticalOrder == 1) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}

// Bonus1:

function getWordCount(str) {
    return str.split(' ')
      .filter(function(n) { return n != '' })
      .length;
}
let text = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.'
console.log(getWordCount(text));

console.log(text.split("et").length - 1);

// Bonus2:

function checkPalindrome(str) {
    const len = phraseToCheck.length;
    for (let i = 0; i < len / 2; i++) {
        if (phraseToCheck[i] !== phraseToCheck[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

const phraseToCheck = 'step on no pets';
const value = checkPalindrome(phraseToCheck);
console.log(value);