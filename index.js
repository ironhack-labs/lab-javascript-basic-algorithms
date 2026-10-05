// Iteration 1: Names and Input

let hacker1 = "Sam"
let hacker2 = "Brave"

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigators's name is ${hacker2}`);


// Iteration 2: Conditionals

if(hacker1.length < hacker2.length){
    
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} caracters.`)

}else if(hacker1.length > hacker2.length){
    
    console.log(`The driver has the longest name, it has ${hacker1.length} caracters.`)
    
}else{
    
    console.log(`Wow, you both have equally long names, ${hacker1.length} caracters!`)

}


// Iteraton 3: Loops

let chars = "";
let reversed = "";

for(let i = 0; i < hacker1.length; i++){
    
    chars += hacker1[i].toUpperCase() + " ";
}

console.log(chars);

for (let j = hacker2.length-1; j >= 0; j--){
    
    reversed += hacker2[j];
}

console.log(reversed)

let char = "abcdefghijklmnopqrstuvwxyz"
let decided = false;

for(let i = 0; (i < hacker1.length) && (i < hacker2.length); i++){

    if(char.indexOf(hacker1[i].toLowerCase()) > char.indexOf(hacker2[i].toLowerCase())){
       
        console.log("Yo, the navigator goes first, definitely.")
        decided = true;
        break;
    
    }else if(char.indexOf(hacker1[i].toLowerCase()) < char.indexOf(hacker2[i].toLowerCase())){
       
        console.log("The driver's name goes first.")
        decided = true;
        break;
        
    }else{
       
        continue;
    
    }

}

if(decided === false){
    if(hacker1.length === hacker2.length){

        console.log("What?! You both have the same name?")
    }else if(hacker1.length < hacker2.length){

        console.log("The driver's name goes first.")
    }else{
        console.log("Yo, the navigator goes first, definitely.")
    }
}


// BONUS 1

let longText = `Proin sit amet lorem venenatis lorem mattis lacinia vitae a est. Suspendisse accumsan lacinia neque et blandit. Suspendisse viverra massa quis ipsum pharetra pellentesque. Nulla facilisi. Quisque quis dolor nec orci consequat feugiat quis ut eros. Duis vehicula et velit a dapibus. Etiam malesuada placerat mauris, quis molestie leo hendrerit mollis. Maecenas vulputate, leo a pellentesque auctor, lectus neque feugiat nisi, quis feugiat magna nunc at orci. Praesent odio arcu, hendrerit vel lorem eu, rhoncus vestibulum nisl. Maecenas commodo ultrices mi, et interdum tellus volutpat ut.
Aliquam vitae suscipit risus, quis egestas risus. Phasellus mauris tellus, imperdiet vel dictum ut, congue in tortor. Sed ornare ipsum lorem. Sed venenatis turpis blandit lorem varius viverra. Aenean ultricies quam orci, eu blandit nulla varius convallis. In et mollis ipsum. Phasellus viverra ultrices ligula, sit amet tincidunt urna cursus sed. Aliquam dignissim semper erat vel feugiat. Praesent in eleifend nisi. Sed egestas a est sed consectetur. Nam tempor semper erat, a consequat lectus commodo non. Proin eros augue, dictum nec mollis non, pharetra elementum urna. Etiam eros odio, molestie at mi at, pellentesque bibendum nibh. In vitae ornare eros.
Pellentesque fringilla erat ex, quis feugiat enim elementum in. Cras nec ex quis urna dignissim vestibulum et non nibh. Aenean facilisis a arcu ultricies tincidunt. Fusce maximus arcu non velit hendrerit tincidunt. Sed pellentesque et nulla accumsan aliquam. Vestibulum et libero et arcu tincidunt sollicitudin quis vitae purus. Pellentesque ultricies erat vitae facilisis posuere. Nullam mollis tincidunt augue in vehicula. Donec at justo sit amet metus fringilla egestas ut maximus lectus. Integer congue, purus suscipit facilisis volutpat, purus magna condimentum nibh, eu tristique urna massa sed tellus. Aliquam lobortis feugiat ante et vehicula. Integer blandit accumsan purus, quis pellentesque ante maximus quis. Morbi sodales sodales dapibus. Nam commodo vulputate mauris et maximus. Duis lorem nibh, iaculis at nisl id, fermentum fringilla ligula.`

let wordCount = 0;
let et = 0;

for (let i = 0; i < longText.length; i++){
  if ((longText[i] !== " " && longText[i] !== "\n") && (longText[i-1] === "\n" || longText[i-1] === " ")){
    wordCount++;
  }


  if((longText[i-1] === " " || longText[i-1] === "\n" || i === 0 ) && longText[i] === "e" && longText[i+1] === "t" && (longText[i+2] === " " || longText[i+2] === "." || longText[i+2] === "," || longText[i+2] === "\n")){
    et++
  }
}

// BONUS 2

let phraseToCheck = "No 'x' in Nixon";
 
// Your code here
let cleanPhrase = "";
let isPalindrome = true;
let reversedPhrase = "";

phraseToCheck = phraseToCheck.toLowerCase()

for (let i = 0; i < phraseToCheck.length; i++){
    
    if(phraseToCheck[i] === " " || phraseToCheck[i] === "." || phraseToCheck[i] === "," || phraseToCheck[i] === "!" || phraseToCheck[i] === "?" || phraseToCheck[i] === "'" ){
        continue;
    }else{
        cleanPhrase += phraseToCheck[i];
    
    }

}

for(let i = cleanPhrase.length-1; i >= 0; i--){

    reversedPhrase += cleanPhrase[i];

}

if(cleanPhrase !== reversedPhrase){
    isPalindrome = false;
}



console.log(`El texto tiene ${wordCount} palabras`);
console.log(`El texto tiene ${et} "et"`);
console.log(isPalindrome); 