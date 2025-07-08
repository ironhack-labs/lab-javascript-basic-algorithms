// Iteration 1: Names and Input
let hacker1= "Amin";
console.log("The driver's name is " + hacker1 +".");

let hacker2 = "Sergej"
console.log("The navigator name is " + hacker2 +".");

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
} else if (hacker2.length > hacker1. length){
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
} else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}

// Iteration 3: Loops
//  Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N". 
let spacedName = "";
for (let i = 0; i <hacker1.length; i++){
   spacedName += hacker1[i].toUpperCase() + " ";
}
console.log(spacedName.trim());

//Print all the characters of the navigator's name in reverse order, i.e., "nhoJ"
let reversedName ="";
for(let i = hacker2.length -1; i >=0; i--){
    reversedName += hacker2[i];
} 
console.log(reversedName);

/*Depending on the lexicographic order of the strings, print:
The driver's name goes first.
Yo, the navigator goes first, definitely.
What?! You both have the same name?
*/
if(hacker1 < hacker2){
    console.log("The driver's name goes first.");

} else if (hacker1 > hacker2){
    console.log("Yo, the navigator goes first, definitely.")
} else{
    console.log("What?! You both have the same name?")
}

/* Bonus 1
Go to the lorem ipsum generator website and:

Generate 3 paragraphs. Store the text in a new string variable named longText.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.
*/

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a arcu eget mi laoreet porta quis nec nunc. Sed vestibulum lacus a tortor bibendum, eu suscipit neque posuere. Nulla facilisi. Pellentesque venenatis tortor et nulla auctor pulvinar vitae a turpis. Suspendisse et leo in justo sollicitudin elementum sed non augue. Etiam in dapibus dui, non cursus dolor. Aenean sit amet pellentesque metus. Suspendisse luctus neque non ipsum sagittis lacinia. Quisque accumsan nunc magna, at lobortis odio porttitor at. Donec nec pellentesque turpis, imperdiet consectetur ante. Nunc condimentum nunc a mi scelerisque, id mattis nisi vestibulum. Nam pharetra purus vitae scelerisque feugiat. Nunc dignissim, nisl in aliquam finibus, mi eros consectetur metus, ultrices elementum velit dolor et leo. Nullam varius lorem nulla, eget scelerisque lorem luctus tincidunt. Etiam porta metus sollicitudin tristique bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi venenatis vestibulum ex, sagittis eleifend dui accumsan vitae. Phasellus commodo risus nisl, sit amet vulputate est euismod venenatis. Sed quis nulla erat. Vivamus tempor eros viverra tincidunt sodales. Etiam eu risus non risus laoreet lacinia. Vestibulum egestas purus sit amet augue pretium, in iaculis nibh congue. Nulla rhoncus scelerisque nulla, eu feugiat arcu viverra eget. Morbi non magna eget ipsum maximus lacinia. Ut sed mauris eu odio porttitor pulvinar vel malesuada erat. Proin sagittis leo auctor metus molestie molestie.
Praesent gravida nisl tortor, eu gravida odio efficitur at. Proin rutrum, justo nec volutpat finibus, orci nisi imperdiet lectus, sed hendrerit justo dolor pellentesque massa. Aliquam molestie nunc eget mollis mollis. Donec fringilla purus orci, vitae cursus felis tincidunt vel. Proin eu leo ut neque venenatis auctor. Proin quis ultrices augue. Sed volutpat, mi non iaculis pulvinar, purus sapien tempor ante, pellentesque efficitur eros sem eget leo. Maecenas blandit hendrerit eleifend. Nulla placerat venenatis felis, et lacinia mauris sagittis a. Nam cursus risus nec ex volutpat, eget mollis orci porttitor."
`
let wordCount = 0;
let inWord = false;

for (let i = 0; i < longText.length; i++){
    if (longText[i] !== ' ' && longText[i] !== '\n'){
        if (!inWord){
            wordCount++;
            inWord = true;
        }
    } else{
        inWord= false;
    }
}

console.log("Word count:", wordCount)

// Occurences of the word 'et'

let etCount = 0;
let words = "";

for (let i = 0; i < longText.length; i++){
    if (longText[i] === " " || longText[i] === "\n") {
        if (words === "et") {
            etCount++;
        }
        words = "";
    } else {
        words += longText[i];
    }
}

// Check the last word in case it is 'et'

if (words === "et"){
    etCount++;
}

console.log("Occurences of 'et':", etCount);


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
"Was it a car or a cat I saw?" and "No 'x' in Nixon".
*/

let phraseToCheck = "A man, a plan, a canal, Panama!"

// Remove spaces, punctuations and do lowercase

let cleaned= "";

for (let i = 0; i <phraseToCheck.length; i++){
   
   let char = phraseToCheck[i].toLowerCase();
   if (char >= 'a' && char <='z'){
      cleaned += char;
   }
}

// Reverese the cleaned string

let reversed= "";
for (let i = cleaned.length - 1; i >= 0; i--){
    reversed += cleaned[i];
}

// Compare

if (cleaned === reversed) {
    console.log("Yes, it's a palindrome.")
} else{
    console.log("No, it's not a palindrome.")
}