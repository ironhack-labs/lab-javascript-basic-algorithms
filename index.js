// Iteration 1: Names and Input
const hacker1 = "Matt";
console.log(`The navigator´s name is ${hacker1}`)

const hacker2 = "Frederique";
console.log(`The navigator´s name is ${hacker2}`)


// Iteration 2: Conditionals

if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
    }

    else if(hacker1.length < hacker2.length) {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    }

    else{
    console.log(`Wow, you both have equally long names, XX characters!`);
    }



// Iteration 3: Loops

//part1
let newDriver = "";

for (let i=0; i<hacker1.length; i++) {

    if(i<(hacker1.length-1)){
        newDriver += (hacker1[i]).toUpperCase()+ " ";
    }
    else {
        newDriver += (hacker1[i]).toUpperCase()
    }

}

console.log(newDriver);

//part2


let reverseName = "";

for(let i=hacker2.length-1; i >= 0; i-- ){
    reverseName += hacker2[i];
}

console.log(reverseName);


//part3 first I did this but I only considered the first letter of the names :(

if (hacker1[0].toUpperCase() < hacker2[0].toUpperCase()) {
    console.log("The driver's name goes first.")
    }

    else if (hacker1[0].toUpperCase() > hacker2[0].toUpperCase()) {
    console.log("Yo, the navigator goes first definitely.")
    }

    else {
    console.log("What?! You both have the same name?")
    }

//part3 "more in the proper way"

if (hacker1.localeCompare(hacker2) == -1) {
    console.log("The driver's name goes first.")
    }

    else if (hacker1.localeCompare(hacker2) == 1) {
    console.log("Yo, the navigator goes first definitely.")
    }

    else {
    console.log("What?! You both have the same name?")
    }



//EXTRA1


let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu ullamcorper lacus, ac scelerisque est. Duis posuere et dui non dictum. Sed purus ante, auctor non nunc id, malesuada tempus sem. Duis at sapien venenatis, porttitor ipsum ac, condimentum ante. In hac habitasse platea dictumst. Curabitur nec risus aliquam, sodales lacus sed, scelerisque lectus. 

Etiam quis lectus mollis, aliquam magna fermentum, maximus arcu. Vestibulum a ante id metus pellentesque fermentum non eget justo. Duis rutrum nunc faucibus massa elementum pulvinar. Sed sit amet eros ut neque facilisis rhoncus. Donec et augue pharetra ligula scelerisque faucibus. Duis auctor volutpat magna quis tempor. Sed id eleifend eros, a congue eros. Nullam eget volutpat mi, sed posuere nibh. Duis turpis lorem, aliquam vitae convallis a, ullamcorper id eros. Aenean eget ultrices massa. Praesent vel mauris turpis. Donec accumsan sapien eget quam suscipit mattis. Phasellus elementum iaculis eros, ut tempus lectus sagittis sed. Vestibulum consequat, dui vel fringilla congue, risus magna fringilla ante, id porttitor est neque non arcu. Donec ut lorem orci. Pellentesque ac eros ipsum. Pellentesque pellentesque turpis ac mi hendrerit, eget sollicitudin sem gravida. 

Suspendisse laoreet, arcu nec dignissim dictum, dui tellus gravida orci, ac iaculis sem purus ut neque. Ut porttitor quam et arcu pellentesque, quis faucibus nisi semper. Aliquam eget velit non risus vehicula placerat quis ut elit. Pellentesque a accumsan tellus, quis mattis leo. Praesent orci est, tempor ac fringilla ac, molestie non velit. Vestibulum elit quam, volutpat vitae molestie eu, aliquet dictum orci. Praesent at est urna. Integer ac neque in erat sodales tempor. Proin molestie augue libero, sed scelerisque arcu elementum id. Duis tempor lorem ut est dapibus, sed accumsan enim imperdiet. Donec elementum, purus eu faucibus congue, massa mi sollicitudin ante, a mattis nibh leo in lectus.`


let counter = 1; //because I'm counting the last word that won´t have a space after 

for (let i = 0; i < longText.length; i++) {
    if (longText[i] === " "){
        counter += 1;
    } 
}
//total words in the text
console.log(counter);





//counting how many times the word "et" is included in the text:

let etWord = 0;  

for(let j = 0; j<longText.length; j++) {
    if ((longText[j]+longText[j+1]+longText[j+2]+longText[j+3]) === " et "){

    etWord += 1;}
}

console.log(etWord);



//EXTRA2

let phraseToCheck = "No 'x' in Nixon";
let newPhrase = "";

//first I want to eliminate spaces and signs

for (let i = 0; i<phraseToCheck.length; i++) {
    if(phraseToCheck[i]===" " || phraseToCheck[i]==="," || phraseToCheck[i]==="?" || phraseToCheck[i]==="!" || phraseToCheck[i]==="'") {
        continue;
    }
    else{
        newPhrase += phraseToCheck[i];
    }
}
//second I want to transform all to lowerCase

newPhrase = newPhrase.toLowerCase();

//I check the word in reverse

let phraseInReverse = "";

for(let j=newPhrase.length-1; j>=0; j--) {
    phraseInReverse += newPhrase[j];
}



if(newPhrase===phraseInReverse){
    console.log(` "${phraseToCheck}" IS A PALINDROME!!!`)
}
else {
    console.log(` "${phraseToCheck}" is NOT a Palindrome :(`)
}

