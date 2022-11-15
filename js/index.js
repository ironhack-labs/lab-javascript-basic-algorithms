// Iteration 1: Names and Input 
//node js/index.js
let hacker1 = "John";
let hacker2 = "Javier";
console.log(`The driver\'s name is ${hacker1}`);
console.log(`The navigator\'s name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)} else
if (hacker2.length > hacker1.length) {console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)} else
{console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)}
// Iteration 3: Loops
console.log(hacker1.split('').join(' ').toUpperCase());
console.log(hacker1.split('').reverse().join(''));
let newArray = [hacker1, hacker2];
var sortedArray = newArray.sort(function(a,b){
    if (a > b)
       console.log("The driver's name goes first.");
    else if (a < b)
        console.log("Yo, the navigator goes first definitely.");
    else
        console.log("What?! You both have the same name?");
});
// Bonus Time!
// Bonus 1:
let p1 = "et et et Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis aliquet ullamcorper."
let p2 = "et et et et Nam feugiat gravida augue eget bibendum. Nam non arcu at libero auctor facilisis.";
let p3 = "et etet Nullam sit amet imperdiet leo. Sed augue diam, aliquet non odio sit amet, congue tempor lectus.";
function countWords(paragraph){
    console.log(`The total number of words of this text is ${paragraph.split(' ').length}`);
}
countWords(p1);
countWords(p2);
countWords(p3);
function countEt(paragraph){
    let checkParagraph = paragraph.split(' ');
    var counter = 0;
    for(let i = 0; i < checkParagraph.length; i++){
        if(checkParagraph[i] === "et"){
            counter++;
        }
    }
    console.log(`The total number of the latin word \"et\" in this text is ${counter}`);
}
countEt(p1);
countEt(p2);
countEt(p3);
// Bonus 2:
function checkPhraseIsPalindrome(str){
    var original = str.replace(/[\s"'.,-\/#!$%\^&*;:{}=\-_`~()\\\[\]@+|?><]/g,"").toLowerCase();
    var originalReverse = original.split("").reverse().join("");
    if(original === originalReverse){
        console.log(`\"${str}\" is a palindrome`);
    }else {
        console.log(`\"${str}\" is not a palindrome`);
    }
    
}
checkPhraseIsPalindrome("A man, a plan, a canal, Panama!");
checkPhraseIsPalindrome("Amor, Roma");
checkPhraseIsPalindrome("race car");
checkPhraseIsPalindrome("stack cats");
checkPhraseIsPalindrome("step on no pets");
checkPhraseIsPalindrome("taco cat");
checkPhraseIsPalindrome("put it up");
checkPhraseIsPalindrome("Was it a car or a cat I saw?");
checkPhraseIsPalindrome("No 'x' in Nixon");
checkPhraseIsPalindrome("This is not a palindrome");