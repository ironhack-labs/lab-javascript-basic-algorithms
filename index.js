// Iteration 1: Names and Input
const hacker1 = "tom";

console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Tom";
console.log(`The driver's name is ${hacker2}`);

// Iteration 2: Conditionals
const lengthOfHacker1 = hacker1.length;
const lengthOfHacker2 = hacker2.length;

if (lengthOfHacker1 > lengthOfHacker2) {
  console.log(
    `The driver has the longest name, it has ${lengthOfHacker1} characters.`
  );
} else if (lengthOfHacker1 < lengthOfHacker2) {
  console.log(
    `It seems that the navigator has the longest name, it has ${lengthOfHacker2} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${lengthOfHacker1} characters!`
  );
}
// Iteration 3: Loops

const nameUppercase = hacker1.toUpperCase();
let nameCapital1 = "";
for (let i = 0; i < nameUppercase.length; i++) {
  nameCapital1 += " " + nameUppercase[i];
}
console.log(nameCapital1);

let reversedName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}

console.log(reversedName);



// const alphaCap = alpha.toUpperCase();

let alphaChar1;
let alphaChar2;
let hacker1Cap = hacker1.toLowerCase()
let hacker2Cap = hacker2.toLowerCase()
if(hacker1Cap.length > hacker2.length || hacker1Cap.length === hacker2.length ){
    for(let i=0; i< hacker1.length; i++){
        alphaChar1 = hacker1[i];
        alphaChar2 = hacker2[i];

        if(alphaChar1 == alphaChar2){
            console.log('What?! you both have the same name?')
            break;
        }else if(alphaChar1 > alphaChar2){
            console.log("The driver's name goes first.")
            break;
        }else{
            console.log("yo,the navigator goes first, definitely")
        }
    }
}else{
    for(let i=0; i< hacker2.length; i++){
        alphaChar1 = hacker1[i];
        alphaChar2 = hacker2[i];

        if(alphaChar2 == alphaChar1){
            console.log('What?! you both have the same name?')
            break;
        }else if(alphaChar1 > alphaChar2){
            console.log("The driver's name goes first.")
            break;
        }else{
            console.log("yo,the navigator goes first, definitely")
        }
    }
}

let alphaChar1;
let alphaChar2;
// let hacker1Cap = hacker1.toLowerCase();
// let hacker2Cap = hacker2.toLowerCase();

let namesAreDifferent = false;
for (let i = 0; i < hacker1.length; i++) {
  alphaChar1 = hacker1[i];
  alphaChar2 = hacker2[i];
  if (alphaChar1 < alphaChar2) {
    console.log("The driver's name goes first.");
    namesAreDifferent = true;
    break;
  } else if (alphaChar2 < alphaChar1) {
    console.log("Yo, the navigator goes first, definitely.");
    namesAreDifferent = true;
    break;
  }
}

if (!namesAreDifferent) {
  console.log("What?! You both have the same name?");
}







// Bonus 1 
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id tincidunt risus. Duis lectus sapien, finibus in tristique non, malesuada nec magna. Praesent condimentum mi vitae sapien interdum porttitor. Curabitur sed vehicula purus. Ut nec nisi et tellus ultricies fermentum sed eu metus. Nulla consectetur mi nibh. Ut pretium lacinia risus vitae ullamcorper. Mauris at lacus justo. Aliquam erat volutpat.

Maecenas bibendum leo libero, vitae egestas nisi consectetur id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas risus diam, blandit ut euismod id, ultricies vitae nisi. Nulla facilisi. Integer fringilla turpis sed dolor ultricies iaculis. Praesent efficitur mi turpis, vel vulputate tortor pulvinar non. Mauris et pharetra enim. Ut non scelerisque odio. Mauris euismod ipsum mauris, non varius massa sollicitudin eget.

Pellentesque auctor sodales viverra. Quisque et ante erat. Sed volutpat vitae velit eu tempus. Aliquam sed mauris et urna iaculis ultrices at eu felis. Donec eleifend elit sed nisi condimentum sagittis. Phasellus accumsan justo nec augue viverra, vitae rutrum nulla elementum. Donec volutpat a lacus sed scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut diam lobortis, lacinia nunc interdum, molestie dui. Praesent ut suscipit nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam et libero non augue aliquet iaculis. Morbi ut odio eget augue vehicula blandit. Praesent eu magna mattis, tempus massa nec, mollis neque. Nulla eget efficitur tellus, quis tristique arcu.`

let wordCount = 0
for (let i=0; i<longText.length; i++){
    if(longText[i+1]===" "){
        wordCount += 1
    }
    
}
console.log(wordCount)
    
let etCount=0
for (let i=0;i<longText.length;i++){
    if(longText[i]==="e"&&longText[i+1]==="t"){
        etCount += 1
    }
}
console.log(etCount)



// Bonus 2 
const phraseToCheck= "A man, a plan, a canal, Panama!"
const upperCasePhraseToCheck = phraseToCheck.toUpperCase()
const lowerCasePhraseToCheck = phraseToCheck.toLowerCase()

let noComma = ""

for (i=0;i<upperCasePhraseToCheck.length;i++){
   
        if(lowerCasePhraseToCheck[i]!= upperCasePhraseToCheck[i]){
            noComma = noComma + lowerCasePhraseToCheck[i]
        }
}

let reversedNoComma =""

for (let k=noComma.length-1;k>=0;k--){
    reversedNoComma += noComma[k] 
}

if (noComma===reversedNoComma){
    console.log("It is Palindrome")
}

