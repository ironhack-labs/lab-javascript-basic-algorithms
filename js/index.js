console.log("I'm ready!");

// Iteration 1: Names and Input
//
let hacker1 = "Adam";
console.log(`The drivers' name is ${hacker1}`);

let hacker2 = "There is no navigator";
console.log(`The navigators' name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length>hacker2.length || hacker2 === "There is no navigator"){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters long`)

} else if (hacker1.length<hacker2.length || hacker2 === "There is no driver"){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)

} else {
    console.log(`Wow, you both have equally long names, XX characters!`)
};

// Iteration 3: Loops
let blockNameCaps="";
for (let i = 0; i < hacker1.length; i++) {
    blockNameCaps += hacker1[i].toUpperCase() + " "
};
    console.log(blockNameCaps.trim()/*slice(0, blockNameCaps.length - 1)*/);

let emaNesrever=""
for (let j = hacker2.length - 1 ; j >= 0; j--){
    emaNesrever += hacker2[j]
}   ;
    console.log(emaNesrever);

let lexOrder = hacker1.localeCompare(hacker2);

if (lexOrder = 1) {
    console.log(`The driver's name goes first.`);
} else if (lexOrder = -1){
    console.log(`Yo, the navigator goes first definitely.`);
} else if (lexOrder = 0){
    console.log(`What?! You both have the same name?`);
}


// Bonus #1
const loremPara = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra mauris turpis, sit amet ullamcorper eros posuere quis. Donec magna eros, tincidunt a egestas ut, feugiat finibus lectus. Cras euismod elit lorem, id porta tellus sagittis vel. Proin eu efficitur turpis, eget luctus est. Integer ultrices urna viverra pharetra accumsan. Nullam vestibulum lacinia sem id luctus. Proin ac massa sed purus maximus hendrerit. Pellentesque porta aliquet sem ac commodo. Vestibulum imperdiet elit eu nisl malesuada, ut consequat elit semper. Phasellus hendrerit risus vitae lorem euismod, eu viverra ante bibendum. Morbi quis enim a risus porttitor maximus. Nullam sit amet nisi eget orci cursus fringilla nec non est. Sed a volutpat elit. Sed pellentesque, purus et tincidunt imperdiet, mauris neque viverra arcu, in aliquet libero elit ut felis. Duis interdum ut metus posuere commodo. Fusce feugiat efficitur neque nec sodales. Donec dapibus arcu a risus tristique, sed finibus purus blandit. Sed augue mi, pulvinar et fringilla id, hendrerit eu massa. Aenean pulvinar sem sit amet justo facilisis elementum. Duis quis interdum magna, non gravida lorem. Proin tempus tellus eu ipsum molestie elementum. Nulla a gravida augue. Fusce id elit tortor. Maecenas euismod nisi ut vehicula eleifend. Mauris id nulla nec neque iaculis blandit sed non quam. Sed eget odio vel ipsum imperdiet condimentum in sit amet justo. Curabitur sit amet eros at erat mattis rutrum. Curabitur finibus scelerisque velit imperdiet molestie. Cras arcu nisl, hendrerit id varius sit amet, facilisis quis sem. Curabitur convallis rhoncus dui, et porttitor turpis fringilla id. Fusce leo odio, convallis et scelerisque sed, vulputate at odio. In sollicitudin a nisi id ultricies.";
let wordCount = 1;
let etCount = 0;
for (let i = 0 ; i < loremPara.length; i++) {
    if (loremPara[i] === " "){wordCount++}
    const et = loremPara[i] + loremPara[i + 1] + loremPara[i + 2] 
    if (et === " et"){etCount ++}
}
if (loremPara.length === 0){
    console.log(`There are no words in the passage`)
} else if (loremPara.length >= 1){
    console.log(`The number of words in the passage is ${wordCount}`)
}

console.log(`The number of ´et´'s in the passage is ${etCount}`)


// Bonus 2

let phraseToCheck = "Named undenominationally rebel, I rile Beryl? La, no! I tan. I’m, o Ned, nude, man!"
const pTCReady = phraseToCheck.toUpperCase().replace(/[^a-zA-Z0-9]/g, '');
let pTCBackward = "";

for (let j = pTCReady.length -1; j >= 0; j--) {
    if (pTCReady[j] === " ") {
        continue
    } else (pTCBackward += pTCReady[j])
    };

if (pTCReady === pTCBackward) {
    console.log("This is a palindrome")
} else {
    console.log("No palindromes here")
};

