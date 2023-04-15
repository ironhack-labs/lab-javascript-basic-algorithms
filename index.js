// Iteration 1: Names and Input
const hacker1 =  'Oscar'
console.log(`The driver's name is ${hacker1}`)
const hacker2 =  'Manuel'
console.log(`The navigator's names is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}


// Iteration 3: Loops


function drivCapital (name){
    return name.toUpperCase()
}

console.log(drivCapital(hacker1))


function drivReverse (name){
    return name.split('').reverse().join('')
}

console.log(drivReverse(hacker2))

function lexico (name1, name2){
    if(name1 > name2){
        return "The driver's name goes first.";
    }
    else if(name2>name1){
        return "Yo, the navigator goes first, definitely."
    }
    else{
        return "What?! You both have the same name?"
    }
}

console.log(lexico(hacker1,hacker2))


const longText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla dolor odio, eu lacinia sapien scelerisque ac. Vestibulum malesuada tristique fermentum. Sed consequat, elit a pulvinar pellentesque, dui ligula tincidunt metus, id ullamcorper ex mauris a libero. Nam auctor, felis et scelerisque hendrerit, nulla nisi facilisis turpis, vel finibus est urna id tellus.
Phasellus consectetur urna eu risus vestibulum, et viverra libero varius. Integer sodales, dui eu aliquam fringilla, ligula enim bibendum urna, eu fringilla sapien magna in sem. Fusce sit amet ullamcorper odio. Proin vehicula, nisl ut lacinia feugiat, odio risus consectetur ex, nec bibendum est turpis ut libero. Fusce id ex non velit congue ultricies et et urna. Nam tincidunt quam id massa malesuada, ut fermentum turpis lacinia. Donec volutpat urna ut nunc venenatis rhoncus.
Mauris lacinia pellentesque tortor, nec gravida velit ullamcorper vitae. Suspendisse eu vulputate velit, id congue augue. Fusce vitae gravida tortor. Etiam volutpat augue ac lectus consectetur, vel interdum elit laoreet. Etiam vitae sem et lacus vestibulum ultrices a vel ipsum. Suspendisse eleifend aliquam augue ut venenatis. Fusce eleifend aliquam lectus nec fringilla. Pellentesque malesuada lectus eget ipsum blandit, id tincidunt enim consequat.
`;

const words = longText.split(" ");
const wordCount = words.length;
console.log(wordCount);

let etCount = 0;
for (let i = 0; i < words.length; i++) {
    if (words[i] === "et") {
        etCount++;
    }
}

console.log("Count of Latin word 'et':", etCount);


// emiliano arreola part

/*
// Bonus 1
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius justo sed nibh vestibulum ornare. Integer sed felis interdum, pulvinar odio id, tristique massa. Donec sed ante vitae purus faucibus pulvinar. Aenean euismod mauris sit amet massa lobortis blandit. Vestibulum aliquet velit nulla, non viverra lectus posuere sit amet. Donec maximus, enim a vehicula finibus, tellus velit elementum mauris, at venenatis massa ante quis mi. Phasellus tristique mauris nec metus iaculis luctus. Sed non leo ipsum. Nullam feugiat felis non purus porttitor aliquam. Donec dictum, turpis eget maximus iaculis, ante ex rhoncus sapien, quis bibendum nulla ipsum in ex. Etiam euismod hendrerit libero euismod sodales. Aliquam a sodales nunc, ut efficitur orci. Nulla tempor tincidunt ex nec sagittis. Nullam sit amet dolor purusligula enim bibendum urna, eu fringilla sapien magna in sem. Fusce sit amet ullamcorper odio. Proin vehicula, nisl ut lacinia feugiat, odio risus consectetur ex, nec bibendum est turpis ut libero. Fusce id ex non velit congue ultricies et et urna. Nam tincidunt quam id massa malesuada, ut fermentum turpis lacinia. Donec volutpat urna ut nunc venenatis rhoncus.";

let wordCount = 0;
let etCount = 0;
for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " ") {
    wordCount++;
  }
  if (longText.slice(i, i + 2) === "et") {
    etCount++;
  }
}

// Añadir 1 al conteo de palabras, ya que la última palabra no tiene espacio después de ella
wordCount++;
console.log("Número de palabras en el texto:", wordCount);
console.log("Número de veces que aparece 'et' en el texto:", etCount);

// Bonus 2
let phraseToCheck = "A man, a plan, a canal, Panama!";
let isPalindrome = true;
let cleanedPhrase = phraseToCheck.toLowerCase().replace(/[^a-z]/g, "");

for (let i = 0; i < cleanedPhrase.length / 2; i++) {
  if (cleanedPhrase[i] !== cleanedPhrase[cleanedPhrase.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log("'" + phraseToCheck + "' es un palíndromo.");
} else {
  console.log("'" + phraseToCheck + "' no es un palíndromo.");
}

*/

