console.log("Im ready!");
// 1.1-1.2-1.3-1.4 Create a variable `hacker1` with the driver's name, navigator's name & print it.
const hacker1 = "Vinh";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Patrick";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(
        `Driver has a longest name, it has ${hacker1.length} characters.`
    );
} else if (hacker1.length < hacker2.length) {
    console.log(
        `It seems the navigator has a longest name, it has ${hacker2.length} characters.`
    );
} else {
    console.log(
        `Well, you both have equally long name ${hacker1.length} characters.`
    );
}

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals

let hacker1Big = "";

for (let i = 0; i < hacker1.length; i++) {
    if (i == hacker1.length - 1) {
        hacker1Big += hacker1[i].toUpperCase();
        break;
    }
    hacker1Big += hacker1[i].toUpperCase() + ` `;
}
console.log(hacker1Big);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let hacker2Big = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
    hacker2Big += hacker2[i];
}

console.log(hacker2Big);

// 3.3 Depending on the lexicographic order of the strings, print.

if (hacker1[0] > hacker2[0]) {
    console.log("Yo, the navigator goes first definitely.");
} else if (hacker1[0] < hacker2[0]) {
    console.log("The driver's name goes first.");
} else {
    console.log("What?! You both have the same name?");
}

// Bonus Time!
// Bonus 1: Go to lorem ipsum generator

let loremIpsum =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.";

let loremIpsumWords = 0;
let loremIpsumEts = 0;

for (let i = 0; i < loremIpsum.length; i++) {
    if (loremIpsum[i] === " ") {
        loremIpsumWords++;
    }
    if (
        loremIpsum[i] === "e" &&
        loremIpsum[i + 1] === "t" &&
        loremIpsum[i - 1] === " " &&
        loremIpsum[i + 2] === " "
    ) {
        loremIpsumEts++;
    }
}
console.log(loremIpsumWords);
console.log(loremIpsumEts);

// Bonus 2: Create a new variable phraseToCheck and have it contain some string value.

let words = "No 'x' in Nixon";

function isPalindrome(str) {
    let leftToRight = "";
    let rightToLeft = "";

    for (let i = 0; i < str.length; i++) {
        const c = str[i].toLowerCase();
        const isAlphaNum = (c >= "a" && c <= "z") || (c >= "0" && c <= "9");

        if (!isAlphaNum) {
            continue;
        }

        leftToRight += c
        rightToLeft = c + rightToLeft;
    }

    return leftToRight == rightToLeft
}

if (isPalindrome(words)) {
    console.log("It's a palindrome");
} else {
    console.log("It's not a palindrome");
}