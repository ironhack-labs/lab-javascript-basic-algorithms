// Iteration 1: Names and Input
console.log("1) Presenting our squad:")
let hacker1 = "Alison";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Cabral";
console.log(`The navigator's name is ${hacker2} \n`);

// Iteration 2: Conditionals
console.log("2) Who has the largest name?");
let hacker1NameLength = hacker1.length;
let hacker2NameLength = hacker2.length;

if(hacker1NameLength > hacker2NameLength){
  console.log(`The driver has the longest name, it has ${hacker1NameLength} characters. \n`);
} else if (hacker1NameLength < hacker2NameLength){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2NameLength} characters. \n`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker2NameLength} characters! \n`);
}

// Iteration 3: Loops
// Hacker 1:
let upperCaseHacker1 = hacker1.toUpperCase();
console.log(`3) Our driver's name can be spelled as:`);
console.log(...upperCaseHacker1);


// Hacker 2:
    
let inverseHacker2 = hacker2.split(``).reverse().join(``);

console.log(`And our navigator's name, backwards, is: \n${inverseHacker2} \n`);

//Comparing names
let comp = hacker1.localeCompare(hacker2);
if (comp < 1){
  console.log("The driver's name goes first.");
} else if (comp > 1){
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//Bonus Exercises
console.log("\n \n Bonus 1 - Words counting \n");

let loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum mi at semper tristique. Phasellus tristique suscipit purus in maximus. Donec consequat id ante vulputate accumsan. Vestibulum sit amet vulputate mauris, at rhoncus felis. Fusce eget mi auctor, dignissim nunc sed, dictum est. Praesent vitae urna gravida, volutpat lacus quis, faucibus dolor. Sed facilisis diam vitae vestibulum fermentum. Morbi sit amet dui quam. Praesent ornare purus at purus euismod ultrices. Donec non orci id nunc ullamcorper semper. Aliquam sed est ut turpis accumsan ultricies. Maecenas vel urna arcu. Proin pellentesque turpis sit amet arcu dictum, at vulputate massa vestibulum. In commodo vestibulum quam at luctus. Aenean pharetra orci vitae purus rutrum molestie nec sed velit. Nam at dolor non augue elementum facilisis eu non nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec ex neque, pulvinar eu tortor non, fermentum volutpat dolor. Phasellus odio nisi, rutrum et dictum luctus, varius a libero. Pellentesque vulputate scelerisque lacus eget mattis. Nunc vitae pulvinar nisl, et consequat lacus. Praesent viverra arcu lectus, eget sodales dolor convallis vel. Morbi nec risus massa. Vestibulum consectetur justo eget condimentum interdum. Proin blandit metus a nulla pretium sollicitudin. Curabitur imperdiet eu lectus eget dapibus. Curabitur convallis dignissim neque, vitae ullamcorper quam rhoncus ut. Aenean quis consequat ante, ac pulvinar orci. Pellentesque ac nisi faucibus, ornare lectus vel, lobortis ligula. Aenean purus mauris, mollis et lacus ut, facilisis pharetra augue. Etiam nec rhoncus massa. Integer nec ultricies nisi, vel pharetra velit. Suspendisse luctus ullamcorper pellentesque. Donec consequat aliquet tincidunt. Donec ut sodales augue, nec viverra ex. Nam auctor, mi non egestas tristique, purus velit faucibus felis, eu iaculis sapien quam sit amet tellus. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";


let textLength = loremText.length;
let spaces = 0;

  for(i = 0; i <= textLength; i += 1){
    if (loremText[i] == " "){
      spaces += 1;
    }
  }
  console.log(`WOW! There are ${spaces + 1} words in our three paragraph Lorem!`);

// Bonus 2
console.log("\n Bonus 2 - Palindrome Checking");

let phraseToCheck = "A man, a plan, a canal, Panama!";
let shortPhrase = "";
phraseSize = phraseToCheck.length;

    for(i = 0; i < phraseSize; i += 1){
    
      if (phraseToCheck[i] !== " " && phraseToCheck[i] !== "," && phraseToCheck[i] !== "." && phraseToCheck[i] !== "!" && phraseToCheck[i] !== "?"){
      
      shortPhrase = shortPhrase + phraseToCheck[i];
      //console.log("aqui");
    }
  }
  shortPhrase = shortPhrase.toLowerCase();
  console.log(shortPhrase);
if (shortPhrase == shortPhrase.split(``).reverse().join(``)){
console.log(`"${phraseToCheck}" is a Palindrome!`);
} else {
console.log(`"${phraseToCheck}" is NOT a Palindrome!`);
}
