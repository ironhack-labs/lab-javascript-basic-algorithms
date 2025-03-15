// Iteration 1: Names and Input
let hacker1 = "Leo"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Mila"
console.log(`The driver's name is ${hacker2}`)

// Iteration 2: Conditionals
const str = [hacker1, hacker2];


if (str[0].length > str[1].length) {
    console.log(`The driver has the longest name, it has XX characters'`);
} else if (str[0].length < str[1].length) {
    console.log(`Wow, you both have equally long names, XX characters!`);
} else {
    console.log(`Both strings have the same length`);
}

// Iteration 3: Loops
// 3.1
const upperCase = `${hacker1}`.split('').join(' ');;
console.log(upperCase.toUpperCase());

// 3.2
function ReverseString(str) {
    return str.split('').reverse().join('')
}
console.log(ReverseString(`${hacker2}`))

// 3.3
if (hacker1 < hacker2) {
    console.log(`${hacker1} The driver's name goes first ${hacker2} `);
} else if (hacker1 > shacker2) {
    console.log(`Yo, the navigator goes first, definitely`);
} else {
    console.log(`What?! You both have the same name?`);
}


// Bonus 1

const longText = `
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.

Proin malesuada molestie dignissim. Etiam ornare lacinia enim, vel gravida est cursus congue. Suspendisse potenti. Quisque id ex accumsan turpis maximus cursus. Curabitur at vehicula magna. Vivamus vel dapibus libero. Nulla purus massa, rhoncus et magna lacinia, congue pellentesque mi.
`;


const wordToCount = "et";
let wordCount = 0;
let currentIndex = 0;

while (currentIndex !== -1) {
    currentIndex = longText.indexOf(wordToCount, currentIndex);
    if (currentIndex !== -1) {
        wordCount++;
        currentIndex += wordToCount.length;
    }
}


console.log(wordCount);
