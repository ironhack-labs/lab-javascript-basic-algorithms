console.log("I'm ready!");
/*----------------------------------------------------------------------
Iteration 1: Names and Input
1.1 Create a variable `hacker1` with the driver's name. <br>
1.2 Print `"The driver's name is XXXX"`.<br>
1.3 Create a variable `hacker2` with the navigator's name.<br>
1.4 Print `"The navigator's name is YYYY"`.
-----------------------------------------------------------------------*/

let hacker1 = "Sunaira";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Leah"
console.log(`The navigator's name is ${hacker2}`);

/*----------------------------------------------------------------------
Iteration 2: Conditionals
2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.
-----------------------------------------------------------------------*/
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else if(hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

/*----------------------------------------------------------------------
Iteration 3: Loops
3.1 Print all the characters of the driver's name, separated by a space 
and in capitals i.e. "J O H N"
-----------------------------------------------------------------------*/

let str1 = "";
for(let a = 0; a < hacker1.length; a++){
    str1 += `${hacker1[a].toUpperCase()} `;    
}
console.log(str1);

/*----------------------------------------------------------------------
3.2 Print all the characters of the navigator's name, in reverse order.
i.e. "nhoJ"
-----------------------------------------------------------------------*/
let str2 = "";
for(let b = hacker2.length-1; b >= 0; b--){
    str2 += `${hacker2[b]}`;
}
console.log(str2);

/*----------------------------------------------------------------------
3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
-----------------------------------------------------------------------*/

if(hacker1 < hacker2){
    console.log(`The driver's name goes first.`);
}else if(hacker1 > hacker2){
    console.log(`Yo, the navigator goes first definitely.`);
}else{
    console.log('What?! You both have the same name?');
}

/*---------------------------------------------------------------------------------
Bonus 1:
Go to lorem ipsum generator and:

Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.
-----------------------------------------------------------------------------------*/

let str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ipsum orci, gravida vel hendrerit ac, vestibulum in enim. Donec auctor facilisis risus. Aenean ornare, tellus eu dapibus cursus, ante ipsum accumsan est, vel venenatis neque augue id augue. Mauris nec diam in tellus volutpat egestas ac ac ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id velit egestas, malesuada purus vitae, interdum diam. Donec sit amet placerat enim, sed tincidunt nulla. Vivamus non posuere nunc. Fusce et ultrices neque, sit amet commodo felis. Vivamus neque dolor, pharetra vitae velit et, auctor tempor arcu. Donec dignissim massa eu ornare aliquam. Aenean maximus ligula quis accumsan pretium. Integer convallis commodo interdum. Sed dolor erat, sagittis ut dolor ut, tempus lobortis ligula. Pellentesque eu volutpat dui. In ultricies a lectus nec consectetur. Nam condimentum ex mi, sed ornare ligula pellentesque a. Mauris luctus consequat dolor vitae facilisis. Integer in ultricies enim, at euismod nunc. Aenean libero est, vulputate id efficitur quis, mollis vel libero. Donec efficitur tincidunt aliquet. In id ligula ac neque ornare malesuada. Nunc gravida ultricies sagittis. Nunc id cursus dolor. Donec posuere velit sit amet felis pulvinar, nec venenatis nulla suscipit. Duis blandit lectus vel sapien cursus viverra. Quisque quis feugiat neque, at tincidunt magna."
let wordCount = 0;
let etWordCount = 0;
for(let c = 0; c < str.length; c++){
    if(str[c] === " "){
        wordCount++;    

        // Make your program count the number of times the Latin word et appears.
        if(str[c+1] === "e" && str[c+2] === "t" && (str[c+3] === " " || str[c+3] === "," || str[c+3] === "." )){
            etWordCount++;
        }
    }
    if(c === str.length-1){
        wordCount++;
    } 
}
console.log(`Number of words: ${wordCount}`);
console.log(`Number of times the Latin word et appears: ${etWordCount}`);

// Another way of counting words in string.
let words = str.split(' ').length;
console.log(`Number of words: ${words}`);

/*---------------------------------------------------------------------------------
Bonus 2:
Create a new variable phraseToCheck and have it contain some string value. 
Write a code that will check if the value we assigned to this variable is a Palindrome. 
Here are some examples of palindromes:

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and 
"No 'x' in Nixon".
-----------------------------------------------------------------------------------*/

let checkStr = "cat";
let re = /[\s,?.!'@#$%]/g;
let isPalindrome = true;
checkStr = checkStr.replace(re,"").toLowerCase();
for(let d = 0; d < checkStr.length/2; d++){
    if(checkStr[d] !== checkStr[checkStr.length - 1 - d]){  
        isPalindrome = false;
        break;
    }
}
if(isPalindrome){
    console.log(`${checkStr} is a palindrome`);   
}
else{
    console.log(`${checkStr} is not a palindrome`);
}