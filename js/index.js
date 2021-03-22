
// Iteration 1: Names and Input
let hacker1 = 'Andrea';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Igor';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let longestName = '';
if (hacker1.length > hacker2.length) {
  longestName = hacker1;
  console.log(`The driver has the longest name, it has ${longestName.length} characters`);
} else if (hacker1.length < hacker2.length) {
  longestName = hacker2;
  console.log(`It seems that the navigator has the longest name, it has ${longestName.length} characters`);
} else {
  longestName = hacker1;
  console.log(`Wow, you both have equally long names, ${longestName.length} characters!`);
}

// Iteration 3: Loops
let hacker1WithSpaces = '';
for(let i = 0; i < hacker1.length; i++) {
  hacker1WithSpaces += hacker1.charAt(i);
  if (i == hacker1.length-1)
    break;
  hacker1WithSpaces += ' ';
}

console.log(hacker1WithSpaces.toUpperCase());

let hacker2Reversed = "";
for(let i = hacker2.length-1; i >=0 ; i--) {
    hacker2Reversed += hacker2.charAt(i);
}

console.log(hacker2Reversed);

for(let i = 0; i < longestName.length; i++) {
    if(hacker1.charAt(i) < hacker2.charAt(i)) {
        console.log(`The driver's name goes first.`);
        break;
    } else if(hacker1.charAt(i) > hacker2.charAt(i)) {
        console.log(`Yo, the navigator goes first definitely.`);
        break;
    } else {
        if(i < longestName.length-1)
            continue;
        console.log(`What?! You both have the same name?`);
    }        
}

// Bonus 1
let lorenIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis arcu dapibus, efficitur quam sed, aliquet felis. Fusce luctus massa et augue sollicitudin, vel semper ligula molestie. Nam tristique varius elit, tincidunt hendrerit eros. Sed luctus orci id quam vulputate venenatis. Sed sed accumsan diam. Pellentesque auctor sem nec ligula congue tempor. Nullam finibus velit cursus porttitor elementum. Nam luctus felis ante, ac volutpat lacus lacinia sed. Aliquam egestas mollis sem sit amet vulputate. Etiam in est sed arcu gravida tincidunt in et nibh.

Nulla ut arcu in ante maximus mattis ac id felis. In hac habitasse platea dictumst. Nam mollis finibus mollis. Curabitur tincidunt gravida justo ac elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel nibh mauris. Mauris ut mi id nisl pulvinar vehicula. Quisque est eros, pharetra ut nibh viverra, gravida maximus arcu. Fusce sed pellentesque nunc. Vivamus est lacus, elementum non ultrices non, aliquam eu diam. Vivamus vehicula orci in ultrices commodo. Etiam pharetra vulputate gravida. Ut venenatis leo quis sagittis viverra. Aliquam sagittis maximus est id varius.

Nullam vehicula a felis sit amet dictum. Pellentesque luctus vitae nunc ut tincidunt. Proin sit amet rutrum lorem. Pellentesque felis nulla, tempor ut dui non, hendrerit suscipit eros. Suspendisse potenti. Suspendisse ultrices felis vitae neque volutpat finibus. Donec eget neque eleifend, dapibus velit nec, eleifend velit. Proin sit amet semper nunc. Sed aliquam, turpis id sodales sodales, urna odio rutrum ante, at tristique lacus turpis at urna. Maecenas tellus lacus, rutrum et elit in, tempus sagittis massa. Phasellus mollis ipsum at feugiat venenatis.`

let lorenIpsumWords = [];
let word = '';
for(let i = 0; i < lorenIpsum.length; i++) {
    let c = lorenIpsum.charAt(i);
    switch (c) {
        case '.':
        case '!':
        case '?':
        case ',':
        case ' ':
            if(word.length > 0)
              lorenIpsumWords.push(word);
            word = '';
            break;
        default:
            word += c;
            break;
    }
}

console.log(`The lorenIpsum string has ${lorenIpsumWords.length} words`);

let etCounter = 0;
for (let i = 0; i < lorenIpsumWords.length; i++) {
    if(lorenIpsumWords[i] == 'et')
        etCounter++;
}

console.log(`The word 'et' appears ${etCounter} times in the lorenIpsum string`);