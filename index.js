// Iteration 1: Names and Input

hacker1 = "Miquel";
hacker2 = "Alberto";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let nameLetterSpaces;
for (let i = 0; i < hacker1.length; i++) {
    if (!nameLetterSpaces) {
        nameLetterSpaces = "";
    }
    char = hacker1[i] + " ";
    nameLetterSpaces += char;
}
console.log(nameLetterSpaces);

let nameReverse;
for (let i = hacker1.length - 1; i > -1; i--) {
    if (!nameReverse) {
        nameReverse = "";
    }
    char = hacker1[i];
    nameReverse += char;
}
console.log(nameReverse);


let minLength = Math.min(hacker1.length, hacker2.length);

for (let i = 0; i < minLength; i++) {
    if (hacker1[i] < hacker2[i]) {
        console.log("The driver's name goes first.");
        break;

    } else if (hacker1[i] > hacker2[i]) {
        console.log("Yo, the navigator goes first, definitely.");
        break;

    } else if (i === minLength - 1) {
        if (hacker1.length < hacker2.length) {
        console.log("The driver's name goes first.");

        } else if (hacker1.length > hacker2.length) {
        console.log("Yo, the navigator goes first, definitely.");

        } else {
        console.log("What?! You both have the same name?");
        }
    }
}

// Bonus 1:

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu augue nisl. Duis venenatis, lectus eget consequat tempor, neque velit viverra risus, ac tristique sapien lorem vel ipsum. Curabitur convallis tortor velit, nec euismod odio aliquet nec. Mauris porta leo nisi, a scelerisque purus porttitor aliquam. Aenean a nisl sit amet quam tristique porta non id risus. Donec condimentum, elit in faucibus elementum, massa enim bibendum nibh, gravida tristique quam risus id sapien. Vivamus at elit non est laoreet scelerisque. Etiam elementum posuere mi, ut mollis turpis commodo non. Curabitur varius ligula massa, et sagittis justo sodales et. Etiam tincidunt mauris ac feugiat ultrices. Suspendisse maximus massa nec dolor consequat, id pellentesque lorem tincidunt. Phasellus volutpat quam erat, sed consequat nunc lobortis at. Maecenas tincidunt, velit at ornare pulvinar, ex sem laoreet sapien, ac ornare elit urna eu enim. Donec fermentum ante lobortis augue dictum, ac pellentesque nulla sagittis. Curabitur enim erat, dignissim sed ultricies eu, viverra eu mi. Fusce vulputate eleifend nisl. Nunc et libero dui. Suspendisse iaculis odio et nunc tempor, ac ullamcorper ante tincidunt. Donec risus dolor, suscipit vitae est vestibulum, varius vehicula odio. Mauris placerat nibh a varius scelerisque. Sed consequat fringilla tellus. Curabitur feugiat mauris ut malesuada blandit. In tincidunt est urna, at fringilla leo congue gravida. Cras posuere eleifend velit, eu fermentum velit tincidunt sed. Phasellus fermentum vulputate nisi, id lacinia elit accumsan a. Sed ornare molestie massa, non feugiat quam elementum sit amet. Sed ornare dolor sed mauris blandit finibus. Maecenas a metus sed mauris gravida pharetra. Sed sed magna tristique, imperdiet est vel, dictum eros. Phasellus et feugiat risus. Maecenas imperdiet sapien vitae hendrerit sollicitudin. Donec porta magna at porta scelerisque. Mauris rhoncus neque ligula, ut placerat justo ultricies nec. Aliquam erat volutpat.";

const longTextWords = longText.split(" ");

let sumWords;
for (let i = 0; i < longTextWords.length; i++) {
    if (!sumWords) {
        sumWords = 0;
    }
    word = longTextWords[i];
    sumWords++;
}
console.log(sumWords);


let sumEt;
for (let i = 0; i < longTextWords.length; i++) {
    word = longTextWords[i].toLowerCase();

    if (!sumEt) {
        sumEt = 0;
    }

    if (word === "et") {
        sumEt++;
    }
}
console.log(sumEt);


// Bonus 2:

phraseToCheck = "step on no pets";

function obtainPhrase(phrase) {

    let letters;
    for (let i = 0; i < phrase.length; i++) {
        char = phrase[i];
        if (!letters) {
            letters = "";
        }
        if (char === " ") {
            continue;
        }
        letters += char;
    }
    return letters;
}

function obtainReversePhrase(phrase) {

    let letters;
    for (let i = phrase.length - 1; i > -1; i--) {
        char = phrase[i];
        if (!letters) {
            letters = "";
        }
        if (char === " ") {
            continue;
        }
        letters += char;
    }
    return letters;
}

function isPalindrome (phrase) {
    return obtainPhrase(phrase) === obtainReversePhrase(phrase);
}

console.log(isPalindrome(phraseToCheck));