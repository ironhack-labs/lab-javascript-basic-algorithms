
console.log("I'm ready!");

/*
Iteration 1: Names and Input
1.1 Create a variable `hacker1` with the driver's name.

1.2 Print `"The driver's name is XXXX"`.

1.3 Create a variable `hacker2` with the navigator's name.

1.4 Print `"The navigator's name is YYYY"`.
*/

let hacker1 = "Ana";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Zeus";
console.log(`The navigator's name is ${hacker2}`);

/* Iteration 2: Conditionals
2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.
*/

let driverLength = hacker1.length;
let navigatorLength = hacker2.length;

if (driverLength > navigatorLength) {
  console.log(`The driver has the longest name, it has ${driverLength} characters`);
}
else if (driverLength < navigatorLength){
  console.log(`It seems that the navigator has the longest name, it has ${navigatorLength} characters`);
}
else {
  console.log(`Wow, you both have equally long names, ${navigatorLength} characters!`)
}

/*
Iteration 3: Loops
3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?

*/

/*

*/


console.log(hacker1.toUpperCase().split("").join(" "));
console.log(hacker2.split("").reverse().join(""));

if(hacker1 < hacker2) {
  console.log("The driver's name goes first");
}
else if(hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely");
}
else {
  console.log("What?! You both have the same name?");
}

/*
Bonus Time!
Bonus 1:
Go to lorem ipsum generator and:

Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.
Bonus 2:
Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".
*/

let textDummy = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium odio sed auctor maximus. Curabitur vulputate, nibh vel faucibus vulputate, metus mauris venenatis velit, sed ornare dui est id ante. Proin semper hendrerit orci, ut condimentum eros egestas eget. Vivamus sed dignissim metus, nec blandit elit. Nulla vitae egestas massa. Aenean vitae facilisis quam. Nullam augue felis, pulvinar eget erat in, molestie rutrum massa. Maecenas quis neque ac purus elementum luctus. Ut consequat augue sit amet lorem placerat vestibulum. Donec pellentesque felis nibh, ac tincidunt dolor eleifend sit amet. Vestibulum est sapien, varius in mattis et, vestibulum ac dolor. Sed tincidunt tortor in turpis fringilla iaculis. Proin in urna vel justo condimentum volutpat in nec eros. Curabitur imperdiet, magna at auctor commodo, urna lectus porttitor lorem, in ultrices ante neque at sapien. Aenean id sapien mauris. Praesent lacinia est vitae dui gravida, vitae cursus mi tempor. Proin in ante felis. Vestibulum tempus feugiat mauris vitae sodales. Phasellus dignissim posuere velit vel ornare. In at ex et leo vestibulum pulvinar. Nullam quis metus id ante condimentum scelerisque. Nullam eget odio ante. Proin sem urna, maximus quis ante a, rutrum semper dui. Donec non ligula vel velit elementum finibus suscipit non magna. Etiam hendrerit nulla vel blandit ultrices. Sed auctor elit eu est elementum, vitae porttitor nibh placerat. Pellentesque non interdum sapien. Donec faucibus dictum tincidunt. Aenean quis finibus ligula. Fusce congue est ut dolor consequat aliquam. Proin mollis justo ipsum, vel ornare magna varius in. Quisque finibus a nisl eget auctor.";

let countLetter = textDummy.length;
console.log(countLetter);

let counterOfWords = 0;

for(let i = 0; i < textDummy.length; i++){
  if(textDummy.charAt(i) === " ") {
    counterOfWords++;
  }
}

console.log(counterOfWords);

let counterOfEts = 0;

for(let i = 0; i < textDummy.length; i++){
  if(textDummy.charAt(i) === "e") {
    if(textDummy.charAt(i+1) === "t") {
      counterOfEts++;
    }
  }
}

console.log(counterOfEts);

let phraseToCheck = "step on no pets";

let palindromeCheck = phraseToCheck.split("").reverse().join("");

if(palindromeCheck === phraseToCheck) {
  console.log("This is palindrome!");
} 
else {
  console.log("This is not a palindrome!");
}

