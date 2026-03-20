// Iteration 1: Names and Input
/*
Iteration 1: Names and Input
1.1 Create a variable hacker1 with the driver's name.
1.2 Print "The driver's name is XXXX".
1.3 Create a variable hacker2 with the navigator's name.
1.4 Print "The navigator's name is YYYY".
*/

let hacker1 = "John";
console.log("The driver's name is " + hacker1); 

let hacker2 = "Marston";
console.log("The navigator's name is " + hacker2);


// Iteration 2: Conditionals
/*
2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.
*/
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
}else if (hacker2.length > hacker1.length){
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");

}else{
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!.");
}






// Iteration 3: Loops
/*
3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

3.3 Depending on the lexicographic order of the strings, print:

The driver's name goes first.
Yo, the navigator goes first, definitely.
What?! You both have the same name?
*/

let separatedName = "";

for (let i = 0; i< hacker1.length; i++){
    separatedName += hacker1[i] + " ";
}
console.log(separatedName);

let reverseName = "";
console.log(hacker2.length);
for (let j = hacker2.length-1; j >= 0; j--){
    reverseName += hacker2[j];
}
console.log(reverseName);

if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else {
  console.log("What?! You both have the same name?");
}

/*
Bonus Time!
Bonus 1:
Go to the lorem ipsum generator website and:

Generate 3 paragraphs. Store the text in a new string variable named longText.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.
*/

let longtext ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales lectus nibh. Suspendisse gravida suscipit ligula at maximus. Donec lectus dolor, interdum a porttitor fermentum, faucibus eu erat. Maecenas suscipit magna orci, sollicitudin posuere augue viverra non. Curabitur gravida ac ligula et hendrerit. Nulla facilisi. Vestibulum sem lectus, viverra lobortis auctor ac, bibendum fringilla ipsum. Aliquam faucibus, est sed elementum suscipit, nisi sem tristique augue, eu venenatis lacus ante non mauris. Morbi eu mi placerat, maximus est vel, cursus sapien. Morbi eu dui sed augue aliquam laoreet non vel lorem. Mauris sed massa augue. Aliquam id lacus nibh. Suspendisse pharetra libero eget dui vehicula finibus. Nulla consequat facilisis purus, ut semper lacus porta nec. Sed vel finibus erat. Cras vestibulum arcu non ultricies fermentum. Integer venenatis sapien eu tortor posuere, id interdum elit ultricies. Aliquam erat volutpat. In laoreet at est nec vestibulum. Sed rutrum tellus urna, sit amet scelerisque libero suscipit nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam maximus commodo dolor posuere sodales. Morbi dignissim risus at pharetra eleifend. Curabitur vulputate velit non malesuada laoreet. Nunc ullamcorper aliquam semper. Suspendisse potenti. Morbi facilisis justo non ligula consequat, et feugiat lacus feugiat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis bibendum fringilla dolor, sed ullamcorper ex venenatis ut. Vestibulum ut aliquam nunc, sit amet viverra dui. Nam suscipit sem tortor, non ultrices ipsum pulvinar eget. Proin venenatis eu ex in gravida. Curabitur augue ex, pulvinar non maximus id, posuere eu lectus. Etiam eros metus, posuere ac consequat ultrices, fermentum sit amet lacus. Integer risus felis, sodales in maximus et, molestie nec justo."

let contadorPalabras = 0;

for (let i=0; i<longtext.length; i++){
    if (longtext[i] != " "){
        if (longtext[i] != ","){
            if (longtext[i] != "."){
                contadorPalabras++
            }
        }  
    }
}
console.log(contadorPalabras);

let contadorEt = 0;
for (let i=0; i<longtext.length; i++){
    if (longtext[i] == "e"){
        if (longtext[i+1] == "t"){
            contadorEt += 1;
        }
    }        
}
console.log(contadorEt);

/*
Bonus 2:
Create a new variable, phraseToCheck, containing some string value. Write a code to check if the value assigned to this variable is a Palindrome. Here are some examples of palindromes:

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?"
"No 'x' in Nixon".

*/

let phraseToCheck = "put it up";

let cleanPhrase = phraseToCheck.toLowerCase().replace(/[^a-z0-9]/g, "");

console.log(cleanPhrase);

let isPalindrome = true;

for (let i = 0; i < cleanPhrase.length / 2; i++) {
    if (cleanPhrase[i] !== cleanPhrase[cleanPhrase.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log("Es un palíndromo");
} else {
    console.log("No es un palíndromo");
}

