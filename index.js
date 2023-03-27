// Iteration 1: Names and Input

const hacker1 = "Simon";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Emma";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}



// Iteration 3: Loops
// Turning the Driver's name into upperCase and adding spaces in between the letters.
let upperCase = hacker1.toUpperCase();
let finalName = '';
for (let i = 0; i < upperCase.length; i++) {
  finalName += upperCase[i] + ' ';
}
let nameFinal = finalName.slice(0, -1);
console.log(nameFinal);


// Turning the Navigator's name into lowerCase and flipping it around.
let lowerCase = hacker2.toLowerCase();
let backwardsName = '';
for (let i = lowerCase.length -1; i >= 0; i--) {
backwardsName += lowerCase[i];
}
console.log(backwardsName);


// Had no idea how to make this in a for loop, tried for a while and it just felt better/easier doing it with if statments.
if (hacker1.length > hacker2.length) {
console.log("The driver's name goes first.")
}
else if (hacker2.length > hacker1.length) {
console.log("Yo, the nagivator goes first, definitely.")
}
else {
console.log("What?! You both have the same name?")
}


const longText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum varius neque ut sodales. Vivamus ac lacinia nisi, vel convallis odio. Suspendisse ut arcu velit. Suspendisse id gravida eros. Donec a convallis erat. Vivamus sit amet risus at sapien eleifend euismod a ut ante. Pellentesque lobortis, augue sed feugiat ultricies, nisi orci pellentesque lacus, congue molestie lectus risus in lacus.

Ut luctus quam vitae vehicula luctus. Integer volutpat dapibus mi eget blandit. Integer sit amet blandit magna, nec rutrum augue. Phasellus pharetra semper mi quis accumsan. Morbi non eros et libero viverra porta vitae id lacus. Maecenas a volutpat nisi. Sed porttitor ex dui. Curabitur a nulla non odio congue dapibus eu vel felis. Vestibulum fringilla neque ac semper pharetra. Integer massa erat, congue sed eleifend vitae, porta vitae purus.

Etiam ac pharetra magna. Etiam id euismod ligula, mollis posuere arcu. Cras molestie lectus a nisl luctus mollis. Nunc lorem dui, commodo non aliquam ut, hendrerit a turpis. Donec non venenatis massa, a viverra orci. Sed et tristique elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In nec ipsum viverra, tincidunt lorem non, porttitor nisi. Vestibulum nec dolor non libero egestas eleifend nec sed libero. Sed nisi odio, accumsan non augue a, luctus vulputate elit. Maecenas ut elit dui. Proin ultricies augue nec dui aliquet convallis. `
//Checks for how many words there are in the given string.
let wordCount = 0;
for (let i = 0; i < longText.length; i++) {
  if (longText[i + 1] === " ") {
  wordCount ++;
  }
}
console.log(wordCount);


//Checks for how many "et" words the text contains.
let etWordCount = 0;
for (let i = 0; i < longText.length; i++) {
  if (longText[i] + longText[i + 1] + longText[i + 2] === " et") {
  etWordCount ++;
  }
}
console.log(etWordCount);


//function that checks the phrase and then turns it to lower case, removes most special characters and turns it around to check if it's a palindrome.
function phraseToCheck (phrase) {
  let phraseLowerCase = phrase.toLowerCase();

  let withoutSpaces = "";
    for (let i = 0; i < phraseLowerCase.length; i++) {
      if (phraseLowerCase[i] === " ") {}
        else if (phraseLowerCase[i] === ",") {}
        else if (phraseLowerCase[i] === ".") {}
        else if (phraseLowerCase[i] === "?") {}
        else if (phraseLowerCase[i] === "!") {}
        else if (phraseLowerCase[i] === "'") {}
        else if (phraseLowerCase[i] === '"') {}
      else {
        withoutSpaces += phraseLowerCase[i];
      }
    }
// Reverses it
  let reversedPhrase = "";
    for (let i = withoutSpaces.length -1; i >= 0; i--) {
      reversedPhrase += withoutSpaces[i];
    }
  console.log(withoutSpaces)
  console.log(reversedPhrase)
// if it's a palindrome it returns it and vice versa.
  if (reversedPhrase === withoutSpaces) {
    return `'${phrase}' is a Palindrome`
  }
  else {
    return `'${phrase}' is not a Palindrome`
  }
}
let result = phraseToCheck("put it up")
console.log(result);