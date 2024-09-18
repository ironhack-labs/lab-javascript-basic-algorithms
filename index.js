// Iteration 1: Names and Input
const hacker1 = "Ricardo";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Antonio";
console.log(`The navigator's name is ${hacker2}`);





// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

// Iteration 3: Loops
//3.1
let upperCaseName = "";

for(let i=0; i < hacker1.length; i++) {
    upperCaseName += hacker1[i].toUpperCase() + " ";
} 
console.log(upperCaseName)

//3.2

let reversedName = "";

for(let j=hacker2.length - 1; j>=0; j--) {
    reversedName += hacker2[j];
}
console.log(reversedName)

3.3

if(hacker1.charAt(0)<hacker2.charAt(0)){
    console.log("The driver's name goes first.");
} else if(hacker1.charAt(0)>hacker2.charAt(0)){
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?")
};

// Bonus 1

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et eleifend arcu, eu commodo diam. Phasellus sed nulla eu leo maximus aliquam. Integer risus ipsum, eleifend sit amet arcu et, cursus viverra ex. Cras bibendum euismod ligula, eu sagittis justo faucibus sit amet. Integer fringilla magna a augue pellentesque, maximus porta felis commodo. Morbi tempus nec velit in congue. Mauris blandit metus eget accumsan pharetra. Donec eu scelerisque nibh. Mauris imperdiet libero quis urna rhoncus, vitae congue lectus ultricies. Mauris mattis nisi quis ex consectetur, at vulputate justo commodo. Etiam nec est ex. In odio nisi, feugiat sit amet purus vitae, dapibus faucibus velit. Etiam sed diam dui. Curabitur pharetra sem id molestie condimentum. Vestibulum sit amet molestie nibh. Sed et risus ac ligula euismod cursus. Proin id mi sed dolor luctus finibus sed a libero. Sed egestas tortor ac ante tincidunt, quis pellentesque nisl sollicitudin. Maecenas et sem malesuada, pulvinar quam eu, feugiat massa. Quisque pharetra nisi id commodo egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam egestas, est hendrerit suscipit pretium, neque augue viverra sapien, non viverra turpis augue mattis sem. Suspendisse ut condimentum lacus. Suspendisse in nulla ac diam accumsan laoreet. Vestibulum in neque elit. Praesent non auctor arcu. Nullam tristique pulvinar ligula. Morbi sit amet aliquet est, eget tincidunt sem. Suspendisse in mauris gravida, accumsan arcu a, lobortis dolor. In neque quam, vulputate eu leo eget, pharetra laoreet felis. In non elit semper, efficitur eros eget, condimentum felis. Vivamus quis leo ut lorem vestibulum volutpat. In semper porta maximus. Phasellus nec dignissim libero. Ut sit amet odio id nunc cursus placerat ac ac orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam nec lorem mattis, euismod metus ut, sagittis elit. Curabitur feugiat consectetur dolor, a scelerisque elit maximus sit amet. Vivamus eget justo lacus. Donec pharetra convallis luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed viverra, magna et feugiat lacinia, velit risus elementum sapien, eget maximus leo urna a est."



let countWords = 0;

for(let k=0; k<longText.length;k++) {
    if (longText[k] === " ") {
        countWords++;
    } 
}

console.log(countWords);

let countEt = 0;

for(let l=0; l<longText.length;l++) {
    let doubleChar = longText[l] + longText[l+1];
    if (doubleChar === "et") {
        countEt++;
    } 
}

console.log(countEt);

// EVITANDO QUE TOME LOS "ET" DENTRO DE PALABRAS

let countEtWord = 0;

for(let m = 0; m<longText.length;m++) {
    let check = longText[m] + longText[m+1] + longText[m+2] + longText[m+3];
    if (check === " et ") {
        countEtWord++;
    }
}

console.log(countEtWord);

// Bonus 2

let phraseToCheck = "A man, a plan, a canal, Panama!"
let lowerPhraseToCheck = ""

for (let i=0; i<phraseToCheck.length;i++) {
    let letter = phraseToCheck[i].toLowerCase();
    if(letter>="a" && letter<="z"){
        lowerPhraseToCheck += letter;
    }
}

let reversedLower = "";

for(let i=phraseToCheck.length-1; i>=0; i--) {
    let letter = phraseToCheck[i].toLowerCase();
    if(letter>="a" && letter<="z"){
        reversedLower += letter;
    }
}

if(lowerPhraseToCheck===reversedLower) {
    console.log("Es un palíndromo!")
}