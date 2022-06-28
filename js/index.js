// Iteration 1: Names and Input

let hacker1 = "Livermore";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Jesse";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}characters.`);
}else{
    console.log(`Wow, you both have equally long names, driver ${hacker1.length} and navigation ${hacker2.length} characters!.`);
}
// Iteration 3: Loops
/* Print all the characters of the driver's name, separated by a space and in capitals i.e.
 */

let copyHacker1 = Array.from(hacker1).map(ele =>{
    return ele + " ";
})
console.log(copyHacker1.join('').toUpperCase());

/* Print all the characters of the navigator's name, in reverse order. i.e.
 */

let reverse = '';

for(let i = hacker1.length-1; i >= 0 ;i--){
 reverse += hacker1[i];
}
console.log(`Word reverse: ${reverse}`);

/*
Generate 3 paragraphs. Store the text in a variable type of string.
 Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears. */

let lorenWord = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu turpis non lorem lacinia lobortis congue ac eros. Vestibulum tellus nibh, vestibulum quis nunc sed, semper elementum ante. Curabitur elementum pellentesque nisi, et feugiat risus feugiat imperdiet. Cras vitae tempus erat. Aliquam eleifend bibendum fringilla. Aenean lobortis neque vitae nunc porta porta. Pellentesque vitae risus id dolor pharetra mollis. Sed ullamcorper aliquet dolor, vitae varius elit. Sed vitae interdum augue. Quisque sit amet nisl ut urna pulvinar placerat. Fusce porta sagittis libero id tristique. Ut tincidunt ut nisi sed ornare. Vestibulum ac tellus risus. Curabitur augue nibh, fermentum non magna nec, tincidunt iaculis orci. Duis eu elit euismod, pretium est porta, consequat enim. Sed lobortis turpis et blandit bibendum.
Suspendisse tempor, urna in ultricies ultricies, ex felis accumsan est, vel fermentum lorem augue congue nisl. Donec scelerisque orci a metus consequat, sit amet rutrum purus semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec posuere auctor dui a pretium. Phasellus ornare libero ac lorem pharetra aliquet. Integer venenatis tincidunt leo, eu cursus enim posuere sit amet. Sed venenatis, urna quis aliquam mollis, erat enim consectetur urna, vel malesuada nibh sem sed tortor. Vivamus pretium nisl at erat commodo suscipit. Donec finibus dapibus viverra. Donec malesuada turpis non enim accumsan, et eleifend nulla fringilla. Praesent malesuada, tellus in volutpat pharetra, urna nunc vestibulum velit, vel imperdiet leo enim eget lectus. Praesent gravida mi vitae fermentum aliquam. Sed aliquet nec leo eget ultrices. Vestibulum orci arcu, vehicula posuere elit vitae, eleifend mattis nisl. Nunc diam libero, porta vel porttitor auctor, venenatis nec lectus.
Morbi ultrices ipsum fermentum ligula viverra accumsan. Vivamus eu gravida lectus. Pellentesque et purus eu justo pulvinar rutrum ac ac lectus. Pellentesque condimentum urna et mi dapibus convallis. Sed sit amet velit dignissim, vulputate justo nec, euismod turpis. Fusce nec nunc sed erat sodales consectetur malesuada at dolor. Praesent magna arcu, malesuada sed pretium non, pulvinar vel diam. Nam congue malesuada mauris, et mattis tortor efficitur at. Vestibulum id mauris interdum, volutpat elit eleifend, tincidunt nibh. Cras in vestibulum neque. Cras dignissim lacus interdum dignissim elementum. Donec mauris tellus, ultrices eu cursus vel, convallis in quam. Proin vitae neque ac erat faucibus rutrum. Donec a urna turpis. Maecenas gravida metus lectus, sed suscipit lacus elementum vitae.`;

let wordEt = 0;
let filterWord = lorenWord.split('').filter(word=>{
    return (word !== "." && word !== ",") ? word : '';
}).join('').split(' ').reduce((count, ele)=>{ 
    (ele === 'et') ?  wordEt++ : '';
    return count + 1; 
},0);

console.log(`Los tres parrafos contienen: ${filterWord} palabras.`);
console.log(`La palabra 'et' aparece: ${wordEt} veces.`);



/* Create a new variable phraseToCheck and have it contain some string value. 
Write a code that will check if the value we assigned to this variable is a Palindrome.
 */

let phraseToCheck = `No 'x' in Nixon`;

let regPhrase = phraseToCheck.toLowerCase().replace(/[^a-zA-Z]/g,"").split('');//clean string especial characters
//returns boolean true if the condition is equal, else false
let newPharse = regPhrase.every((e, i , regPhrase) => {return (e === regPhrase[regPhrase.length - i - 1 ]) });

console.log(newPharse ? `Pharse ${phraseToCheck} is a palindrome`:` Phrase ${phraseToCheck} isn't  a palindrome` );

