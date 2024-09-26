// Iteration 1: Names and Input

const hacker1 = "John";  //driver
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Mark";  //navigator
console.log(`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals


if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}

else if(hacker2.length > hacker1.length){
        console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`);
}

else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}



// Iteration 3: Loops 
// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

let driver =hacker1[0].toUpperCase();

for(let i=1; i< hacker1.length; i++){
    driver +=" " + hacker1[i].toUpperCase();
}

let navigator =hacker2[0].toUpperCase();

for(let i=1; i< hacker2.length; i++){
    navigator +=" " + hacker2[i].toUpperCase();
}

console.log(driver);
console.log(navigator);


//3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

let reverseName = hacker2[hacker2.length-1];

for (let i=hacker2.length-2; i>=0; i--){
    reverseName += hacker2[i];

}

console.log(reverseName);


//3.3 Depending on the lexicographic order of the strings, print:


if(hacker1.toUpperCase() === hacker2.toUpperCase()){
    console.log("What?! You both have the same name?");
}

else if(hacker1.localeCompare(hacker2) < 0){
    console.log("The driver's name goes first");
}

else {
    console.log("The navigator's name goes first ");
}




//Bonus 1:

//Generate 3 paragraphs. Store the text in a new string variable named longText.

const longText =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pulvinar, ligula vitae commodo gravida, turpis felis bibendum justo, pretium volutpat nulla arcu nec neque. Curabitur non justo eu lectus laoreet finibus. Suspendisse pellentesque tellus ut tempor pretium. Vestibulum eleifend quam et molestie faucibus. Pellentesque in vulputate lacus, nec euismod lectus. In a odio massa. Proin vitae metus vel justo varius porta eget ut massa. Donec venenatis nec felis ut volutpat. Suspendisse ut quam pharetra, porta lacus nec, semper arcu.

Vestibulum in pulvinar erat. Vivamus laoreet odio quis libero iaculis molestie. Vestibulum risus ante, sagittis et tempus nec, commodo in turpis. Cras ac elit ipsum. Vivamus nec dui egestas, suscipit augue non, laoreet leo. Fusce tristique diam laoreet aliquet varius. Suspendisse rhoncus porta tempor. Fusce congue ipsum egestas lacinia blandit. Nunc scelerisque scelerisque nunc, eget consectetur velit volutpat at. Sed dignissim risus eget tincidunt varius. Nunc iaculis vitae ligula eget ornare. Fusce tincidunt felis congue libero elementum tristique.

Sed eu vestibulum leo. Suspendisse iaculis dui eu turpis maximus ultricies et quis orci. Aenean posuere in nibh ac vestibulum. Pellentesque quis nunc sed erat dapibus auctor sit amet id elit. Nam et nulla vel nulla commodo viverra. Nam elit orci, blandit eget dapibus non, efficitur quis leo. Phasellus id eros vitae diam venenatis porta.`;



//Make your program count the number of words in the string.


let count = 0;

for(let i=0; i<longText.length; i++){
    if(longText[i] === " " && longText[i+1] !== " "){
    count++;
    }
}
console.log(count);


//Make your program count the number of times the Latin word et appears.


let countEt = 0;

for(let i=0; i<longText.length; i++){
    if(longText[i] === " " && longText[i+1] === "e" && longText[i+2] === "t" && longText[i+3] === " "){
    countEt++;
    }
}
console.log(countEt);



//Bonus 2:

//Create a new variable, phraseToCheck, containing some string value. Write a code to check if the value assigned to this variable is a Palindrome. Here are some examples of palindromes:

let phraseToCheck = "Was it a car or a cat I saw?";
let str = ""; 
let strReverse=""; 
const escapeChars = [" ",",","!","?","'"];

for (let i=0; i<phraseToCheck.length; i++){

    if(!escapeChars.includes(phraseToCheck[i])){
        str += phraseToCheck[i];
    } 
}

for( let i=str.length-1; i>=0; i--){
    strReverse += str[i];   
}

if(str.toUpperCase() === strReverse.toUpperCase()){
    console.log("Palindrome");
}
else{
    console.log("Not palindrome");
}




