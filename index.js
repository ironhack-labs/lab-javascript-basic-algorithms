// Iteration 1: Names and Input
const hacker1 = "Victor";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Kurt";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let charResult = "";

for(let i = 0; i < hacker1.length; i++) {
    let char = hacker1[i];
    let upperChar = char.toUpperCase();
    let separateChar = upperChar + " ";

    charResult += separateChar;
};

console.log(charResult);

let inversedChar = '';

for(let i = hacker2.length - 1; i >= 0; i--) {
    let char = hacker2[i];
    inversedChar += char;
}

console.log(inversedChar);

if(hacker1 > hacker2) {
    console.log(`The driver's name goes first.`);
} else if (hacker2 > hacker1) {
    console.log(`Yo, the navigator goes first, definitely.`);
} else if (hacker1 === hacker2) {
    console.log(`What?! You both have the same name?`)
}
//locale-compare string (metodo) - la forma más profesional

//Bono 1
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue leo ipsum, vel eleifend orci imperdiet et. Aenean in dictum nisi, quis hendrerit orci. Integer ac neque nec nisl fermentum viverra a rhoncus lorem. Integer non congue tellus, ac pretium enim. In hac habitasse platea dictumst. Sed sit amet blandit dui. Fusce scelerisque, mauris nec laoreet pretium, augue nunc pellentesque tellus, sed convallis ante lectus sollicitudin metus. Nullam a vulputate urna. Sed tempor nec dui quis interdum. Ut eget nulla sed nulla auctor ullamcorper. In sodales mi sed imperdiet consectetur. Donec volutpat odio id lorem tincidunt, quis tincidunt metus volutpat. Curabitur porttitor vestibulum nunc. Nulla mi odio, dictum id fringilla ac, ornare ullamcorper purus. Nam at ligula id velit faucibus eleifend.

Nulla eros mauris, ultrices at rutrum in, tincidunt et velit. Praesent gravida magna at sapien condimentum pellentesque. Pellentesque vel leo in neque mattis blandit. In in vestibulum ex, id tincidunt orci. Etiam ac dapibus lectus. Vestibulum justo ipsum, tincidunt nec risus sit amet, dapibus feugiat turpis. Mauris auctor sagittis nunc id rutrum. Pellentesque ac lectus non turpis placerat lacinia. Donec consectetur velit eget auctor suscipit.

Nullam at velit vel elit porta laoreet a in quam. Maecenas eget dapibus massa, vulputate commodo metus. Morbi nec dui non elit sagittis viverra. Integer vehicula lorem a enim molestie, sit amet fringilla neque malesuada. Ut sollicitudin, sem vitae laoreet imperdiet, purus erat auctor augue, at placerat libero diam et arcu. Pellentesque eu justo et risus feugiat dignissim. Fusce vel pulvinar ex.`

const textCount = longText.length;
console.log(textCount);

// BONO 1

let charCount = 0;

for(let i = 0; i <= textCount; i++) {
    const twoChars = longText[i] + longText[i + 1];

    if(twoChars === 'et'){
        charCount++;
    }
}

console.log(charCount);

// BONO 2
let phraseToCheck = "race car";

let reversedPhrase = "";

for(let i = phraseToCheck.length - 1; i >= 0; i--) {
    // console.log(phraseToCheck[i]);
    const char = phraseToCheck[i];

    if (char === ' ') {
        continue;
    } else {
        reversedPhrase += char;
    }

};

console.log(reversedPhrase);

