// Iteration 1: Names and Input
const hacker2 = 'Antonio';
const hacker1 = 'Julio';

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(
        `The driver has the longest name, it has ${hacker1.length} characters.`
    );
} else if (hacker2.length > hacker1.length) {
    console.log(
        `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    );
} else {
    console.log(
        `Wow, you both have equally long names, ${hacker2.length} characters!`
    );
}

// Iteration 3: Loops

let hacker1Upper = hacker1.toUpperCase().split('').join(' ');

console.log(hacker1Upper);

let hacker2Reverse = hacker2.split('').reverse().join('');

console.log(hacker2Reverse);

if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
    console.log('Yo, the navigator goes first definitely.');
} else {
    console.log('What?! You both have the same name?');
}

// Bonus 1
const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at cursus eros. Mauris suscipit lectus sed vulputate consectetur. Nunc molestie laoreet felis ac ornare. Mauris ac dui in elit aliquam vestibulum. Suspendisse potenti. Proin vestibulum, diam quis iaculis eleifend, orci ex efficitur ligula, sed laoreet tellus magna nec eros. Pellentesque elementum ipsum a nisi tincidunt posuere. Cras turpis magna, malesuada sed dolor eget, eleifend consectetur ligula. Nunc tincidunt odio quis facilisis semper. Pellentesque molestie rutrum maximus. Maecenas eget nunc mauris. Mauris mauris risus, ullamcorper ut massa id, ullamcorper pellentesque nunc. Nulla facilisi. Praesent tincidunt est ipsum, in malesuada felis lacinia ut. Curabitur malesuada facilisis pulvinar. Praesent sed rhoncus massa, eget egestas mauris. Cras lectus lorem, varius ut eros vitae, sagittis cursus est. Aliquam eu pharetra elit, quis congue ipsum. Nam urna orci, faucibus quis turpis et, pellentesque sodales velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent condimentum libero in vehicula dictum. Vestibulum vestibulum, purus id viverra iaculis, tortor nisi ornare ante, consectetur varius metus turpis nec arcu. Sed feugiat elit in leo tempus mollis. Proin viverra tortor velit, sed pretium justo suscipit ac. Sed sollicitudin purus in erat pulvinar, at tristique ligula viverra. Nam non mi tellus. Vivamus tristique, arcu quis luctus accumsan, purus dolor ultricies orci, in laoreet quam nunc vel turpis. Nunc interdum eros vel massa interdum molestie. Phasellus at velit vel velit scelerisque rhoncus. Suspendisse lacus diam, rhoncus ut mi sed, finibus venenatis turpis. Quisque euismod turpis ex, ut pharetra ligula porttitor et. Praesent in justo id odio aliquet consequat. Ut ornare a justo eu porttitor. Mauris porta ut massa quis maximus. Sed nec interdum arcu, id malesuada diam.';

console.log(lorem.split(' ').length);

let loremArray = lorem.split(' ');
let etCount = 0;
for (let word of loremArray) {
    if (word === 'et') {
        etCount++;
    }
}

console.log(etCount);

// Bonus 2

const phraseToCheck = 'A man, a plan, a canal, Panama!';
let phraseArray = phraseToCheck.toLowerCase();
let newArr = [];

for (let i = 0; i < phraseArray.length; i++) {
    if (
        phraseArray[i] !== ' ' &&
        phraseArray[i] !== '!' &&
        phraseArray[i] !== ',' &&
        phraseArray[i] !== '?' &&
        phraseArray[i] !== "'"
    ) {
        newArr.unshift(phraseArray[i]);
    }
}

const phraseReverse = [...newArr].reverse().join('');

if (newArr.join('') === phraseReverse) {
    console.log('It is a palindrome');
} else {
    console.log('Not a palindrome');
}
