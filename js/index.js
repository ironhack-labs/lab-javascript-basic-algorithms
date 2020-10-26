// Iteration 1: Names and Input
let hacker1 = 'Anna';
console.log("The dirver's name is " + hacker1);
let hacker2 = 'Bob';
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(
        'The driver has the longest name, it has ' + hacker1.length + ' characters.'
    );
} else if (hacker2.length > hacker1.length) {
    console.log(
        'It seems that the navigator has the longest name, it has ' +
        hacker2.length +
        ' characters.'
    );
} else {
    console.log(
        'Wow, you both have equally long names,' + hacker1.length + ' characters!'
    );
}

// Iteration 3: Loops
for (let i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase() + ' ');
}
for (let i = hacker2.length - 1; i >= 0; i--) {
    console.log(hacker2[i]);
}
let comparisson = hacker1.localeCompare(hacker2);

switch (comparisson) {
    case -1:
        console.log("The driver's name goes first.");
        break;
    case 1:
        console.log('Yo, the navigator goes first definitely.');
        break;
    default:
        console.log('What?! You both have the same name?');
}

// bonus 1

let text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisi ligula, sagittis egestas nunc vel, sollicitudin mollis nulla. Quisque fermentum lacus in purus pretium mollis. Curabitur tortor neque, accumsan in malesuada sed, sodales ac diam. Nunc placerat mauris vitae justo auctor, eget imperdiet nulla tincidunt. Pellentesque luctus sit amet ipsum nec efficitur. Nullam eleifend tortor magna, at venenatis augue tincidunt ac. Quisque egestas sed nibh eu tempus. Proin ut placerat eros, vel pulvinar est. Vivamus mollis magna vel ipsum sollicitudin volutpat. Sed faucibus, nisi quis dictum vehicula, velit erat tincidunt tellus, at laoreet lorem sapien egestas sapien. Integer a molestie lectus, eu bibendum mi. Integer volutpat hendrerit libero, eget bibendum augue commodo non. Proin ac lacus blandit, volutpat risus sit amet, varius lorem. Proin sagittis aliquet eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Mauris lorem ex, gravida sed mauris a, iaculis pretium dui. Nullam sed ipsum eu ante fermentum vehicula eu ut dolor. Proin tristique dui ac urna vulputate, sed interdum orci ultrices. Proin sed tellus erat. Curabitur nec lacus sit amet urna mollis euismod at sit amet elit. Ut vitae condimentum ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras nulla metus, consequat sit amet eros in, mollis interdum lorem.Curabitur tincidunt nibh nulla, vitae vestibulum orci ornare at. Vestibulum sodales pretium auctor. Curabitur dapibus in nulla sed facilisis. Ut finibus posuere facilisis. Cras pretium sem eu turpis venenatis, viverra elementum velit rutrum. Fusce dictum et mi vel scelerisque. Curabitur dignissim dolor sed lacinia lacinia. Proin varius, erat at luctus porta, urna lectus fringilla lacus, non faucibus justo orci ut lectus.';

console.log(text);

let words = 0;
console.log(words);

for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
        words++;
    }
}

words += 1;

console.log(words);

let etCtr = 0;

for (let i = 0; i < text.length; i++) {
    if (text[i] === 'e' || text[i] === 'E') {
        if (text[i + 1] === 't') {
            etCtr += 1;
        }
    }
}

console.log(etCtr);

// bonus 2

let phraseToCheck = 'step on no pets';

let phraseModified = '';

for (let i = 0; i < phraseToCheck.length; i++) {
    if (
        phraseToCheck[i].toLocaleUpperCase() >= 'A' &&
        phraseToCheck[i].toLocaleUpperCase() <= 'Z'
    ) {
        phraseModified += phraseToCheck[i].toLocaleUpperCase();
    }
}

console.log(phraseModified);

let palindrome = true;

for (let i = 0; i < phraseModified.length / 2; i++) {
    console.log(phraseModified[phraseModified.length - 1 - i]);
    if (phraseModified[i] === phraseModified[phraseModified.length - 1 - i]) {
        continue;
    } else {
        palindrome = false;
        break;
    }
}

if (palindrome) {
    console.log('The phrase is a palindrome');
} else {
    console.log('Not a palindrome');
}