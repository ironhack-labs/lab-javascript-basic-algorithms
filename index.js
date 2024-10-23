// Iteration 1: Names and Input
const hacker1 = 'Stephan';
const hacker2 = 'Robert';

// console.log(`the navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else  if (hacker1.length < hacker2.length) {
    console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    );
} else {
    console.log('Wow, you both have equally long names, ${hacker1.length} characters!');
}

// Iteration 3: Loops
let capLetters = ""
for (let i = 0; i < hacker1.length; i++) {
    let caps = hacker1[i].toUpperCase();
    capLetters += caps + " ";
}
console.log(capLetters);
//  take out white space without the trim method
let revString = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    revString +=  hacker2[i];
}
console.log(revString);


if (hacker1[0] < hacker2[0]) {
    console.log("Yo, the navigator goes first, definitely.");
    } else if (hacker1[0] > hacker2[0]) {
        console.log("The driver's name goes first.")
    } else {
    console.log('What?! You both have the same name?');
}

const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod at ipsum vel finibus. Vestibulum eget odio eu purus posuere efficitur. Donec mauris metus, efficitur vel tortor ut, pulvinar pharetra diam. Praesent venenatis sit amet lacus nec iaculis. Proin lobortis faucibus luctus. Pellentesque molestie tortor leo, nec pellentesque ligula luctus nec. Phasellus ut pulvinar arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean maximus ipsum ut purus lobortis, sed sagittis eros scelerisque. Nunc vitae augue placerat, rhoncus ante vitae, vestibulum mi. Duis dapibus hendrerit elit, et congue mi blandit nec. Aliquam erat volutpat. Ut ante nunc, tempus vitae placerat vitae, efficitur et lorem. Sed bibendum nulla arcu, at blandit felis aliquet at .Suspendisse ullamcorper diam ac fermentum pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam dictum ipsum a pellentesque convallis. Etiam volutpat aliquam purus ac tristique. Nunc euismod nibh vel nisi scelerisque semper. Sed mollis malesuada ante quis ullamcorper. Nulla lacinia et neque in varius. Sed convallis felis quis feugiat gravida. Aliquam luctus suscipit posuere.Maecenas orci leo, consectetur at mattis at, mattis nec sapien. Nulla ac ante quis mauris molestie tempor ac quis neque. Aliquam vehicula justo cursus est gravida, molestie mollis felis convallis. Donec aliquam consequat sem, ac sodales eros. Proin neque turpis, interdum eu convallis non, efficitur eget leo. Praesent vehicula turpis sit amet viverra ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque eget quam et lectus fringilla semper. Duis tincidunt orci sit amet nibh elementum, eu rutrum augue posuere. Praesent tempus tristique nunc. Integer vel velit in enim tincidunt mattis id ut eros. Praesent hendrerit a turpis sed feugiat. Vivamus pulvinar efficitur metus vitae interdum. Sed sagittis turpis urna, a viverra nunc euismod sed. et. et .'

let wordCount = 1;
for (let i = 0; i < longText.length; i++) {
    if (longText[i] === ' ') {
        wordCount += 1;
    }

}
console.log(wordCount);


let etCount = 0;


for (let i = 0; i < longText.length; i++) {
    if (longText[i - 1] === ' ' && longText[i] === 'e' && longText[i + 1] === 't' && /\W/.test(longText[i + 2])
    ) {
      etCount += 1;
    }

}
console.log(etCount);


let phraseToCheck = 'A man, a plan, a canal, Panama';
let reverseString = '';

    for (let i = phraseToCheck.length - 1; i >= 0; i--) {
        reverseString += phraseToCheck[i];


}
let original = phraseToCheck.replace(/\s+/g, '').toLowerCase();
let newString = reverseString.replace(/\s+/g, '').toLowerCase();

if (newString === original) {
        console.log('It is a palidrome phrase');
    } else {
        console.log('Not a palidrome phrase');
    }
