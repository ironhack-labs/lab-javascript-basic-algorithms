// Iteration 1: Names and Input
let hacker1 = "Julio";

console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Roberto";

console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length){
   console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`) ;
} else {
    console.log("Wow, you both have equally long names, XX characters!");
}

// Iteration 3: Loops
let stored = " ";

for (let i = 0; i < hacker1.length; i++){
    
    stored += hacker1[i] + " ";
    
}
console.log(stored.toUpperCase());

let reverseStored = " ";

for (let j = hacker1.length - 1; j >= 0 ; j--){
    
    reverseStored += hacker1[j];
    
}
console.log(reverseStored);

if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}

//Bonus 1:

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur porta quam, 
eget vulputate ex. Praesent vel est nulla. Aliquam bibendum lectus sit amet ipsum vestibulum, non vehicula 
risus tristique. Nunc blandit diam est, vel malesuada lorem iaculis id. Nunc convallis purus et turpis finibus
 finibus. Vestibulum mollis urna sapien, at pulvinar tellus blandit vitae. Donec velit tortor, ullamcorper sit
  amet nulla vel, tempus laoreet metus. Integer mollis dapibus nisi a feugiat. Vivamus non quam mauris. Aliquam
   imperdiet lorem eget velit consequat convallis. Aliquam blandit metus purus, a posuere felis ultrices at.
    Praesent tincidunt fermentum elit sit amet egestas. Etiam a vehicula eros. Pellentesque et vestibulum justo.

Cras gravida purus mi, eget elementum nibh feugiat sed. Fusce leo sapien, porttitor vel purus ac, vehicula viverra
 mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient 
 montes, nascetur ridiculus mus. Nulla orci orci, interdum et leo et, laoreet iaculis diam. Mauris vitae purus cursus,
  vehicula lorem eu, posuere mi. Nullam nec tellus felis. Integer ultricies eros ut fermentum luctus. Curabitur sollicitudin, 
  urna et lacinia viverra, orci nibh mattis justo, vel pellentesque ipsum justo quis elit. Maecenas varius porta sem sit amet 
  vestibulum. Maecenas bibendum tortor sed libero varius gravida. Nullam mattis eget nunc ac vulputate. Sed dictum mauris vel 
  ligula dignissim elementum. Praesent ac aliquam mi. Praesent scelerisque felis ut justo lacinia ultrices a nec metus. Nulla facilisi.

Fusce aliquam leo massa, sit amet condimentum justo egestas sit amet. Pellentesque habitant morbi tristique senectus et netus et 
malesuada fames ac turpis egestas. Vivamus lectus dui, dictum non dolor nec, viverra fermentum orci. Duis at odio urna. Phasellus
 iaculis viverra iaculis. Sed gravida tempor risus, ut maximus sem consequat vel. Cras tincidunt eget justo ac vestibulum. Duis 
 lobortis consectetur mattis. Cras laoreet ut lectus eu porta. Fusce laoreet eleifend risus, eget ornare ipsum eleifend vel. 
 Aliquam a nibh tempus, venenatis ante nec, dignissim justo. Pellentesque magna ex, facilisis non feugiat sed, hendrerit ac quam.
  Vivamus mollis ac lectus sit amet condimentum.`

let words = longText.split(" ");
console.log(words.length);

let count = 0;

for (let l = 0; l < longText.length; l++){
    
    if (longText[l] + longText[l + 1] === "et"){
        count++;
    }

}

  console.log(`"et" appears ${count} times in the text.`)

//Bonus 2:

let phraseCheck = "step on no pets";

function palidromeCheck (phrase) {
    let phraseReversed = "";
    for (i = phrase.length - 1; i >= 0; i--){
        phraseReversed += phrase[i];

    }
    if (phrase === phraseReversed){
        console.log (" This is a palindrome!!")
    } else {
        console.log ("Sorry this is not a palindrome :(")
    }
};

palidromeCheck(phraseCheck);