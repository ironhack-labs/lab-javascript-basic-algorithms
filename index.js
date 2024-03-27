// Iteration 1: Names and Input
let hacker1 = "Bill",
    hacker2 = "Bob"

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops

// 3.1
let nameUpperCase = hacker2.toUpperCase(),
    nameSpaces = '';

for (i = 0; i < hacker2.length; i++) {
    nameSpaces += nameUpperCase[i] + ' ';
}

console.log(nameSpaces);

// 3.2
let nameReverse = '';

for (i = hacker2.length; i > 0; i--) {
    nameReverse += hacker2[i - 1];
}

console.log(nameReverse);

// 3.3

const namesToSort = [hacker1, hacker2];
let sortedNames = namesToSort.sort();

if (hacker1 === hacker2) {
    console.log('What?! You both have the same name?');
} else if (sortedNames[0] === hacker1) {
    console.log('The driver\'s name goes first.');
} else if (sortedNames[0] === hacker2) {
    console.log('Yo, the navigator goes first, definitely.');
};


// Bonus 1

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis magna, rutrum et consequat vitae, gravida vitae arcu. Duis ultrices a sapien in bibendum. Nulla facilisi. Sed venenatis eget diam non convallis. Duis est dui, vehicula quis tempus at, rhoncus a eros. Mauris vehicula tristique euismod. In quam elit, mattis et erat non, tempus luctus ligula. Cras at nibh lacus. Donec vehicula commodo purus et venenatis. In hac habitasse platea dictumst. Mauris fermentum aliquet urna id feugiat. Nunc venenatis porttitor sem, quis vulputate neque varius sit amet. Donec in augue a magna iaculis blandit eu tristique enim. Morbi vitae dictum risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
Nulla placerat lacus at volutpat tristique. Nam varius blandit nibh quis aliquet. Mauris faucibus a quam quis tempus. Vestibulum euismod pellentesque est lobortis rutrum. Aliquam volutpat lacus vitae bibendum facilisis. Ut urna neque, fermentum eget rutrum et, vulputate eu enim. Praesent ac arcu cursus, pellentesque turpis sit amet, vehicula augue. Duis id consectetur velit. Aliquam finibus metus porta lorem aliquet condimentum.
In metus erat, imperdiet a vehicula at, tempus finibus lacus. Morbi lacus augue, condimentum in nulla eu, condimentum vehicula lectus. In hac habitasse platea dictumst. Pellentesque bibendum suscipit diam, sed consectetur mauris tincidunt vehicula. Maecenas malesuada pharetra purus nec cursus. In elementum mi quis diam vehicula gravida. Suspendisse eget diam magna. In hac habitasse platea dictumst. Nulla tempus finibus lacinia. Fusce tincidunt ipsum nec purus imperdiet, pulvinar ornare ligula malesuada.`,
  latinWord = 'et';

function countWords(str) {
    return str.trim().split(/\s+/).length;
}

console.log(`Word count = ` + countWords(longText));

let count = 0;

for (i = 0; i < longText.length; i++) {
  const latinWordCount = latinWord.length,
        scanText = longText[i] + longText[i + latinWordCount];

  if (scanText === "et") {
    count++
  };
}

console.log(`Number of occurences for "${latinWord}" = ${count}`);


// Bonus 2

const phraseToCheck = "A man, a plan, a canal, Panama!"

function isPalindrome (phraseToCheck) {
    let phraseLowerCase = phraseToCheck.toLowerCase();
    let phraseWithoutSpaces = phraseLowerCase.replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, "");

    const indexMiddle = phraseWithoutSpaces.length / 2;

    let startSentence = phraseWithoutSpaces.slice(0, indexMiddle + 1),
        endSentence = phraseWithoutSpaces.slice(indexMiddle - 1);

    if (phraseWithoutSpaces.length % 2 === 1) {
        startSentence = phraseWithoutSpaces.slice(0, indexMiddle + 2);
    }

    let endSentenceReverse = '';

    for (i = endSentence.length; i > 0; i--) {
        endSentenceReverse += endSentence[i - 1];
    }

    // console.log(startSentence + ' - ' + endSentenceReverse)

    if (phraseWithoutSpaces.length <= 2) {
        console.log('This sentence is too short to be interesting.');
        return 'This sentence is too short to be interesting.';
    } else if (startSentence === endSentenceReverse) {
        console.log('THIS ACTUALLY IS A PALINDROME');
        return 'THIS ACTUALLY IS A PALINDROME';
    } else {
        console.log('Definitely not a palindrome.');
        return 'Definitely not a palindrome.';
    };
}

isPalindrome(phraseToCheck);
isPalindrome(hacker1);
isPalindrome('this is a sentence');
isPalindrome('Ahhh!!!! hhha.');