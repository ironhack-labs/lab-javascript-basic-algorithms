console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = 'Samuel';

console.log(`The driver's name is ${hacker1}.`);

let hacker2 = 'Bill';

console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longer name. It has ${hacker1.length} characters.`);
}

else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
// Iteration 3: Loops
let spaces = '';
for (let i = 0; i < hacker1.length; i++) {
    spaces += hacker1[i].toUpperCase() + ' ';
}
console.log(spaces);

let backwards = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
    backwards += hacker2[i];
}

console.log(backwards);

function nameOrder(driverName, navName) {
    if (driverName < navName) {
        return `The driver's name goes first.`;
    }

    else if (navName < driverName) {
        return `Yo, the navigator goes first definitely.`;
    }

    else {
        return `What?! You both have the same name?`;
    }
}

console.log(nameOrder(hacker1, hacker2));

//BONUS 1

const loremText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum, augue sed pellentesque faucibus, mi justo rutrum lorem, eget mattis purus dui ut ex. Praesent ut metus nec tortor venenatis feugiat. Duis semper lobortis tortor, id viverra dolor tristique quis. Nulla consequat at sapien gravida mattis. Nunc dolor justo, viverra at enim ac, finibus tempus lectus. Nulla mattis lorem eget nisl finibus tincidunt. Morbi aliquam justo ac erat rhoncus, id convallis erat pharetra. Suspendisse potenti. Nulla vulputate non nunc ac gravida. Curabitur accumsan id sapien et efficitur. Sed convallis rutrum tellus, ut rhoncus nisi eleifend sagittis. Etiam vel justo porta, tristique neque at, gravida leo.

Aliquam bibendum magna at vehicula malesuada. Cras interdum egestas tempor. Aenean felis enim, sagittis at cursus nec, maximus eget eros. Proin pretium mi eu nulla vestibulum, faucibus lacinia quam varius. In posuere laoreet est in pharetra. Fusce nec erat eget purus imperdiet vulputate. Quisque rutrum tristique lorem id faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis ac massa sed blandit. Sed consequat vel odio ac pretium. Nunc turpis tellus, accumsan ut metus vel, sagittis semper leo. Mauris turpis tortor, tristique at mi vel, tristique tincidunt ante. Morbi vulputate venenatis ex et maximus.

In faucibus convallis dictum. Vestibulum nec sagittis eros. Quisque lobortis est eu nisi dapibus, quis viverra felis aliquet. Etiam rutrum non quam nec laoreet. Duis iaculis nec orci non efficitur. Nunc eget finibus mi. Nam vel tempor turpis. Sed bibendum eu arcu sit amet ultricies. In sagittis, orci ut pellentesque auctor, libero sem dictum justo, ac condimentum erat nibh quis arcu.`

function count(str) {
    return str.split(" ").length;
}

console.log(count(loremText));

//BONUS 2

let phraseToCheck = 'A man a plan a canal Panama';
phraseToCheck = phraseToCheck.toLowerCase();
phraseToCheck = phraseToCheck.replaceAll(' ','');
let palindrome = '';


function palindromeCheck(phrase) {

for (let i = phrase.length - 1; i >= 0; i--) {
    palindrome += phrase[i];
}
if (phrase == palindrome) {
    console.log('This is a palindrome!');
}
else {
    console.log('Not a palindrome :(.');
}
}

palindromeCheck(phraseToCheck);