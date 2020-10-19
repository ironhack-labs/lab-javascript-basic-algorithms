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
let threeParagraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate, augue sit amet blandit tincidunt, lorem lorem ornare ante, vitae rhoncus tortor lorem a ligula. Pellentesque porta vehicula erat id iaculis. Etiam interdum justo dolor, pharetra ornare purus rutrum ut. Sed eu ullamcorper ante. Fusce nisl ipsum, pellentesque ut elit nec, laoreet hendrerit felis. Vivamus tempus dictum fringilla. Cras nec ante eu dui varius auctor sed sed felis. Proin tincidunt diam id sollicitudin posuere. Suspendisse viverra ut diam ut egestas.

Donec dignissim quam id ullamcorper porttitor. In dui augue, feugiat cursus lorem id, commodo hendrerit mi. Donec ac sem ac lorem euismod efficitur. Quisque viverra lectus et cursus tristique. Etiam pretium id sapien non suscipit. In eu risus euismod, elementum felis vel, placerat ligula. Cras accumsan, enim eget consectetur congue, leo arcu dignissim augue, ut malesuada justo lectus vel massa. Mauris facilisis, lectus ut auctor tincidunt, ante ligula mattis odio, sed fermentum libero ipsum vitae felis.

Nullam eget risus vestibulum, pharetra purus eu, iaculis tortor. Aliquam semper quis diam quis tincidunt. Aliquam erat volutpat. Maecenas ac felis id magna mollis blandit. Curabitur dapibus finibus nunc nec ultrices. Integer ut erat et leo malesuada pellentesque nec in ipsum. Morbi vel posuere est. Aenean ac bibendum augue. Curabitur augue est, convallis quis sem id, facilisis molestie justo. Suspendisse potenti. Cras lobortis, velit nec laoreet dignissim, ipsum ligula sollicitudin magna, nec finibus dui mi et tellus.`;
//counting words
function countingWords(str){
    let counter = 0;
    for(let i = 0; i < str.length; i++){
      if(str[i] === ' '){
        counter++;
      }
    }
    counter++;
    return counter;
    }
    console.log(countingWords(threeParagraphs));

//counting 'et'
function countEt(str) {
    let count = 0;
    str = str.split(' ');
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'et') {
            count++;
        }
    }
    return count;
}
console.log(countEt(threeParagraphs));

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


