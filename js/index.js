//Iteration 1: Names and Input
let hacker1 = "Tom Smith";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Tom Smith';
console.log(`The driver's name is ${hacker2}`);



//Iteration 3: Loops
if (hacker1.length > hacker2.length) {
    console.log('The driver has the longest name, it has ' + hacker1.length + ' characters.');
} else if (hacker1.length < hacker2.length) {
    console.log('It seems that the navigator has the longest name, it has ' + hacker1.length + ' characters.');
} else if (hacker1.length == hacker2.length) {
    console.log('Wow, you both have equally long names,' + hacker1.length + 'characters!')
}

//Iteration 3: Loops
//Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let hacker1UpCase = hacker1.toUpperCase();
let hacker1InterResult = '';
for (let i = 0; i < hacker1UpCase.length; i++) {
    hacker1InterResult += hacker1UpCase[i] + ' ';

}
console.log(hacker1InterResult.slice(0, -1));

//Print all the characters of the navigator's name, in reverse order
let hacker2InterResult = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
    hacker2InterResult += hacker2[i];
}
console.log(hacker2InterResult);

//Depending on the lexicographic order of the strings, print
let comparison = hacker1 > hacker2;
console.log(comparison);
if (comparison = true && hacker1 != hacker2) {
    console.log("The driver's name goes first.");
} else if (comparison = false && hacker1 != hacker2) {
    console.log("Yo, the navigator goes first definitely.");
}
else if (hacker1 = hacker2) {
    console.log("What?! You both have the same name?");
}

//Bonus Time!
//Generate 3 paragraphs. Store the text in a variable type of string.
//Make your program count the number of words in the string.
let loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar metus ante, ac dignissim tortor vestibulum lobortis. Ut ut eleifend orci, id porttitor ante. In vulputate accumsan quam in cursus. Vestibulum tortor erat, mattis eu egestas sit amet, hendrerit a libero. Sed lacinia posuere efficitur. In ut nulla pulvinar, pellentesque risus at, dictum massa. Sed interdum nisl metus, non posuere odio placerat vel. Vivamus sagittis posuere pharetra. Curabitur dapibus, velit non vulputate tincidunt, orci nunc venenatis nisl, et pretium purus ante in magna. Nam quis finibus leo. In hac habitasse platea dictumst.Ut sodales eu ex a porta. Donec nisl tortor, venenatis porta tristique quis, rhoncus porttitor enim. Fusce convallis, velit eget volutpat lobortis, neque sem sodales justo, sit amet dignissim nulla sapien eget libero. Ut rhoncus, augue in euismod posuere, odio ex pretium mi, vel suscipit ex elit eleifend est. Sed pretium venenatis suscipit. Mauris sit amet augue lobortis, pellentesque turpis sit amet, bibendum purus. Maecenas eget dapibus tortor, vel ultrices est. Mauris finibus neque ut maximus dictum.Donec tristique ligula a tincidunt rutrum. Nam mattis hendrerit pellentesque. Ut suscipit, nulla et ultrices varius, ipsum velit interdum augue, ut tempus risus lectus non ligula. Etiam ut neque elit. Aenean condimentum commodo tempor. Sed a lobortis eros. Integer tristique, enim id posuere sagittis, magna dui posuere erat, eget egestas neque justo eget lectus. Donec accumsan pharetra erat ac laoreet. Duis bibendum eget eros ultricies congue.'

//Make your program count the number of words in the string.
//Call the split() method on the string, passing it a string containing a space as a parameter.
const arr = loremIpsum.split(' ');
//The split method will return an array of the string's words, on which you can access the length property to get the number of words in the string.
console.log(arr.filter(word => word !== '').length);
//Make your program count the number of times the Latin word et appears
const newArr = loremIpsum.match(/ et /g);
console.log(newArr.length);

//Bonus 2:
//Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

let phraseToCheck = 'Amor, Roma!'
let phraseLow = phraseToCheck.toLowerCase();
let phraseNoClutter = phraseLow.replace(/,/g, '').replace(/!/g, '').replace(/\s/g, '');
console.log(phraseNoClutter);
const arrayValues = phraseNoClutter.split('');
const reverseArrayValues = arrayValues.reverse();
const reverseString = reverseArrayValues.join('');
if (phraseNoClutter == reverseString) {
    console.log('It is a palindrome');
}
else {
    console.log('It is not a palindrome');
}