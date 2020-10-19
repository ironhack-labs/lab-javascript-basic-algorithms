//jshint esversion:6
// Iteration 1: Names and Input

let hacker1 = 'Lucy';
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = 'Patrick';
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
let driverNameLength = hacker1.length;
let navigatorNameLength = hacker2.length;

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${driverNameLength} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${navigatorNameLength} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${driverNameLength} characters!`);
}

// Iteration 3: Loops
//print name by space and in capitals
let newStrCapitals = '';
for (let i = 0; i < hacker1.length; i++) {
    newStrCapitals += hacker1[i].toUpperCase() + ' ';
}
console.log(newStrCapitals);

//reverse driver's name
let newStrReversed = '';
for (let i = hacker1.length - 1; i >= 0; i--) {
    newStrReversed += hacker1[i];
}
console.log(newStrReversed);

//print the name in lexicographic order of the strings
let longestName = '';
if (hacker1.length > hacker2.length) {
    longestName = hacker1;
} else {
    longestName = hacker2;
}
if (hacker1 === hacker2) {
    console.log('What?! You both have the same name?');
}
for (let i = 0; i < longestName.length; i++) {
    if (hacker1[i] === hacker2[i]) {
        continue;
    } else if (hacker1[i] < hacker2[i]) {
        console.log('The driver\'s name goes first.');
        break;
    } else {
        console.log('Yo, the navigator goes first definitely.');
        break;
    }
}


// Bonus Time!
// Bonus 1:
let threeParagraphs = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum justo id nunc bibendum tempus. Vestibulum vel quam et elit ultrices pellentesque a vitae turpis. Mauris sollicitudin dolor quam, nec finibus elit rhoncus sed. Suspendisse consectetur auctor ultrices. Etiam blandit nec dui nec hendrerit. Aenean euismod condimentum ornare. Ut gravida dui dolor, in aliquet nisl pulvinar eget. Aenean lobortis mattis leo in porttitor. Mauris et risus orci. Aliquam consequat nisl non sapien consequat tempus. Nunc volutpat maximus purus, scelerisque vulputate nibh cursus ut. Vivamus elementum eleifend ante nec iaculis. Cras tempus pretium erat, et tempus mauris mattis nec. Sed libero nisi, tempor ac suscipit ac, tempus nec urna. Donec et sodales lorem. Pellentesque eget mollis odio. Nullam ut magna at nisi aliquam malesuada. Cras euismod, nisi condimentum faucibus aliquet, turpis velit porta felis, eget interdum mi enim sed sapien. Nullam at feugiat justo. Curabitur fringilla libero sapien, id condimentum ante luctus nec. Sed dapibus metus justo, eu convallis libero hendrerit et. Phasellus est ex, tincidunt nec ultrices eu, ornare at arcu. In sodales feugiat tincidunt. Suspendisse semper diam at vulputate laoreet. Praesent a hendrerit mauris. Fusce vel tellus et felis rutrum commodo nec non ipsum. Nam in mauris quis lorem sodales faucibus. Morbi venenatis, metus quis placerat elementum, nulla lacus efficitur ex, eget mattis lectus nibh id elit. Nulla fringilla tempor ex, at convallis mauris bibendum vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec nisi elit, fringilla in lorem eu, hendrerit varius mauris. Quisque eu nisi ullamcorper, vulputate orci non, interdum sem. Donec sodales luctus volutpat. Pellentesque sed imperdiet lectus. Duis lobortis venenatis sem ac maximus.';
function countingWords() {
    let counter = 0;
    for (let i = 0; i < threeParagraphs.length; i++) {
        if (threeParagraphs[i] === ' ') {
            counter++;
        }
    }
    counter++;
    return counter;
}
console.log(countingWords(threeParagraphs));


//bonus 2
let phraseToCheck = 'race car';
let newStr = '';
for (let i = 0; i < phraseToCheck.length; i++) {
    if (phraseToCheck[i] !== ' ' && phraseToCheck[i] !== '?' && phraseToCheck[i] !== ',') {
        newStr += phraseToCheck[i];
    }
}
let reverseString = '';
for (let i = newStr.length - 1; i >= 0; i--) {
    reverseString += newStr[i];
}
newStr === reverseString ? 'I am a palindrome' : 'I am not a palidrome';


