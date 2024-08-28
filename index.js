// Iteration 1: Names and Input
let hacker1 = "Patri";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Nuria";
console.log(`The navigator's name is ${hacker2}`);

let charHacker = 0;

// Iteration 2: Conditionals
if(hacker1.length === hacker2.length){
    charHacker = hacker1.length;
    console.log(`Wow, you both have equally long names, ${charHacker} characters!`);
} else if(hacker1.length < hacker2.length){
    charHacker = hacker2.length;
    console.log(`It seems that the navigator has the longest name, it has ${charHacker} characters.`);
} else if(hacker1.length > hacker2.length) {
    charHacker = hacker1.length;
    console.log(`The driver has the longest name, it has ${charHacker} characters.`);
} else {
    console.log("Don't forget to write the team names");
}

// Iteration 3: Loops
let hacker1UpperCase = ""
for (let i = 0; i<hacker1.length; i++){
    hacker1UpperCase += hacker1[i].toUpperCase() + " " //hay un espacio detrás de la I que queremos quitar
//tenemos que hacer un slice(hacker1.kength-1)
} console.log(hacker1UpperCase)

//3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ"
let reverseHacker = "";
for(let i = hacker2.length - 1; i >=0; i--) {
    reverseHacker += hacker2[i];
} 
console.log(reverseHacker);

//3.3 Depending on the lexicographic order of the strings, print:



if (hacker1.localeCompare(hacker2) === 1 ){
    console.log("Yo, the navigator goes first, definitely.");
} else if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.");
} else if (hacker1 === hacker2 ) {
    console.log("What?! You both have the same name?");
} else {
    console.log("Don't forget to write the team names");
}











// BONUS 1
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a ante a sem consequat feugiat. Nunc cursus arcu lectus, non laoreet massa tempor eget. Proin mollis, orci ut porta sodales, erat purus egestas nunc, et facilisis lacus orci non erat. Pellentesque ultricies nunc quis ligula pulvinar dapibus. Donec at dui enim. Fusce ante velit, sodales vitae metus vitae, accumsan ornare felis. Nam quis leo bibendum, scelerisque neque sed, ultricies est. Vivamus placerat lorem ligula, ac laoreet quam blandit nec. Nunc consequat risus nec quam eleifend hendrerit. Nam risus leo, ullamcorper in lectus id, feugiat mattis nisi. Pellentesque posuere augue non lacus lobortis, eu pellentesque urna pulvinar. Praesent dictum felis sit amet massa lacinia, et luctus diam tristique. Nulla in lectus nec nisi bibendum fringilla ac ac dui. In mollis lacus nunc, ac dictum elit ornare id. Donec suscipit erat sit amet volutpat egestas. Integer vitae magna pellentesque, malesuada sapien at, hendrerit nibh. Phasellus sem est, ullamcorper et pharetra eget, ultrices nec magna. Donec et nisi sit amet augue elementum venenatis. Curabitur sodales diam sit amet massa placerat, nec ornare nunc sodales. Pellentesque in efficitur magna, sed scelerisque diam. Etiam porta est diam, a aliquet enim lacinia sed. Aenean ex turpis, hendrerit in molestie non, porta in nisi. Sed porta venenatis sem sed porta. Nulla in scelerisque turpis, sit amet fermentum est. Morbi ac porttitor neque, volutpat interdum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin et interdum nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed dignissim commodo turpis eget vestibulum. Maecenas ut tortor eleifend tortor lobortis auctor. Donec fermentum dui id elit vestibulum suscipit. Integer quis malesuada mauris."

let count = 0
for (let i = 0; i<longText.length; i++){
    if (longText[i] === " "){
        count ++
    }
}console.log(count +1)

let countEt = 0
for (let i = 0; i<longText.length; i++){
    if (longText[i]+longText[i+1] === "et"){
        countEt ++
    }
}console.log(countEt)

// BONUS 2

//aqui le quitamos los espacios y caracteres de las frases de ejemplo
let phraseToCheck ="Hola buenos días";
let trimPhraseToCheck = phraseToCheck.split(" ").join(""); 
trimPhraseToCheck = trimPhraseToCheck.split(",").join(""); 
trimPhraseToCheck = trimPhraseToCheck.split("!").join(""); 
trimPhraseToCheck = trimPhraseToCheck.split("?").join("");
trimPhraseToCheck = trimPhraseToCheck.split("'").join(""); 

// aqui le damos la vuelta al texto sin espacios y sin signos de puntuación
let reversedPhrase = "";
for(let i = trimPhraseToCheck.length - 1; i >=0; i--) {
    reversedPhrase += trimPhraseToCheck[i];
} 

//comparamos las dos cadenas en minuscula 
if( reversedPhrase.toLowerCase() === trimPhraseToCheck.toLowerCase() ){
    console.log("Palindromo!");
} else {
    console.log("No es palindromo!");
}



