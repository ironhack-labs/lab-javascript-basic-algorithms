console.log ("I'm ready!!")
// Iteration 1: Names and Input

let hacker1 = "Sara";
console.log (`The driver's name is ${hacker1}`);
let hacker2 = "Carla";
console.log (`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log( `The driver has the longest name, it has ${hacker1.length} characters.`)
}else if ( hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else {
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
// 3.1:
numberOfCha1=hacker1.length;
numberOfCha2=hacker2.length;
let nameUpperCase = "";
for (let i = 0 ; i < numberOfCha1 ;i++) {
    nameUpperCase += hacker1[i].toUpperCase()+" "
}
console.log(nameUpperCase);

// 3.2:
let hacker2Revers= hacker2.split("").reverse().join("");
let nameReverse= "";

for (let i = 0 ; i < numberOfCha2 ;i++) {
    nameReverse +=hacker2Revers[i];
}
console.log (nameReverse);

//3.3:
let order1=hacker1.localeCompare(hacker2);

if (order1 === -1) {
    console.log(`The driver's name goes first.`);
}else if(order1 === 1){
    console.log(`Yo, the navigator goes first definitely.`);
}else {
    console.log(`What?! You both have the same name?`);
}

/* Bonus Time!
 Bonus 1:
 */
//Generated 3 paragraphs, 301 words, 2060 bytes of Lorem Ipsum
let paragrph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor tellus quis massa luctus, nec facilisis turpis scelerisque. Fusce eros felis, ultrices in facilisis eu, venenatis nec lorem. In consectetur semper arcu non venenatis. Donec sagittis risus non massa blandit, vitae aliquam ipsum consequat. Nunc et dignissim mi. Proin bibendum enim sapien, nec sodales ante feugiat a. Mauris rhoncus leo tellus, vel faucibus ante pharetra id. Proin malesuada, quam non fringilla venenatis, massa neque consequat dui, nec faucibus odio libero id enim. Suspendisse venenatis congue nunc, at tempor odio feugiat id. In aliquam tincidunt ligula. Proin euismod nibh sapien, non euismod risus iaculis sed.

Vestibulum gravida diam dolor, in tempus dolor luctus vitae. Cras tristique tempus lorem, vel mollis risus tincidunt vel. Aenean pellentesque lacus id leo pulvinar efficitur. In rutrum vel leo vel mollis. Curabitur elementum augue quis lectus tempus pulvinar. Morbi fermentum ut neque eget pellentesque. Sed sed lorem sollicitudin, aliquam ipsum vitae, tristique ipsum. Fusce vel odio non diam placerat egestas sed eu orci. Maecenas pharetra ex non libero placerat, eget pretium sem hendrerit. Integer tristique metus ligula, sed dapibus nisl mollis vel. Donec fermentum dictum consectetur. Sed blandit eleifend felis, eget pulvinar mi feugiat vitae. Sed mi lectus, porta quis posuere eu, tempor vel mi. Praesent commodo purus aliquam quam ullamcorper, id finibus metus fermentum.

Proin pretium mi nec cursus cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla vitae tempor justo. Mauris id ligula fermentum, volutpat augue non, dapibus ex. Cras sollicitudin turpis lectus, ac aliquet tortor pretium lobortis. Pellentesque eleifend nec augue non sagittis. Mauris et sem pretium, mattis nibh in, ullamcorper dolor. Suspendisse ultricies diam eget nulla facilisis, vel imperdiet ligula rutrum. Pellentesque congue odio sed lectus mattis aliquam. Aenean id ante pharetra, venenatis erat sed, euismod nisl.`

let listOfWords = paragrph.replace("\n"," ").replace("\n"," ").replace(",","").split(" ");
let numberOfWords = listOfWords.length;
console.log(`The number of words in the string is ${numberOfWords}.`);
let count = 0;
for (let i = 0; i< listOfWords.length; i++ ){
    if (listOfWords[i] === "et") {
        count += 1;
    }
}
console.log (`the number of times the Latin word et appears is ${count}`);


//Bonus 2
let phraseToCheck = "No 'x' in Nixon";
phraseToCheck = phraseToCheck.toUpperCase;
let phraseToChecklength = phraseToCheck.length;
let newPhrase="";
let phraseToCheckRevers = "";


for (let i = 0; i < phraseToChecklength ; i++){
    if (phraseToCheck[i]=== " " || phraseToCheck[i]=== "'"  ){
        continue
    }else{
        newPhrase+=phraseToCheck[i]
    }
}
let newPhraseLength =newPhrase.length

for (let i = newPhraseLength-1 ; i >= 0 ; i--){
    phraseToCheckRevers += newPhrase[i];
}


if (newPhrase.substring(0,(newPhraseLength/2)) == phraseToCheckRevers.substring(0,(newPhraseLength/2 ))){
    console.log( "They are the same!!!");
}else {
    console.log (" they are no de same :( ");

}




