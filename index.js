// Iteration 1: Names and Input

let hacker1 = "Gonçalo";
let hacker2 = "Mariana";


console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals


if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
// Iteration 3: Loops

//3.1

console.log(hacker1.split("").join(" ").toUpperCase());

//3.2
let hacker2Reversed ="";

for (let i = hacker2.length-1; i >= 0; i--) {

    hacker2Reversed += hacker2[i];

}

console.log(hacker2Reversed);

//3.3

if (hacker1.localeCompare(hacker2) === -1){
    console.log(`The driver's name goes first.`);

}
else if(hacker1.localeCompare(hacker2) === 1){
    console.log(`Yo, the navigator goes first, definitely.`);

}
else if(hacker1.localeCompare(hacker2) === 0){
console.log(`What?! You both have the same name?`);
}

//Bonus 1

longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a volutpat tellus. Aenean a elementum massa. Nam fermentum feugiat justo, sagittis bibendum metus iaculis ac. Morbi scelerisque tristique libero, a cursus odio varius faucibus. Maecenas id quam fringilla, cursus nunc ac, fringilla est. Mauris rhoncus erat eu diam volutpat, et iaculis massa tempus. Cras semper justo vel libero vestibulum, sed dapibus lectus semper. Pellentesque vel egestas felis. Sed vitae gravida turpis, et pharetra sapien. Maecenas tempor est eu est interdum, sit amet consectetur ipsum luctus. Sed ultricies iaculis mattis. Sed vel laoreet mauris, sed imperdiet lorem. Nunc et mi mauris. Mauris pharetra cursus bibendum. Duis ultricies felis at elit sollicitudin elementum. Morbi et sodales justo. Ut cursus ipsum vitae magna sagittis vestibulum. Pellentesque bibendum vehicula enim quis rhoncus. Maecenas facilisis dui nec risus pretium, vitae egestas libero euismod. Aenean maximus sagittis eros, vitae tristique tellus fringilla vitae. Integer at feugiat metus. Fusce congue ac erat vel tempor. Nunc sed eros sed metus tristique semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla justo augue, dictum ut mi posuere, porttitor euismod magna. Fusce sit amet lorem nec nulla tempus viverra. Integer dapibus scelerisque turpis, eget molestie nisi sollicitudin vitae. Vestibulum eu tortor euismod, placerat augue tincidunt, placerat magna. Pellentesque pulvinar ullamcorper lacus. Pellentesque id leo vitae nulla lobortis molestie sed ac velit. Fusce quis vestibulum neque, sit amet facilisis ante. Quisque eu quam non tellus hendrerit pulvinar faucibus id dui. Integer purus justo, efficitur vel velit sed, scelerisque lacinia risus. Vestibulum maximus urna sapien, at egestas ante sagittis vitae. Curabitur auctor tempor nisi, in mattis lorem posuere vel. Sed at dolor ut metus tristique aliquet at a arcu. Vestibulum magna lorem, dictum a lorem sed, ultrices pulvinar sem. Pellentesque urna purus, elementum vitae metus at, consectetur suscipit odio. Sed ultrices justo nulla, sit amet finibus lectus lobortis at. Suspendisse at facilisis mi.";

longTextArray = longText.split(" ");

console.log(`The text has ${longTextArray.length} words.`);

let wordCountEt = 0;

for (let i = 0; i <= longTextArray.length-1; i++) {
    if (longTextArray[i] === "et"){
        wordCountEt++;
    }
    
}
console.log(`The word "et" appears ${wordCountEt} times.`);

//Bonus 2

let phraseToCheck = "stack cats";
let lowCaseSquishedPhrase = "";

//removed punctuation, gaps and turned the phrase into lower case.
for( let i = 0; i<= phraseToCheck.length-1; i++){
    let lowChar = phraseToCheck[i].toLowerCase();
    if (lowChar >= "a" && lowChar <= "z"){
        lowCaseSquishedPhrase += lowChar;
    }

}

// reversed the previous string that was obtained above
let reversedSquishedPhrase = "";

for(let i = lowCaseSquishedPhrase.length-1; i>= 0; i--){
    reversedSquishedPhrase += lowCaseSquishedPhrase[i];
}

// compared both the reversed and non-reversted string to see if they are the same.
if(lowCaseSquishedPhrase === reversedSquishedPhrase){
    console.log(`Yup, that's a palindrome alright.`)
}
else {
    console.log( `Nope, not a palindrome, try again!`);
}