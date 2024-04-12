// Iteration 1: Names and Input
const hacker1 = "pedro";
console.log("The driver's name is " + hacker1);

const hacker2 = "franc";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters");
} else {
    console.log("Wow, you both have equally long names " + hacker1.length);
}

// Iteration 3: Loops
let result1 = "";
for (let i = 0; i < hacker1.length; i++) {
    result1 += hacker1.charAt(i).toUpperCase() + " ";
}
console.log(result1);

let result2 = "";
for (let i = 0; i < hacker1.length; i++) {
    result2 += hacker1.charAt(hacker1.length - i);
}
console.log(result2 + hacker1.charAt(0));

// Bonus 1
let counter = 0;
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
const wordsText = text.split(/\s+/);
console.log(wordsText);
for (let i = 0; i < wordsText.length; i++) {
    if (wordsText[i].includes("et")) {
        counter++;
    }
}
console.log("The word et appears " + counter + " times");

// Bonus 2
function isPalindrome(word) {
    word = word.toLowerCase().replace(/[^a-z]+/g, '');
    const invertedPhrase = word.split('').reverse().join('');
    return word === invertedPhrase;
}
const phraseToCheck = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(phraseToCheck));
