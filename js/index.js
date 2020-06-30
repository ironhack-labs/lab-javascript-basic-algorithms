// Iteration 1: Names and Input
let hacker1 = "Victoria";

console.log("The driver name is XXXX");

let hacker2 = "Sergio";

console.log("The navigator name is YYYY");
//------------------------------------------


// Iteration 2: Conditionals
console.log(hacker1.length);
console.log(hacker2.length);

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
console.log(hacker);

//Reserve name
let hackerReverse = "";

for (let i = hacker1Length - 1; i >= 0; i--) {
    hackerReverse += hacker1[i];
};

console.log(hackerReverse);

//Lexicographic order

let comparison = hacker1.localeCompare(hacker2);

console.log(comparison);

if (comparison === 1) {
    console.log(`Yo, the navigator goes first definitely`)
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

console.log(totalCount);

//Bonus 1: Make your program count the number of times the Latin word et appears.
let etCounter = 0;

for (let i = 0; i < loremText.length; i++) {
    if (loremText[i] === "e" && loremText[i + 1] === "t") {
        etCounter += 1;
    }
};

console.log(etCounter);

//------------------------------------------
//Bonus 2
let phraseToCheck = "We are the fucking masters.";

let phraseReversed = "";

for (let i = phraseToCheck - 1; i >= 0; i--) {

    phraseReversed += phraseToCheck[i];
    if (phraseReversed) {

    }
}