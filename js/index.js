// Iteration 1: Names and Input
const hacker1 = 'Marlena';
console.log(`The driver's name is ${hacker1}`);
const hacker2 = 'Gilad';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

let hackerType = 'driver';
let hackerLength = hacker1.length;
if (hacker1.length<hacker2.length) {
  hackerType = 'navigator';
  hackerLength = hacker2.length;
  console.log(`The ${hackerType} has the longest name, it has ${hackerLength} characters`);
} else if (hacker1.length==hacker2.length){
  console.log(`Wow, you both have equally long names, ${hackerLength} characters`);
}

// Iteration 3: Loops
let driverSep=hacker1[0].toUpperCase();
for (let i=1; i<hacker1.length;i++){
    driverSep += ' ' + hacker1[i].toUpperCase();
}
console.log(driverSep);
let navSep='';
for (let i=(hacker2.length-1); i>=0;i--){
    navSep += hacker1[i];
}
console.log(navSep);

if (hacker1>hacker2){
    console.log(`The driver's name goes first`);
} else if (hacker1<hacker2){
    console.log(`Yo, the navigator first definitely`);
}
    else {
        console.log(`What? We both have the same name!`);
    }


let paragraphs =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales justo enim, vitae sodales mauris gravida a. Nam condimentum quam id finibus porttitor. Sed a varius neque. Mauris faucibus a arcu ut placerat. Vivamus sed nulla sollicitudin, lobortis erat sed, placerat orci. Donec sed urna eget purus congue fermentum et et nunc. Aliquam sem lacus, pharetra vel tellus eu, facilisis pretium lectus. Pellentesque eget lectus sed odio commodo finibus non nec est. Nulla sollicitudin consectetur hendrerit. Vivamus sed lacinia turpis, eget dignissim purus. Duis at quam a neque congue luctus.
Etiam ut metus tincidunt, elementum lacus eget, dignissim libero. Phasellus dignissim, nibh in tincidunt accumsan, lacus risus sagittis nisl, nec aliquet mauris diam at ligula. Sed accumsan massa eget vulputate vestibulum. Ut pretium tincidunt ipsum, eget pulvinar nibh malesuada nec. Curabitur auctor faucibus mauris vitae rhoncus. Curabitur eu neque sollicitudin, varius lectus vitae, lobortis dui. Nunc felis nisl, dignissim quis odio vitae, ultricies ultrices quam. Etiam eu mi at odio efficitur posuere. Curabitur egestas tellus eu nulla hendrerit pulvinar.
Vestibulum ornare ipsum elit, quis mollis magna molestie id. Integer dignissim ligula lectus, quis vehicula tortor viverra non. Proin at ipsum velit. Curabitur at erat eget ex egestas tincidunt. Phasellus nisi urna, ornare at convallis rhoncus, fringilla nec dui. Nullam ac ultricies sem, eu pellentesque justo. Integer eu neque urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi vehicula fringilla odio, id egestas urna viverra et. Mauris nec velit lacinia nisi semper tempus. Praesent egestas mauris non risus iaculis, sed dapibus urna molestie. Integer iaculis ante purus, non tristique tortor maximus ut. Vivamus aliquet lectus sit amet metus gravida, vel faucibus urna placerat.`;
let spaceCounter = 0;
let etCounter = 0;
for (let i=0;i<paragraphs.length;i++){
    if (paragraphs[i]==' '){
        spaceCounter++;
    }
    if (paragraphs.slice(i,i+4)==' et '){
        etCounter++;
    }
}
console.log (`The paragraphs sum a total of ${spaceCounter+1} words and ${etCounter} appearances of the word "et".`);
let cleanPhrase = '';
let phrase = 'A man, a plan, a canal, Panama!';
for (let i=0; i<phrase.length; i++) {
    const smallPhrase = phrase[i].toLowerCase();
    if (smallPhrase>='a' && smallPhrase<='z'){
        cleanPhrase += smallPhrase;
    }
}
let j=0;
while (cleanPhrase[j]==cleanPhrase[cleanPhrase.length-1] && j<(cleanPhrase.length/2 ){
    j++;
}
if (j<cleanPhrase.length/2) {
    console.log(`The word is not a palindrome`);
} else {
    console.log(`The word is a palindrome`);
}