// Iteration 1: Names and Input //driver
let hacker1 = "Emmanuel";

// Iteration 2: Conditionals
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Costa"; //navigator
console.log(`The navigator's name is ${hacker2}`);

let lengthHacker1 = hacker1.length;
let lengthHacker2 = hacker2.length;

if (lengthHacker1 > lengthHacker2) {
  console.log(
    `The driver has the longest name, it has ${lengthHacker1} characters.`,
  );
} else if (lengthHacker1 < lengthHacker2) {
  console.log(
    `It seems that the navigator has the longest name, it has ${lengthHacker2} characters.`,
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${lengthHacker1} characters!`,
  );
}

// Iteration 3: Loops
let letter = "";
for (let i = 0; i < lengthHacker1; i++) {
  letter += hacker1[i].toUpperCase();

  if (i < hacker1.length - 1) {
    letter += " ";
  }
}
//let result = letter
console.log(letter);

let reversedName = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  reversedName += hacker1[i];
}
console.log(reversedName);

//comparison
let comparisonResult = hacker1.localeCompare(hacker2);
if (comparisonResult === -1) {
  console.log(`The driver's name goes first.`);
} else if (comparisonResult === 1) {
  console.log(`Yo, the navigator goes first, definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

//BONUS 1
let longText = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie 
luctus lacus, sit amet malesuada lectus tincidunt eget. In rutrum urna 
id dictum volutpat. Morbi pellentesque libero laoreet nisi congue 
condimentum. Fusce mi mi, gravida elementum pretium eu, mollis eget 
velit. Nam aliquam sodales lacinia. Cras ut egestas enim. Cras faucibus 
nibh diam, vitae dictum ante maximus in. Orci varius natoque penatibus 
et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante
 ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
 Vivamus ac consequat nulla, ut semper nulla. Maecenas eget bibendum 
tortor, nec imperdiet ipsum. Nunc nunc orci, sollicitudin sit amet 
elementum nec, sagittis non purus. Duis eget quam orci. Duis sit amet 
nibh odio. Praesent a tortor pellentesque, venenatis risus at, pretium 
nisl. Curabitur velit enim, iaculis at commodo ac, sollicitudin eget ex.




Praesent viverra est nunc, sed sollicitudin ligula ultrices sit amet. Ut
 tristique ullamcorper massa nec bibendum. Mauris eu nulla eu eros 
bibendum fringilla a vitae leo. Pellentesque habitant morbi tristique 
senectus et netus et malesuada fames ac turpis egestas. Maecenas sit 
amet lectus diam. Nulla euismod lobortis orci sit amet volutpat. Nunc 
ipsum libero, facilisis ac iaculis euismod, porttitor semper elit. Ut 
orci lorem, mattis tincidunt urna et, aliquam imperdiet lorem. Fusce at 
enim pulvinar, lacinia nunc eu, blandit ipsum. Curabitur nec orci 
elementum, iaculis felis id, rutrum libero. Phasellus commodo nibh eu 
quam imperdiet tempor. Mauris sodales at metus et euismod.




Praesent gravida nisl non est laoreet dignissim. Mauris in ex at ex 
iaculis porttitor. Maecenas dictum, mi sed vulputate euismod, ante quam 
porta ipsum, a efficitur leo urna eu est. Vivamus imperdiet maximus 
porttitor. Suspendisse eget ligula congue, hendrerit velit sed, feugiat 
urna. Integer ultrices condimentum dui. In quis urna lacinia, gravida 
ipsum ut, auctor purus. Nam sapien magna, vestibulum sit amet porttitor 
at, condimentum et odio. Ut suscipit ante quis magna facilisis 
dignissim. Sed condimentum lobortis lacus, eget porttitor enim porta 
euismod. Sed malesuada eu nunc sed faucibus.

`;
let wordsArray = longText.trim().split(' ');
console.log(wordsArray.length)
/** 
let res 
for(let i=0;i< wordsArray.length;i++){
  res = wordsArray[i].split(',');
  console.log(res)
}
 */
let etCount = 0;
for(let i=0;i< wordsArray.length;i++){
  if(wordsArray[i] === 'et'){
    etCount++;
  }
}
console.log(etCount)

