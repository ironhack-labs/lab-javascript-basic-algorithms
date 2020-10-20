// 1 Names and Input

const hacker1 = 'Da';
console.log(`The driver's name is ${hacker1}.`);
const hacker2 = 'Dama';
console.log(`The navigator's name is ${hacker2}.`);

// 2 Consitionals

if (hacker1.length > hacker2.length) {
    console.log(`${hacker1} has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that ${hacker2} has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
};


// 3 Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let results = '';
for (i = 0; i < hacker1.length; i++) {
    results += hacker1[i].toUpperCase() + ' ';
}
console.log(results);
console.log(results.trim())
console.log(results.slice(0, results.length-1))

// changed the methods from hacker1.charAt(i) to hacker[i], can access string with index directly

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
// Note: Addition(+) for strings equals strings concatenation 

// backwards for loop
let reverse = '';
for (i = hacker2.length - 1; i >= 0; i--) {
    reverse = reverse + hacker2[i];
    // reverse = reverse.concat(hacker2[i];
}
console.log(reverse);

// forwards for loop
// let reverse = '';
// for (i = 0; i <= hacker2.length - 1; i++) {
//     reverse = reverse + hacker2[hacker2.length-(i+1)];  
// }
// console.log(reverse);


// 3.3 Depending on the lexicographic order of the strings, print: 

if (hacker1.length < hacker2.length) {
    for (i = 0; i < hacker1.length; i++) {
        if (hacker1[i] < hacker2[i]) {
            console.log(`${hacker1} goes first.`);
            break;
        } else if (hacker1[i] > hacker2.charAt(i)) {
            console.log(`Yo, ${hacker2} goes first definitely.`);
            break;
        };
    };
    console.log(`${hacker1} goes first.`);
} else if (hacker1.length > hacker2.length) {
    for (i = 0; i < hacker2.length; i++) {
        if (hacker1[i] < hacker2[i]) {
            console.log(`${hacker1} goes first.`);
            break;
        } else if (hacker1[i] > hacker2[i]) {
            console.log(`Yo, ${hacker2} goes first definitely.`);
            break;
        };
    };
    console.log(`Yo, ${hacker2} goes first definitely.`)
} else {
    for (i = 0; i < hacker1.length; i++) {
        if (hacker1[i] < hacker2[i]) {
            console.log(`${hacker1} goes first.`);
            break;
        } else if (hacker1[i] > hacker2[i]) {
            console.log(`Yo, ${hacker2} goes first definitely.`);
            break;
        } else if (hacker1[i] === hacker2[i] && i === hacker1.length-1) {
            console.log(`What?! You both have the same name?`);
        };
    };   
}

// localeCampare


// Bonus 1: 
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.

const nparagraphs = 2; // Numbers of paragraphs (need to be defined by user, because at the end of the paragraphs there is no space.)
const paragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat dapibus bibendum. Morbi venenatis sodales leo id posuere. Donec scelerisque libero eu sodales pharetra. Integer leo ipsum, hendrerit ut tincidunt nec, posuere id augue. Nulla ut sapien a tellus placerat fringilla quis non mauris. Vestibulum faucibus sed est a viverra. Vivamus vitae lobortis velit, vitae viverra nibh. Nullam sed sollicitudin leo. Vivamus euismod convallis sapien, sit amet ullamcorper justo dictum sit amet. Fusce eget turpis at nisi molestie rutrum nec iaculis massa.

Nunc iaculis, libero eget pellentesque dignissim, odio ex porttitor odio, non varius magna diam eget purus. Vestibulum ac lorem felis. Nullam et dui tellus. Donec a velit mollis, aliquam velit id, aliquam ante. Fusce vehicula, ligula at mattis tincidunt, neque est elementum ex, a rutrum metus felis sed tellus. Morbi auctor ornare velit, euismod venenatis nibh dignissim sit amet. Proin porta cursus est.

Vivamus suscipit tempus metus in tincidunt. Aenean iaculis et neque id finibus. Nullam eu suscipit elit. Proin non ipsum sit amet erat convallis tempus. Suspendisse rutrum nunc vitae porttitor suscipit. Nam consectetur sagittis pulvinar. Pellentesque pellentesque accumsan enim, et auctor dolor rutrum vel. In sit amet nisi ac eros blandit congue. Integer varius massa vel molestie mattis. Nunc vehicula libero at ipsum varius aliquet in a leo. Aenean cursus justo vitae quam varius eleifend. Ut vehicula vehicula lacus, ut dictum purus feugiat pellentesque. Praesent dignissim lorem ac finibus congue.`

console.log(paragraphs);

// count words
let wordCount = 0;
for (i = 0; i < paragraphs.length; i++) {
    if (paragraphs[i] === ' ') {
        wordCount += 1;
    };
};
console.log(wordCount + 1 + nparagraphs); // words are 1 more than space, paragraphs don't have space.

// count 'et' ??
let foundEt = 0;
for (i = 0; i < paragraphs.length; i++) {
    if (paragraphs.toLowerCase[i] === 'e' && paragraphs[i+1] === 't' && paragraphs[i-1] === ' ' && paragraphs[i+2] === ' ') {
        foundEt += 1;
    }
}
console.log(foundEt)

