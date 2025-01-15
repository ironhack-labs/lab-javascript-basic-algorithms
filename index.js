// Iteration 1: Names and Input

const hacker1 = "David";
const hacker2 = "Uzma";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

//2.1
let numChar1 = hacker1.length;
let numChar2 = hacker2.length;
if(numChar1 > numChar2){
console.log(`The driver has the longest name, it has ${numChar1} characters.`)
}else if(numChar1<numChar2){
console.log(`It seems that the navigator has the longest name, it has ${numChar2} characters.`)
}else{
    console.log(`Wow, you both have equally long names, ${numChar1} characters!`)
}


// Iteration 3: Loops

//3.1
let sepChar = "";
for(let i = 0; i < hacker1.length; i++){
sepChar += hacker1[i] + " ";

}
console.log(sepChar.toUpperCase());
// 3.2
let sepChar2 = "";
for(let j = hacker2.length - 1; j >= 0; j--){

sepChar2 += hacker2[j];
}
// 3.3
console.log(sepChar2);
let lexiOrder = hacker1.localeCompare(hacker2);

if(lexiOrder === -1){
    console.log(`The driver's name goes first.`)
} else if(lexiOrder === 1){
    console.log(`Yo, the navigator goes first, definitely.`)
}else if(lexiOrder === 0){
    console.log(`What?! You both have the same name?`)
}


// Bonus 1:

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacus neque, congue in convallis a, venenatis nec libero. Etiam sodales congue scelerisque. Integer tristique, enim quis rhoncus hendrerit, nisi erat semper augue, id porta ipsum ligula gravida justo. Donec in tellus condimentum, maximus sapien at, pellentesque libero. Aliquam non erat consectetur, sodales ex in, commodo dui. Donec congue ipsum dolor, gravida mattis neque volutpat nec. Vivamus eleifend hendrerit scelerisque.

Donec non purus nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas sit amet dolor finibus, semper libero id, consectetur ex. Vestibulum pretium eleifend orci, vel vestibulum felis lacinia in. Phasellus non mauris odio. In vitae felis sed odio laoreet euismod. Curabitur viverra nec odio vel consequat.

Nulla ut tortor felis. Integer congue placerat pulvinar. Aliquam eget bibendum diam. Nunc non faucibus erat, ultrices hendrerit risus. Nam dignissim pretium ultricies. Maecenas pharetra id nunc id tristique. Integer vulputate porta dolor, eget feugiat diam. Nunc neque purus, aliquam in ante sit amet, rutrum sodales metus. Integer id tristique lectus. Donec sed pharetra magna. Donec est nunc, dignissim in consectetur quis, mattis in dui. Integer in convallis ligula. Aenean facilisis dictum nisl, non ornare ex fringilla vel. Pellentesque luctus purus vitae eros laoreet, quis bibendum mi iaculis. Quisque sollicitudin odio vel sagittis dignissim. Fusce ornare etfringilla mauris id dignissim.`;

let newLongText = longText.split(" ");

function countProgram (str){
let totalLength = newLongText.length;
return totalLength;
}
countProgram(newLongText);
console.log(countProgram(newLongText));

let count = 0; 

for( let i = 0; i <= longText.length - 1; i++){
    if( longText[i] === "e" && longText[i + 1] === "t"){
        count ++;
    }
}
console.log(count);


// Bonus 2

let phraseToCheck = "put it up";
let newPhraseToCheck = (phraseToCheck.replace(/[^a-zA-Z]/g,"")).toLowerCase();

let reversePhrase = "";

for (let i = newPhraseToCheck.length - 1; i >= 0; i--){
    reversePhrase += newPhraseToCheck[i];
}
if ( newPhraseToCheck === reversePhrase ){
    console.log(" It is a Palindrome");
}else{
    console.log("Is not a Palindrome");
}
console.log(newPhraseToCheck)
console.log(reversePhrase)



