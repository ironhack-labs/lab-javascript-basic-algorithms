// Iteration 1: Names and Input

// 1.1
var hacker1 = 'Martina';

// 1.2
console.log(hacker1);

// 1.3
var hacker2 = 'Tormento';

// 1.4
console.log(`The navigator's name is ${hacker2}`);




// // Iteration 2: Conditionals

// 2.1
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length - 1} characters`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length - 1} characters`);
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length - 1} characters!`);
}




// Iteration 3: Loops

// 3.1
let capitalidezName =''
for (char of hacker1) {
    capitalidezName += char.concat(' ').toUpperCase();
}
console.log(capitalidezName);

// 3.2
let reversedName = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
    reversedName += hacker2[i].concat('');
}
console.log(reversedName)

// 3.3
if (hacker1.localeCompare(hacker2) === 0) {
    console.log('What?! You both have the same name?')
} else if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.")
} else {
    console.log("Yo, the navigator goes first, definitely.")
}



// Bonus 1

// Generate 3 paragraphs. Store the text in a new string variable named longText.
var longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et vestibulum arcu, ut fringilla dolor. Vestibulum hendrerit scelerisque ipsum, aliquam tempus lorem faucibus ac. Sed id dolor id lectus commodo placerat. Mauris quis efficitur lacus. Curabitur malesuada a velit nec dictum. Aenean tempor ex augue, sed sagittis sapien placerat eu. Nulla id dui fermentum nisi aliquam porta eget at sapien. Aliquam eleifend, quam vel egestas accumsan, velit est congue metus, a feugiat est elit id diam. Nullam dictum nec nunc in semper. Sed odio purus, efficitur ac faucibus id, finibus ut neque. Cras in faucibus felis, eu vehicula ligula. Duis auctor mauris nec eros elementum molestie. Nam ut tortor sit amet ipsum placerat scelerisque eget sit amet enim. Aenean nec odio nibh. Pellentesque lobortis erat mi, eu hendrerit odio congue vel. Praesent tortor velit, bibendum ac turpis et, varius lacinia dolor.

Mauris et condimentum risus. Nulla facilisi. Aenean in mattis est, imperdiet rhoncus orci. Vivamus neque magna, vulputate a dapibus in, dapibus eget metus. Aenean ultrices libero quis purus ullamcorper malesuada id rutrum massa. Donec nec dignissim magna, ac dictum augue. Mauris non tortor eget dui suscipit iaculis non non magna. Vestibulum quis lectus non ligula facilisis cursus vitae quis nisl. In porttitor quis tellus in sollicitudin. Nulla ac augue et justo luctus pharetra. Praesent ullamcorper magna non nibh tempor, sit amet dictum neque vestibulum. Vestibulum ac tincidunt velit. Curabitur et vehicula mauris, ac lacinia ligula.

Duis quam tellus, lacinia at turpis pharetra, aliquam porttitor diam. Cras at dolor massa. Integer non ipsum auctor nibh rhoncus bibendum in sed magna. Nullam mollis turpis ut orci dapibus, sed finibus est elementum. Vestibulum ornare magna ullamcorper, semper lorem non, interdum mauris. Aliquam elementum velit orci, ac dignissim metus condimentum tempus. Vivamus non nisi commodo, elementum orci at, dignissim felis. Quisque at eros id dui tincidunt ultrices.`

// word counter
let wordCounter = 0;

for (let i = 0; i < longText.length; i++) {
    if (longText[i] === ' ') {
        wordCounter += 1;
    }
}

console.log(wordCounter);


// et counter

let etCounter = 0;

let wordToFind = ' et';

let wordIndex = longText.indexOf(wordToFind);

console.log(`wordIndex ---> ${wordIndex}`);

console.log(longText.slice(wordIndex, wordIndex + wordToFind.length))



// Bonus 2

let phraseToCheck = 'A man, a plan, a canal, Panama!'

let phraseToCheck1 = phraseToCheck.toLocaleLowerCase().replaceAll(' ','').replaceAll(',','').replaceAll('!','')

let phraseToCheck2 = '';

for (let i = phraseToCheck1.length - 1; i >= 0; i--) {
    phraseToCheck2 += phraseToCheck1.toLocaleLowerCase()[i]
};

if (phraseToCheck1.localeCompare(phraseToCheck2) === 0) {
    console.log(`Yes, "${phraseToCheck}" is palindrome.`)
} else {
    console.log(`No, "${phraseToCheck}" is NOT palindrome.`)
}

