// Iteration 1: Names and Input
let hacker1 = "Didem";
console.log("The driver's name is" , hacker1);
let hacker2 = 'Deniz'
console.log("The navigator's name is" , hacker2);
// Iteration 2: Conditionals 2.1. 
// Depending on which name is longer, print:
// The driver has the longest name, it has XX characters. or
// It seems that the navigator has the longest name, it has XX characters. or
// Wow, you both have equally long names, XX characters!.

if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has",hacker1.length,"characters");
}
else if(hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has",hacker2.length," characters");
}
else {
    console.log("Wow, you both have equally long names,",hacker1.length,"characters!");
}

// Iteration 3: Loops
//3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
//3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
//3.3 Depending on the lexicographic order of the strings, print:
//The driver's name goes first.
//Yo, the navigator goes first, definitely.
//What?! You both have the same name?

let driverspace = "";
for(let i = 0; i < hacker1.length; i++) {
    driverspace = driverspace + hacker1[i] + " ";   
}
console.log(driverspace.toUpperCase());

let reverse = "";
for (let i = hacker2.length-1; i >= 0; i--) {
    reverse = reverse + hacker2[i];
}
console.log(reverse);

const names = [hacker1,hacker2];

if(names.sort()[0] === hacker1){
    console.log("The driver's name goes first.");
}
else if(names.sort()[0] === hacker2){
    console.log("Yo, the navigator goes first, definitely.");
}
else{
    console.log("What?! You both have the same name?");
}

//Bonus1
//Generate 3 paragraphs. Store the text in a new string variable named longText.
//Make your program count the number of words in the string.
//Make your program count the number of times the Latin word et appears.

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue faucibus eros, a viverra augue ultrices vitae. Cras sit amet blandit sem. Maecenas luctus in est sit amet volutpat. Pellentesque quis imperdiet tortor. Sed in est ac odio mollis fringilla. Etiam porta eleifend eros, id dapibus urna. Praesent eros lacus, consequat sed risus a, varius auctor libero. Curabitur sagittis dui ante. Nulla facilisis pellentesque elit nec vestibulum. Quisque non vehicula nisl. Proin nunc eros, consectetur ut convallis sit amet, rutrum vel tortor. Nullam nec elit in lectus tincidunt venenatis sed in mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam arcu sem, sodales ut nulla eu, aliquet congue nisl. Vestibulum ultrices, mauris et eleifend laoreet, velit enim aliquam elit, sed placerat libero turpis a tellus. Curabitur bibendum est nibh, nec varius metus tincidunt eget. Nulla semper ornare ultricies. Phasellus at diam enim. Nullam mollis lobortis nulla, in commodo nulla eleifend vel. Ut quis blandit enim. Mauris aliquam aliquet scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed rhoncus aliquam neque, et mattis arcu tincidunt ut. Nulla nulla orci, congue sit amet diam sed, tincidunt sodales massa. Mauris volutpat ac turpis non laoreet. Mauris vel feugiat dui, et tristique magna. Sed vel facilisis leo. In non felis luctus, volutpat massa id, hendrerit elit. Morbi blandit, ante vitae faucibus tincidunt, mauris metus pretium orci, in tincidunt justo mi eu nibh. Curabitur at neque a eros pellentesque accumsan. Suspendisse nunc diam, bibendum id commodo non, euismod nec arcu. Nullam nec sagittis turpis. Quisque at enim at leo convallis finibus ac nec neque. Nam finibus lectus ex, sit amet aliquam dolor pellentesque id. Praesent ligula sapien, luctus at urna a, tempor sollicitudin orci."
let spaceCount = longText.split(" ");
console.log(spaceCount);
console.log(longText.match(/\bet\b/gi));

// Create a new variable, phraseToCheck, containing some string value. 
//Write a code to check if the value assigned to this variable is a Palindrome. 

let phraseToCheck = "step on no pets";

phraseToCheck = phraseToCheck.replaceAll(' ', '');
let reversePalindrome = "";
for (let i = phraseToCheck.length-1; i >= 0; i--) {
    reversePalindrome = reversePalindrome + phraseToCheck[i];
}
if (reversePalindrome === phraseToCheck) {
    console.log("Palindrome");
}
else {
    console.log('not palindrome');
}


