//jshint esversion:6


// Iteration 1: Names and Input

let hacker1 = "Johnny";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "June";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals


if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
}


// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let hackerSpace = "";
for (let x = 0; x < hacker1.length; x++){
    hackerSpace += hacker1[x].toUpperCase() + " "; 
}
console.log(hackerSpace);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let hackerReverse = "";
for (let x = hacker2.length-1; x >=0; x--){
    hackerReverse += hacker2[x];
}
console.log(hackerReverse);

// 3.3 lexicographic order

if (hacker1[0] < hacker2[0]){
    console.log("The driver's name goes first.");
} else if (hacker1[0] > hacker2[0]){
    console.log("Yo, the navigator goes first definitely.");
} else if (hacker1[0] === hacker2[0]) {
    console.log("What?! You both have the same first letter?");
}

// OR WHOLE STRING IN ORDER
let lexicoOutcome = hacker1.localeCompare(hacker2);
console.log(lexicoOutcome);

if (lexicoOutcome === -1){
    console.log("The driver's name goes first.");
} else if (lexicoOutcome === 1){
    console.log("Yo, the navigator goes first definitely.");
} else if (lexicoOutcome === 0){
    console.log("What?! You both have the same name?");
}


// Bonus Time


//Bonus 1

let lorem = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac blandit mi. Integer dictum, nisi eu ullamcorper porta, est erat dictum odio, quis iaculis nisl risus et ex. Nam ante lorem, aliquet non eleifend quis, ultrices eget justo. Sed posuere nulla a magna dignissim, nec vehicula lectus viverra. Duis non felis malesuada, mollis diam vitae, consectetur purus. Nam quis urna vel dui placerat tincidunt. Donec placerat elit id tortor eleifend laoreet. Aliquam fermentum enim et ornare eleifend. Phasellus pellentesque sagittis augue. Phasellus nec tincidunt arcu, vitae porttitor nisi.

Duis velit est, ultricies nec sem nec, interdum tempor ex. Nulla fermentum libero pharetra massa facilisis, eu elementum odio maximus. Ut faucibus a risus ut bibendum. Nunc consequat ex ut ullamcorper lacinia. In purus lacus, varius vitae aliquet eget, laoreet sit amet nibh. Sed lacinia vehicula ante tincidunt fringilla. Sed tincidunt est et nulla pellentesque commodo. Quisque quis elit ullamcorper, lacinia nisl sit amet, viverra ligula. Curabitur eget aliquet mi. Cras dignissim aliquet velit ac rutrum. Aliquam in enim eleifend, tempus ipsum in, faucibus erat. Donec eget lectus quis orci dapibus tincidunt in eu eros. Mauris vestibulum dictum felis id sodales. Cras vitae sapien ultrices, facilisis nisl feugiat, posuere quam.

Donec egestas odio tortor, at interdum odio pretium in. Proin a euismod nisl. Nam pharetra dui vehicula diam bibendum lobortis. Aliquam maximus a nisi vel blandit. Maecenas ut risus vel ex ornare blandit. Morbi condimentum orci ante, quis dignissim lectus commodo sed. Pellentesque ornare dui sit amet semper vehicula. Quisque massa urna, vulputate at mi vitae, faucibus mollis turpis. Etiam nec pharetra lacus, sed maximus libero. Duis at ligula elementum, tristique enim et, scelerisque leo. Nunc a malesuada est. Nunc quis consequat urna, quis congue lacus. Integer sed fermentum odio. Sed turpis lectus, lobortis eget pretium in, dapibus sed justo. `;

function countWords(text){
    let wordsCounted = 1;
    for (let i = 0; i < text.length; i++){
        if (text[i] === " "){
            wordsCounted ++;
        }
    }
    console.log(wordsCounted);
}

countWords(lorem);

function countEt(text){
    let etCounted = 1;
    for (let i = 0; i < text.length; i++){
        if ((text[i]+text[i+1]+text[i+2]+text[i+3]) === " et "){
            etCounted ++;
        }
    }
    console.log(etCounted);
}

countEt(lorem);


//Bonus 2

let newPhrase = "";
let phraseReverse = "";

// check if letter
function toLetter(phrase){
    for (let x=0; x<phrase.length; x++){
        let letter = phrase[x].toLowerCase();
        if (letter >= "a" && letter <= "z"){
            newPhrase += letter;
        } 
    }
    return newPhrase;
}

function reversePhrase(phraseToReverse){
    for (let x = phraseToReverse.length -1; x >=0; x--){
        phraseReverse += phraseToReverse[x];
    }
    return phraseToReverse;
}

function checkPalin(phrase){
    reversePhrase(toLetter(phrase));
    if (newPhrase === phraseReverse){
        console.log(`These are palindromes see: 1)${newPhrase} 2) ${phraseReverse}`);
    } else {
        console.log(`These are NOT palindromes see: 1)${newPhrase} 2) ${phraseReverse}`);
    }
}

let phraseToCheck = "Was it a car or a cat I saw?";

checkPalin(phraseToCheck);
