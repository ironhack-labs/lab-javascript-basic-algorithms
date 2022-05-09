console.log("I'm ready!");
// Iteration 1: Names and Input

const hacker1 = 'Valerian';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Haroun';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const h1Length = hacker1.length;
const h2Length = hacker2.length;

if (h1Length > h2Length){
    console.log(`The driver has the longest name, it has ${h1Length} characters.`);
}
else if (h1Length < h2Length){
    console.log(`It seems that the navigator has the longest name, it has ${h2Length} characters.`);
}
else if (h1Length === h2Length){
    console.log(`Wow, you both have equally long names, ${h1Length} characters`);
}

// Iteration 3: Loops

let upperCaseH1 = '';
for (let i = 0; i<hacker1.length; i++){
    upperCaseH1 += hacker1[i].toUpperCase();
    if (i < hacker1.length - 1){
        upperCaseH1 += ' ';
    }
}

console.log(upperCaseH1);

let reverseH2 = '';
for (let i = hacker2.length - 1; i >= 0; i--){
    reverseH2 += hacker2[i];
}

console.log(reverseH2);

// Bonus Time !
// Bonus 1

const loremIpsum = `Aliquam urna orci, cursus nec risus quis, volutpat suscipit erat. Nulla vel ligula massa. Proin et orci id lectus interdum varius ut vel enim. Donec eleifend ullamcorper facilisis. Vivamus in ultricies lectus, tempus auctor turpis. Nunc sit amet mauris cursus, mollis orci eget, vulputate sem. Cras accumsan turpis sem, non mollis augue porta sit amet. Fusce pretium turpis id tempus facilisis. Proin accumsan magna sit amet velit lacinia, quis hendrerit libero auctor. Quisque et mi turpis. Phasellus tincidunt sed dolor et porttitor. Nam mollis tempor tempus. Phasellus ut lorem at ex hendrerit aliquet et aliquet ex. Aliquam vehicula ex sodales quam congue tristique. Fusce vitae odio commodo, vulputate justo a, gravida est. Suspendisse finibus facilisis turpis. Donec cursus metus eu ipsum convallis, sed cursus nisi rhoncus. Suspendisse fringilla blandit sem, id sodales tortor tincidunt vitae. In ut est magna. Sed cursus arcu odio, vitae tempus libero porta in. Sed molestie est eu ipsum consectetur, sit amet vehicula augue maximus. Donec ut convallis magna, vitae convallis mauris. Pellentesque pulvinar, ligula et ornare porta, ex felis pharetra tortor, sed euismod lorem risus in magna. Sed odio dolor, tempor a finibus at, finibus eget lectus. Sed tincidunt magna nec nisi rhoncus congue. Mauris vitae vehicula velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur ac dictum sapien, eget pretium arcu. Etiam ac tempus lacus, vel pharetra metus. Fusce in suscipit ipsum. Mauris posuere mi in quam gravida eleifend. Donec pulvinar nisi arcu, vestibulum facilisis purus tincidunt vitae. Ut gravida risus vel commodo vestibulum. Vivamus ultrices imperdiet interdum. Maecenas ac nibh risus. Maecenas sed diam eget nisi feugiat tincidunt sed et justo. Aenean pellentesque lorem massa, eget faucibus nulla vulputate id.`;

let numberOfWords = 0;
let numberOfEt = 0;

for (let i = 0; i < loremIpsum.length; i++) {
    if (loremIpsum[i] === ' '){
        numberOfWords += 1;
    }
    if (loremIpsum[i] === 'e' && loremIpsum[i+1] === 't' && (loremIpsum[i+2] === ' ' || loremIpsum[i+2] === '.') && loremIpsum[i-1] === ' '){
        numberOfEt += 1;
    }
}

console.log(`The number of words is ${numberOfWords + 1}.`,`The number of 'et' is ${numberOfEt}`);

//Bonus 2

const phraseToCheck = "La marine en ira mal";

let phraseWithoutSpaces = phraseToCheck.replaceAll(' ','');

let firstHalf = '';
let secondHalf = '';

if (phraseWithoutSpaces.length % 2 === 0){
    const middleIndex = phraseWithoutSpaces.length / 2;
    for (let i = middleIndex - 1; i > 0; i--){
        firstHalf += phraseWithoutSpaces[i];
    }

    for (let i = middleIndex; i < phraseWithoutSpaces.length - 1; i++){
        secondHalf += phraseWithoutSpaces[i];
    }
}

else if (phraseWithoutSpaces.length % 2 !== 0){
    const middleIndex = Math.floor(phraseWithoutSpaces.length / 2) + 1;
    for (let i = middleIndex; i > 0; i--){
        firstHalf += phraseWithoutSpaces[i];
    }

    for (let i = middleIndex; i < phraseWithoutSpaces.length - 1; i++){
        secondHalf += phraseWithoutSpaces[i];
    }
}

if (firstHalf === secondHalf){
    console.log("The phrase is a palindrome !")
}

