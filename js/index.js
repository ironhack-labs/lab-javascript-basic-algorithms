// Iteration 1: Names and Input
let hacker1 = "Victoria";

console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Sergio";

console.log(`The navigator's name is ${hacker2}.`);
//------------------------------------------


// Iteration 2: Conditionals
console.log(`The word "${hacker1}" has ${hacker1.length} characters.`);
console.log(`The word "${hacker2}" has ${hacker2.length} characters.`);

const hacker1Length = hacker1.length;
const hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) {
    console.log(`The driver has the longest name, it has ${hacker1Length} characters.`);
} else if (hacker1Length < hacker2Length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1Length}.`)
}
//------------------------------------------


// Iteration 3: Loops
//Name spaced in capital letters
let hacker = "";

for (let i = 0; i < hacker1Length; i++) {
    hacker += hacker1[i].toUpperCase() + " ";
};

console.log(`Spaced and capital letters: ${hacker}.`);

//Reserve name
let hackerReverse = "";

for (let i = hacker1Length - 1; i >= 0; i--) {
    hackerReverse += hacker1[i];
};

console.log(`Reversed: ${hackerReverse}.`);

//Lexicographic order

let comparison = hacker1.localeCompare(hacker2);

if (comparison === 1) {
    console.log(`Yo, the navigator goes first definitely.`)
} else if (comparison === 0) {
    console.log(`What?! You both have the same name?`)
} else {
    console.log(`The driver's name goes first.`)
};


//------------------------------------------

/*let abc = "abcdefghijklmnopqrstuvwxyz";

let driver = abc.indexOf(hacker1[0].toLowerCase());
let navigator = abc.indexOf(hacker2[0].toLowerCase());

if (driver < navigator){
  console.log(`The driver's)
}*/
//------------------------------------------


//Bonus 1
//Bonus 1: Generate 3 paragraphs. Store the text in a variable type of string.
let loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non leo a justo pretium rhoncus ut sed nulla. Maecenas hendrerit sem at tortor tempor, vel bibendum eros semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse neque libero, rutrum in scelerisque a, vehicula nec nisl. Maecenas ullamcorper finibus metus. Integer non porta odio. Vivamus sapien lacus, interdum vitae fringilla at, semper at metus. Cras non dolor orci. Nulla sollicitudin accumsan efficitur. Vestibulum quis magna odio. Maecenas iaculis, nunc non imperdiet iaculis, leo ex egestas tortor, eu ultricies turpis lectus id elit. Fusce scelerisque mauris commodo iaculis vehicula. Donec aliquam dui neque, sed iaculis lorem lobortis id. Nunc a mi porttitor, fringilla sapien aliquam, vulputate felis. Nullam vel lorem nec nunc congue aliquam sit amet id ex. Donec justo nibh, euismod et tempus ac, porttitor sed augue. Mauris nulla mi, ornare in augue quis, hendrerit hendrerit leo. Nunc sagittis arcu et tortor fringilla condimentum. Nunc nec ligula vitae turpis pharetra facilisis in et odio. In eget augue vehicula, posuere velit non, vehicula justo. Aenean et magna sapien. Donec pellentesque felis nec imperdiet feugiat. Fusce sed metus nulla. Praesent vel ullamcorper nisl. Pellentesque congue mattis turpis. Phasellus sed imperdiet elit, convallis volutpat lectus. Ut in nisi pulvinar, rutrum est vitae, tristique sem. Aenean quam enim, elementum quis massa nec, tristique maximus mi. Morbi efficitur gravida bibendum. Vivamus dapibus velit et lorem auctor, bibendum facilisis justo luctus. Curabitur arcu ligula, lobortis ut porttitor ac, tempus rhoncus tortor. Morbi iaculis ipsum est, id aliquet libero dignissim eu. Maecenas pulvinar est nibh, at congue ex scelerisque eget. Ut imperdiet nisl sit amet est mattis bibendum. Pellentesque viverra eget odio vel mollis.";

//Bonus 1: Make your program count the number of words in the string.
loremText = loremText.replace(/(^\s*)|(\s*$)/gi, "");
loremText = loremText.replace(/[ ]{2,}/gi, " ");
loremText = loremText.replace(/\n /, "\n");
let totalCount = loremText.split(' ').length;

console.log(`There are ${totalCount} words in our Lorem random text.`);

//Bonus 1: Make your program count the number of times the Latin word et appears.
let etCounter = 0;

for (let i = 0; i < loremText.length; i++) {
    if (loremText[i] === "e" && loremText[i + 1] === "t") {
        etCounter += 1;
    }
};

console.log(`There are ${etCounter} "et" words in our Lorem random text.`);

//------------------------------------------
//Bonus 2

let phraseToCheck = "step on no pets";
let phraseReversed = "";
/* Lo que dejamos a medias en clase
for (let i = phraseToCheck - 1; i >= 0; i--) {
    phraseReversed += phraseToCheck[i];
};*/

//Sigo con el ejemplo de clase a ver si me sale con for
let phraseNoSpace = "";

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
    if (phraseToCheck[i] != " ") {
        phraseReversed += phraseToCheck[i];

    }
};

for (let i = 0; i < phraseToCheck.length; i++) {
    if (phraseToCheck[i] != " ") {
        phraseNoSpace += phraseToCheck[i];
    }
};

if (phraseNoSpace === phraseReversed) {
    console.log(`${phraseToCheck} is a palindrome`)
} else {
    console.log(`${phraseToCheck} is not a palindrome`)
};

/*------------------------------------------------------
//Prueba 1 con funciones y métodos
function palindrome(str) {
  var newString = str.replace(/[^a-z0-9]/g, '').toLowerCase();
  var array = newString.split("");
  for (var i = 0; i < array.length/2; i++) {
    if (array[i] !== array[array.length-i-1]) {
      return false;
    }
  }
  return true;
}

//Prueba 2 con funciones y métodos
var isPalindrome = function (string) {
    if (string == string.split('').reverse().join('')) {
        alert(string + ' is palindrome.');
    }
    else {
        alert(string + ' is not palindrome.');
    }
}
*/