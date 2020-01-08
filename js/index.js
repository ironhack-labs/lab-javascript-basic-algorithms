// Iteration 1: Names and Input
const hacker1 = "Shannon";
console.log(`The driver's name is ${hacker1}.`);

const hacker2 = "Anthony";
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`);
} else console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`);

// Iteration 3: Loops

let newDriverName = '';
for (let i = 0; i < hacker1.length; i++) {
    newDriverName += hacker1[i].toUpperCase() + ' ';
}
console.log(newDriverName);

let newNavigatorName = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
    newNavigatorName += hacker2[i];
}
console.log(newNavigatorName);

function compareNames(driver, navigator) {
    const doNotComeFirst = driver.localeCompare(navigator);
    if (doNotComeFirst === -1) return "The driver's name goes first.";
    else if (doNotComeFirst === 1) return "Yo, the navigator goes first definitely.";
    else return "What?! You both have the same name?";
}

console.log(compareNames(hacker1, hacker2));

// Bonus 1
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis commodo est ullamcorper ligula malesuada finibus.Vivamus aliquam purus in sem feugiat, tincidunt lobortis velit gravida.Ut ut rutrum eros.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Nam placerat ornare auctor.Ut non ex in velit pellentesque ultricies at vulputate est.Mauris ultrices lacinia leo eu ultricies.Etiam et elit id lacus sodales elementum a eu dui.Phasellus commodo euismod rutrum.Ut at sapien luctus, mattis risus eu, ultricies urna.Nulla hendrerit urna sed nibh tincidunt mollis.Duis posuere sapien at justo venenatis, sed luctus quam malesuada.Sed tempor, nisl et auctor mollis, quam justo volutpat leo, vel ornare nulla diam eu dolor.

Quisque venenatis vulputate sapien eget facilisis.Phasellus in massa vel leo tincidunt aliquam id at dui.Aenean venenatis diam vitae dolor aliquam, sit amet vestibulum turpis eleifend.Integer dolor tellus, cursus at mattis vitae, porta et nibh.Nulla justo libero, sagittis nec finibus ac, luctus nec arcu.Proin at metus est.Curabitur porta elementum consectetur.Vestibulum congue luctus nisi sed luctus.Nullam ac velit tristique, posuere nulla sit amet, faucibus nulla.Etiam sit massa.Vivamus blandit enim suscipit, dignissim magna in, pharetra neque.

Aliquam eget ligula vel turpis tempor viverra et fermentum dolor.Cras at nisi et ante cursus suscipit et vitae nisi.Quisque at felis commodo, sodales magna vel, sagittis velit.Duis porttitor rhoncus nisl, id faucibus velit luctus et.Fusce cursus, orci sit amet malesuada dignissim, nibh massa dapibus ante, at rutrum arcu justo eu elit.Ut ullamcorper ligula et augue commodo, in congue diam pretium.Aliquam id rhoncus neque, id rutrum tellus.Integer iaculis ac lorem sit amet euismod.`

function getWordCount(paragraph) {
    return lorem.split(' ').length;
}

console.log(getWordCount(lorem));

function countSpecificWord(searchWord, paragraph) {
    const words = paragraph.split(' ');
    const result = words.filter(word => word === searchWord);
    return result.length;
}

console.log(countSpecificWord("et", lorem));

// Bonus 2
const phraseToCheck = `race car`;

function isPalindrome(phrase) {
    let cleanPhrase = phrase.replace(/[^a-zA-Z]/g, "").toLowerCase().split('');
    console.log(cleanPhrase);
    let isPalindrome = true;
    for (let i = 0; i < cleanPhrase.length; i++) {
        if (cleanPhrase[i] !== cleanPhrase[cleanPhrase.length - i - 1]) {
            isPalindrome = false
            break;
        }
    }
    return isPalindrome ? `'${phrase}' is a palindrome` : `'${phrase}' is not a palindrome`;
}

console.log(isPalindrome(phraseToCheck));