// Iteration 1: Names and Input

// 1.1 Create a variable hacker1 with the driver's name.
const hacker1 = "Víctor"
//1.2 Print "The driver's name is XXXX".
console.log(`The driver's name is ${hacker1}`);
//1.3 Create a variable hacker2 with the navigator's name.
const hacker2 = "Carlos"
//1.4 Print "The navigator's name is YYYY".
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

//2.1. Depending on which name is longer, print:
//- The driver has the longest name, it has XX characters. or
if (hacker1.length > hacker2.lenght) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
    //- It seems that the navigator has the longest name, it has XX characters. or
  } else if (hacker1.length < hacker2.lenght) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    //- Wow, you both have equally long names, XX characters!.
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }
  
// Iteration 3: Loops
//3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
let newName = '';

for (let i = 0; i < hacker1.length; i++) {
  newName += hacker1[i].toUpperCase()
  
  if (i !== hacker1.length - 1) {
    newName += " ";
  }
}
console.log(newName)

//3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
let reversedName = '';

for (let j = hacker2.length -1; j >= 0; j--) {
  reversedName += hacker2[j];
  }
console.log(reversedName);

//3.3 Depending on the lexicographic order of the strings, print:

//The driver's name goes first.
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
  //Yo, the navigator goes first, definitely.
} else if (hacker2 < hacker1) {
  console.log("Yo, the navigator goes first, definitely.");
  //What?! You both have the same name?
} else {
  console.log("What?! You both have the same name?");
}
//BONUS 1:

//Generate 3 lorem ipsum paragraphs. Store the text in a new string variable named longText.
//Make your program count the number of words in the string.
//Make your program count the number of times the Latin word et appears.

let wordCount = 0;
let etCount = 0;
const longText = "Sed non ornare lorem. Maecenas placerat quis ipsum ac vulputate. Vestibulum porta sodales diam, quis euismod mi fermentum et. Duis nunc elit, varius ut purus non, accumsan commodo dui. Nullam eleifend neque malesuada leo mollis porttitor. Sed in tristique metus. Aliquam volutpat commodo risus a egestas. Etiam sagittis metus at ligula pulvinar, eu tincidunt nisl pretium. In ac neque ornare, tempor justo ut, iaculis mauris.\nMaecenas nulla purus, placerat nec neque non, convallis faucibus tortor. Suspendisse et magna quis felis placerat pulvinar. Quisque quam dui, pretium sed lacus volutpat, tempus blandit urna. Nullam semper massa eget odio sagittis, et finibus diam dapibus. Suspendisse elementum lacus in nibh pulvinar tincidunt. Nunc nunc diam, lobortis quis pharetra sit amet, pharetra sed dui. Phasellus non sem tellus. Aenean gravida diam metus, id vestibulum ante feugiat eget. Nulla volutpat aliquam tincidunt. Ut facilisis, lacus id finibus cursus, ante lacus facilisis ipsum, hendrerit rutrum ex urna vel leo. Duis tortor sapien, sollicitudin id libero eget, rutrum molestie magna. Praesent lobortis vel arcu at blandit. Donec vel elit eu nisi posuere sodales. Etiam imperdiet euismod augue et dignissim. Donec in nibh elit. Vivamus tempus nisl nec sem scelerisque, imperdiet placerat nunc faucibus.\nIn in enim condimentum ex sodales viverra non non ante. Duis quam erat, cursus nec lacinia vel, mattis a metus. Nullam congue urna ac elit sagittis malesuada. Phasellus eu ante facilisis, suscipit arcu nec, laoreet massa. Donec odio nibh, vehicula eget augue a, mattis lobortis lectus. Vestibulum efficitur tortor quis arcu consectetur efficitur. Ut vel aliquam tellus. Mauris venenatis finibus iaculis. Proin et ex ut felis sollicitudin vehicula ac at sapien. Vestibulum commodo luctus leo, at consectetur massa. Donec at tempor lectus, vehicula semper lacus. Suspendisse quis felis at urna lobortis faucibus. Vestibulum non nibh sed tortor hendrerit maximus. Cras id posuere lacus. Curabitur blandit metus odio, sit amet venenatis quam tincidunt eu. Praesent egestas diam at fringilla laoreet.";

for (let k = 0; k <= longText.length; k++) {
  const char = longText[k]
  const etChars = longText[k] + longText[k + 1];
  if (char === " ") {
    wordCount++;
    
  } else if (char === "\n") {
    wordCount++;
    
  } else if (etChars === "et") {
    etCount++;
  }
}
console.log(wordCount + 1);
console.log(etCount);

//BONUS 2: 

//Create a new variable, phraseToCheck, containing some string value. Write a code to check if the value assigned to this variable is a Palindrome.

let phraseToCheck = 'Amor, Roma';
let lowerCasePhrase = '';
let reversedPhrase = '';

for (let l = 0; l < phraseToCheck.length; l++) {
  let phraseChar = phraseToCheck[l];
  if ((phraseChar >= 'a' && phraseChar <= 'z') || (phraseChar >= 'A' && phraseChar <= 'Z')) {
    lowerCasePhrase += phraseChar.toLowerCase();
    reversedPhrase = phraseChar.toLowerCase() + reversedPhrase;
  }
}

console.log(lowerCasePhrase);
console.log(reversedPhrase);

if (lowerCasePhrase === reversedPhrase) {
console.log(`"${phraseToCheck}" is a palindrome.`)  
} else if (lowerCasePhrase !== reversedPhrase) {
console.log(`"${phraseToCheck}" is not a palindrome.`)
}
