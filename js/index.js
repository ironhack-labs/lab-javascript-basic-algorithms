// Iteration 1: Names and Input
    
    
    const hacker1 = 'Vladick';
    const hacker2 = 'David';
    console.log(`The driver's name is ${ hacker1 }`);
    console.log(`The navigators's name is ${ hacker2 }`);



// Iteration 2: Conditionals


if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.lengt) {
    console.log(`The driver has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

let word = ""; 

for (let character = 0; character < hacker1.length; character++) {
    
    let chart = hacker1.charAt(character).toUpperCase()
       
    word = word + chart + " ";
}

console.log(word)

// Bonus 1

let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat, orci a ultricies hendrerit, risus nunc finibus erat, a vehicula nisl sapien vitae dolor. Vestibulum elit mauris, cursus quis justo suscipit, semper commodo augue. Etiam interdum nunc dolor, a rutrum velit placerat quis. Nulla id lacinia ante, ac congue justo. Maecenas non hendrerit libero. Suspendisse potenti. Etiam fermentum vulputate fermentum. Pellentesque lacinia quam mi, in lobortis ipsum ornare nec. Maecenas lobortis, neque ac aliquam lobortis, urna justo vulputate enim, eu porta risus diam in elit. In non lorem vel mi volutpat fermentum. Maecenas sit amet efficitur libero, a congue metus. Aliquam erat volutpat. Aliquam volutpat neque sit amet gravida venenatis. Nulla facilisi. Sed non est vitae augue condimentum suscipit.

Proin leo neque, dapibus sed tortor quis, pretium bibendum magna. Quisque non ipsum sed eros eleifend varius ut sit amet velit. Aenean ac odio porttitor, pellentesque erat in, scelerisque quam. Suspendisse varius rhoncus lacus at pretium. Integer rutrum dui viverra, mattis quam non, ultrices diam. Donec sit amet posuere ipsum. Pellentesque congue, augue porta mattis elementum, velit elit dignissim nisi, at convallis est purus sit amet dui. Donec elementum ultricies lacinia. Suspendisse potenti. Phasellus ullamcorper suscipit massa, vel elementum metus porta nec.

Sed ullamcorper sapien mi, sit amet pharetra arcu tincidunt sed. Suspendisse potenti. Integer nec nisl sit amet ipsum tincidunt blandit vehicula vel libero. Pellentesque eu nulla at massa pharetra tincidunt. Pellentesque hendrerit arcu at mi luctus, eget finibus diam euismod. Duis scelerisque laoreet quam in molestie. Quisque feugiat libero vitae est rhoncus, eget efficitur diam auctor. Maecenas ac nisi vitae tortor pretium blandit tempus quis erat. Cras libero ipsum, lobortis tincidunt tortor ac, congue ultricies diam.`;

text = text.toLowerCase()

let textSplit = text.split(" ");
console.log(textSplit.length);

// console.log(textSplit)
let counter = 0
let num = 0
let index = text.indexOf("et");


while ( text.indexOf("et", num) !== -1 ) {
    counter++
    num = text.indexOf("et", num) + 1
}

console.log(counter)

// Bonus 2 


// TEXT TO CHECK
let phraseToCheck = "A man, a plan, ajhv canal, Panama!"

function replaceCharacters ( textTwo, toSearch, toReplace) {
    while (textTwo.toString().indexOf(toSearch) != -1)
        textTwo = textTwo.toString().replace(toSearch, toReplace)
    
    return textTwo;
}

let textTransform = replaceCharacters( phraseToCheck, "," , "");

textTransform = replaceCharacters( textTransform, " ", "");
textTransform = replaceCharacters( textTransform, "!", "");
textTransform = replaceCharacters( textTransform, "¡", "");
textTransform = replaceCharacters( textTransform, "?", "");
textTransform = replaceCharacters( textTransform, "¿", "");
textTransform = replaceCharacters( textTransform, ".", "");
textTransform = replaceCharacters( textTransform, ";", "");
textTransform = replaceCharacters( textTransform, ":", "");
textTransform = replaceCharacters( textTransform, "á", "a");
textTransform = replaceCharacters( textTransform, "é", "e");
textTransform = replaceCharacters( textTransform, "í", "i");
textTransform = replaceCharacters( textTransform, "ó", "o");
textTransform = replaceCharacters( textTransform, "ú", "u");
textTransform = textTransform.toLowerCase();

function reverse(string) {
  let x = string.length;
  let stringReverse = "";

  while (x>=0) {
    stringReverse = stringReverse + string.charAt(x);
    x--;
  }
  return stringReverse;
}

let transformasio = reverse(textTransform)


if( textTransform === transformasio ) {
    
    console.log( "Oh yeah it is a palindrome!! ")

} else {
    console.log("Fuck! It isn't a palindrome!! :( ")
}
