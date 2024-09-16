// Iteration 1: Names and Input
let hacker1 = "Kokcu";
console.log(`The drivers name is ${hacker1}`);

let hacker2 = "Zé";
console.log(`The navigators name is ${hacker2}`);



// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length){
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow you both have equally long names, ${hacker1.length} characters?`);

}


// Iteration 3: Loops
let capitalHacker1 = hacker1.toUpperCase();
//console.log(capitalHacker1); - checking if it works

let separatedCapitalHacker1 = capitalHacker1.split('').join(' ');
console.log(separatedCapitalHacker1);

let splitHacker2 = hacker2.split('').reverse().join('');
console.log(splitHacker2);

//------------------------------------------------------------------------------

let str1 = "The driver's name goes first";
let str2 = "Yo, the navigator goes first, definitely.";
let str3 = "What?! You both have the same name?";

if (hacker1.localeCompare(hacker2) === -1) {
    console.log(str1);
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log(str2);
 } else {
    console.log(str3);
 }


///////// BONUS 1

let longText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

let words = longText.split(' ');
let countWords = words.length;
console.log(countWords);

let etCount = 0;
for (let i = 0; i < longText.length; i++){
    let chars = longText[i]+longText[i+1];
    if  (chars === "et") {
        etCount++;
    }
}

console.log(etCount);


 ///////// BONUS 2

let phraseToCheck = "batata arroz";
let palindrome = "";
for (let i = phraseToCheck.length -1; i >= 0; i-- ){
    palindrome += phraseToCheck[i];
}
if (phraseToCheck === palindrome) {
    console.log("It's a palindrome");
} else{
    console.log("It isn't a palindrome;")
}
