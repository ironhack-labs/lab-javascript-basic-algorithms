/********************************/
/* Iteration 1: Names and Input */
/********************************/

// Print name of driver
let hacker1 = 'Micaela';
console.log(`The driver's name is ${hacker1}`);

//Print name of navigator
let hacker2 = 'Antonio';
console.log(`The navigator's name is ${hacker2}`);


/*****************************/
/* Iteration 2: Conditionals */
/*****************************/

//Print longest name
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else if (hacker2.length === hacker1.length) {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}


/**********************/
/* Iteration 3: Loops */
/**********************/

for (let i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase());
}

for (let i = hacker2.length - 1; i >= 0; i--) {
    console.log(hacker2[i].toUpperCase());
}


//  Compare the lexicographic order of the names 
if ((hacker1.localeCompare(hacker2)) < 0) {
    console.log("The driver's name goes first.");
}

if ((hacker1.localeCompare(hacker2)) > 0) {
    console.log("Yo, the navigator goes first definitely.");
}

if ((hacker1.localeCompare(hacker2)) === 0) {
    console.log("What?! You both have the same name?");
}


/********************/
/* Bonus exercise 1 */
 /*******************/

let longString = 
`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis auctor risus quis pulvinar. In scelerisque scelerisque eleifend. Donec in nisi nec erat eleifend ultrices sed nec tellus. Quisque in ligula nunc. Duis suscipit, metus laoreet pellentesque finibus, odio sapien iaculis elit, a lobortis dui odio ut mi. Curabitur pretium aliquet ex id faucibus. Morbi turpis odio, malesuada sit amet molestie ac, feugiat quis diam. Proin et sem ut nulla fringilla eleifend lacinia a lacus. Duis suscipit egestas scelerisque. Nullam fringilla, elit eu sagittis dapibus, dolor est fermentum massa, in porttitor sapien libero eu ligula. In vitae risus vitae arcu varius tempor sed ac purus.

Morbi vel libero pharetra, pellentesque mi id, pellentesque turpis. Etiam risus erat, porttitor quis vulputate ac, porttitor molestie neque. Donec efficitur ultrices arcu a faucibus. Aenean bibendum sapien quis sem luctus, vitae bibendum magna aliquet. Quisque posuere felis vel ipsum ullamcorper molestie. Vivamus laoreet eleifend vestibulum. Integer maximus libero in sem pretium convallis. In mattis blandit massa mattis condimentum. Phasellus in ligula quis nisi aliquet dictum. Maecenas id semper sapien.

Vestibulum sed interdum lorem, vitae tristique ante. In hac habitasse platea dictumst. Integer dignissim quam in mi porta porta. Sed malesuada quam iaculis odio tincidunt, non pellentesque tellus euismod. Duis vel purus justo. Donec vel sapien ut purus tincidunt egestas vitae ut ipsum. Sed malesuada dui at mattis vulputate. In commodo ipsum id interdum tincidunt. Aenean sit amet pharetra diam. Ut dignissim mauris quis tincidunt maximus. Mauris id ante eu eros egestas maximus a vel elit. Donec at massa porta, varius felis et, aliquam ipsum. Vivamus nec lorem at lacus blandit dignissim in eget libero. Maecenas vel nibh nunc. Phasellus porttitor eleifend bibendum.
`

 // Count the number of words in the string 
 let numberWords = longString.split(' ').length;
 console.log(numberWords);

 // Count the number of times the Latin word et appears
 let wordsLongString = longString.split(' ');

 let counter = 0;

 for (let i = 0; i < wordsLongString.length; i++) {
    if (wordsLongString[i].includes("et")) {
        counter++;
    }
 }

 console.log(counter);


 /*********************/
 /* Bonus exercise 2 */
 /*********************/

 // Check if the value we assigned to this variable is a Palindrome

 let phraseCheck = 'A man, a plan, a canal, Panama!';

 let phraseCheckFormatted = phraseCheck.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'').replace(/\s/g,'');
 let reversePhrase = '';

 for (let i = phraseCheckFormatted.length - 1; i >= 0 ; i--) {
    reversePhrase += phraseCheckFormatted[i];
 }

 if (phraseCheckFormatted === reversePhrase) {
    console.log(`'${phraseCheck}' is a Palindrome!`);
 }
 else {
    console.log("The phrase is not a palindrome!");
 }




