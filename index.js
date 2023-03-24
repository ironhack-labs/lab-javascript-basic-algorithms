// Iteration 1: Names and Input
//1.1 -  Create a variable hacker1 with the driver's name.
let hacker1 = 'Inês';
//1.2 Print "The driver's name is XXXX".
console.log("The driver's name is " + hacker1);

//1.3 Create a variable hacker2 with the navigator's name.
let hacker2 = 'Diogo';
//1.4 Print "The navigator's name is YYYY".
console.log("The navigator's name is " + hacker2);


// Iteration 2: Conditionals
//2.1. Depending on which name is longer, print:
if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, with ${hacker1.length} characters!`);
}

// Iteration 3: Loops

//3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
console.log(hacker1.toUpperCase().split("").join(" "))


// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
let reverseName = "";
for (let i = hacker2.length - 1; i >= 0; i--) { 
    reverseName += hacker2[i];
}
console.log(reverseName);

//3.3 Depending on the lexicographic order of the strings, print:
if (hacker1[0] < hacker2[0]) {
    console.log (`The driver's name goes first.`);
} else if (hacker1[0] > hacker2[0]) {
    console.log(`Yo, the navigator goes first, definitely.`);
} else {
    console.log(`What?! You both have the same name?`);
}

//Bonus 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed sapien ut turpis viverra tempor. 
Nunc gravida quam non leo consequat vestibulum. Nulla dolor odio, condimentum ornare commodo id, auctor in purus. 
Donec tempor lectus at porta convallis. Nam consectetur odio non imperdiet iaculis. Vivamus quis lacinia arcu. Sed a suscipit purus. 
In eget maximus mauris. Pellentesque quis lorem in risus fermentum tempor. Morbi pharetra tortor quis massa finibus, nec bibendum elit semper. 
Mauris interdum tellus eget odio congue scelerisque. Nunc in odio lacinia, euismod felis id, lobortis ante. Ut ut dictum massa. Class aptent 
taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc volutpat ornare volutpat. Donec maximus neque et neque 
rhoncus ornare. Phasellus lectus magna, pellentesque ut magna ultricies, facilisis ultricies purus. Sed iaculis porttitor neque a dictum. 
Quisque tincidunt, purus ac rhoncus accumsan, neque mauris interdum libero, eu accumsan nibh mauris vitae velit. Aenean elit metus, fringilla 
vehicula gravida nec, pharetra vitae purus. Morbi elementum, massa non pharetra tincidunt, nisi metus consectetur odio, sed sollicitudin 
velit ligula et elit. Fusce malesuada fermentum lobortis. Nullam tincidunt varius molestie. Duis tempus pretium lorem non lobortis. 
Vivamus sed dolor est. Mauris viverra ipsum luctus mauris condimentum bibendum. Aliquam sapien purus, consequat tristique magna vel,
venenatis pellentesque nunc. Etiam et condimentum diam, eu viverra felis. Suspendisse ultricies, dolor id tempus tincidunt, metus lacus
egestas mauris, eu posuere odio metus non risus. Fusce ac mollis risus, at egestas leo. Vestibulum efficitur nisl lorem, vitae convallis 
risus consequat in. Nulla justo nibh, tincidunt ut lobortis in, molestie vulputate sapien. Aliquam ac vestibulum ex, in dapibus mauris.
In fringilla pharetra dictum. Phasellus non leo eu erat vehicula sagittis et eget leo. Nulla a ligula eget odio vehicula molestie eu vel 
arcu. Mauris ultrices tristique odio ut interdum. Sed vehicula nisl ornare, hendrerit lorem nec, vehicula sem.`; 

//Make your program count the number of words in the string.

const words = longText.split(" ");
const countWords = words.length;
console.log(countWords);


// Make your program count the number of times the Latin word et appears. 

console.log(longText.split("et").length - 1);

//Bonus 2

let phraseToCheck = "taco cat";

phraseToCheck = phraseToCheck.toLowerCase().replace(" ", "");
phraseReverse = phraseToCheck.split('').reverse().join('');


  
if (phraseToCheck === phraseReverse) {
    console.log(`${phraseToCheck} is a palindrome`);
} else {
    console.log(`Sorry, ${phraseToCheck} is not a palindrome`);
}
 // can´t find a solution for all without a function 