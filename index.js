// Iteration 1: Names and Input
const hacker1 = 'Cristian';
const hacker2 = 'Raúl';

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters!`)
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters!`)
}

// Iteration 3: Loops
// Create an auxiliar variable with an empty string inside.
// Then use a for of loop to iterate over the string, and assign
// the letter that it takes in each iteration to the empty string
// plus a white space next to it. 
let hacker1Uppercase = "";

for (const letter of hacker1) {
    hacker1Uppercase += letter.toUpperCase() + " ";
}

// Create an auxiliar variable with an empty string inside.
// Again, use a for of loop to iterate over the string and store
// each letter inside the empty string in each iteration. This way
// is useful to store each letter in reverse order. 
console.log(hacker1Uppercase);

let hacker2Reverse = "";
for (const letter of hacker2) {
    hacker2Reverse = letter + hacker2Reverse;
}

console.log(hacker2Reverse)

//We can use a if conditional statement to check the three possibilities.
//Using the .localCompare() method and knowing how it works,
//we can determine if one string goes before another one in a 
//lexicographic context. 
if(hacker1.localeCompare(hacker2) === -1) {
    console.log(`The driver's name goes first because ${hacker1.charAt(0)} comes before ${hacker2.charAt(0)}.`);
} else if(hacker1.localeCompare(hacker2) === 1) {
    console.log(`Yo, the navigator goes first definitely because ${hacker2.charAt(0)} comes before ${hacker1.charAt(0)}.`);
} else {
    console.log(`What? You both have the same name?!`);
}

//Iteration 4 BONUS TIME :)
//Bonus 1
//If we check MDN documentation we can see that the .split() function
//takes a pattern and divides a string into a list of substrings and 
//puts them into an array. So, knowing that, we can just separate our
//words by telling split to literally split them when it finds a blank 
//space. We store each word in an array and then we can simply use the
//.lenght to know how many words we have. 
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo cursus diam, ac hendrerit enim auctor sed. Suspendisse feugiat, neque sit amet condimentum accumsan, massa sapien facilisis purus, sed auctor elit nulla quis tellus. In venenatis lorem ac nunc congue, id dignissim nisl porttitor. Praesent in pharetra erat. In hac habitasse platea dictumst. Quisque mattis sagittis leo, et hendrerit tortor viverra nec. Proin ac felis at magna rutrum dictum. Donec vulputate tellus a faucibus interdum. In iaculis posuere purus, sed luctus elit maximus non. Donec pharetra elit sit amet sollicitudin gravida. Donec in placerat orci, id elementum purus. Suspendisse vel justo id dolor feugiat cursus nec sed felis. Nullam efficitur non mi nec tincidunt. Nunc sit amet sollicitudin ligula. Proin a quam eu ante ullamcorper tempus eget at arcu.
Fusce a dolor eleifend, dignissim mauris sed, faucibus libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et tellus id lorem aliquam molestie non tristique lorem. Phasellus consectetur, sem a congue suscipit, erat neque consequat nunc, sed viverra tortor diam ac ipsum. Ut sodales dapibus scelerisque. Vestibulum dui justo, aliquam a nisi nec, pretium convallis erat. Quisque viverra dapibus lectus viverra pretium. Donec vel orci sit amet dolor viverra mattis. Vivamus magna enim, ornare ut facilisis eget, vulputate at mi. Quisque non odio eget nunc ullamcorper consequat. Vivamus at consectetur purus. Etiam feugiat velit sed nunc varius, at porttitor sem tempus. In vel eros viverra, porttitor justo et, pulvinar turpis. Etiam ullamcorper ante quis ex pharetra vehicula.`;

const wordsArray = longText.split(" ");

console.log(`${wordsArray.length}`);

//Bonus 2
const phraseToCheck = 'amor roma';

function checkPalindrome(phrase) {
    phrase.toLowerCase();
    const phraseLength = phrase.length;
    for(let i = 1; i < phraseLength / 2; i++) {
        if(phrase[i] !== phrase[phraseLength - 1 - i]) {
            return `This is not a palindrome!`
        }
    }
    return `You found a palindrome!`
}

const palindromeChecked = checkPalindrome(phraseToCheck);
console.log(palindromeChecked);