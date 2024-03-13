// Iteration 1: Names and Input
const hacker1 = "Kivanc";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Fatma";
console.log(`The driver's name is ${hacker2}`);
// Iteration 2: Conditionals

let len1 = hacker1.length;
let len2 = hacker2.length;

if(len1 > len2){
    console.log(`${hacker1} has the longest name! It has ${len1} characters`);
}
else if(len2 > len1){
    console.log(`${hacker2} has the longer name! It has ${len2} characters`);
}
else{
    console.log(`Your name has equal length and ${len1} characters`);
}

// Iteration 3: Loops
let spaceNames = "";
for (let i=0; i < hacker2.length; i++) {
    spaceNames += hacker2[i].toUpperCase() + " "; 
}   

console.log(spaceNames);

//Bonus 1
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac ultricies ligula. Nulla nulla urna, malesuada at enim luctus, consectetur sagittis ante. Ut a justo at tellus cursus posuere. Phasellus a malesuada enim. Quisque in elit gravida, congue mi vel, faucibus massa. Cras gravida magna vitae urna scelerisque, quis commodo metus efficitur. Aenean tincidunt dolor vitae diam eleifend, id cursus lacus venenatis. Vestibulum aliquam ex tellus. Etiam rutrum ac felis eu aliquet. Curabitur sit amet tincidunt leo. Praesent lorem augue, rhoncus vel justo ut, scelerisque rhoncus augue. Aenean suscipit leo sit amet ornare suscipit. Nunc sit amet ipsum risus. Nunc imperdiet vitae augue ornare efficitur. Nunc rhoncus erat non tempus hendrerit. Nulla scelerisque iaculis suscipit. Etiam porttitor hendrerit lectus in consectetur. Integer quis sem sed nunc porta malesuada. Morbi in vehicula augue. Morbi id condimentum tortor. Etiam suscipit purus sit amet est pharetra, vel sollicitudin nibh tincidunt. Nunc maximus commodo nunc sit amet tempus. Sed sit amet odio eu enim posuere tempor. Curabitur pharetra erat sed euismod facilisis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sodales semper est, at ullamcorper eros vestibulum vitae.`;

let wordArray = longText.split(" ");

console.log(wordArray.length);

let etArray = longText.split("et");

console.log(etArray.length);


/*let count = 0;

for(let i = 0; i < longText.length; i++){

    if (longText[i] === " "){
        count++;
    }
}
let wordNumber = count +1 ;
console.log("word number is: " + wordNumber); */


//Bonus 2

function returnPalindrom(phraseToCheck) {

let len = phraseToCheck.length ; 

for(let i=0 ; i < Math.floor(len/2) ; i++ ){

    if (phraseToCheck[i] !== phraseToCheck[len-1-i]) {

        console.log("not equal.. " + phraseToCheck[i]  + " " + phraseToCheck[len-1-i] );
        return false;
    }
}

return true;
}

let phrase = `dogmaiamgod`;
let result = returnPalindrom(phrase);

if(result === true){
    console.log("The string is a palindrome.." );
}
else{
    console.log("The string is not a palindrome.. " );
}


