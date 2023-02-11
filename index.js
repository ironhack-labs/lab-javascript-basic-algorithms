// Iteration 1: Names and Input
const hacker1 = "Elisa";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Krisztian";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The ${hacker1} has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the ${hacker2} has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops

let name = '';
// Iteration 3: Loops
for (let i = 0; i < hacker1.length; i++) {
  name += hacker1[i].toUpperCase() + " ";
}

let name2 = '';
for(let i = hacker2.length - 1; 0 <= i; i--){
  name2 += hacker2[i] + " ";
}

if(hacker1 < hacker2){
    console.log("The driver's name goes first.");
  }else if(hacker2 < hacker1){
    console.log("Yo, the navigator goes first definitely.");
  }else if(hacker1 === hacker2){
    console.log("What?! You both have the same name?");
  }

//Bonus 1
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus hendrerit tellus et scelerisque. Mauris non magna felis. Vestibulum urna velit, faucibus eu erat in, venenatis gravida nunc. Aliquam erat volutpat. Nullam fringilla sapien sit amet metus semper, nec porta dolor pretium. Donec iaculis nisi mattis quam ullamcorper condimentum. Nam maximus ex sit amet sem bibendum scelerisque. Vivamus facilisis dui justo, sed ultricies nisi dictum a. Pellentesque vitae suscipit mauris. Donec sed feugiat risus.

Etiam vitae tempus lorem. Donec at iaculis tortor. Suspendisse potenti. Phasellus et rhoncus erat. Morbi pharetra ex a malesuada suscipit. Mauris justo nulla, sagittis eget congue bibendum, tincidunt quis augue. Sed gravida, augue sit amet ullamcorper ultricies, nulla neque commodo leo, eu posuere mi erat quis magna. Nullam at porta urna. Mauris ac dictum mauris, id volutpat sapien. Nulla nisl nisl, finibus in velit nec, congue pharetra arcu. Integer ullamcorper nisl vel ligula pellentesque dictum. Pellentesque in mi quam. Nullam molestie arcu in sapien fermentum, vel imperdiet urna lacinia. Etiam commodo et dui at finibus. Proin nec dignissim massa, vel iaculis leo.Duis pellentesque dignissim dui. Sed viverra posuere est, sed dictum odio molestie ut. Cras vel sodales est. Suspendisse potenti. Aliquam erat volutpat. Mauris sodales justo in convallis egestas. Mauris finibus lorem sit amet semper fringilla. Vestibulum sit amet porta neque. Fusce non tincidunt erat.`;

function wordCounter(){
    let numberOfStrings = 0;
    for(let i = 0; i < longText.length;i++){
     if(longText[i] === " "){
       numberOfStrings++;
     }
  }
  return numberOfStrings++;
  }

let textCount = 0;
for(let i = 0; i < longText.length; i++){
  if(longText[i] === "e" || longText[i] === "E"){
        if(longText[i] + longText[i + 1] === "et" || longText[i] + longText[i + 1] === "Et"){
          textCount++;
        }
     }
}

//Bonus 2
const phraseToCheck = "A man, a plan, a canal, Panama!";

function checkPhrase(){
  let cleanPhrase = "";
  let phraseForwards = "";
  let phraseBackwards = "";
 for(let i = 0; i < phraseToCheck.length; i++){
  if(phraseToCheck[i] === "!" || phraseToCheck[i] === "," || phraseToCheck[i] === "." || phraseToCheck[i] === `''` || phraseToCheck[i] === "?" || phraseToCheck[i] === ` ` || phraseToCheck[i] === `'`){
     continue;
     }else{
      cleanPhrase += phraseToCheck[i];  
  }
}
  for(let i = 0; i < cleanPhrase.length; i++){
    phraseForwards += cleanPhrase[i].toLowerCase();
  }
  for(let i = cleanPhrase.length - 1; 0 <= i; i--){
    phraseBackwards += cleanPhrase[i].toLowerCase();
  }
  if(phraseForwards === phraseBackwards){
    console.log(`Found a Palindrome "${phraseForwards}"`);
  }else{
    console.log(`It is not a Palindrome`);
  }
}

checkPhrase();