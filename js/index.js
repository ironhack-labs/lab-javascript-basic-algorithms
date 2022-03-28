console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "Jide";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Thu";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
};

// Iteration 3: Loops
//3.1
let driverTrick = "";

for (i = 0; i < hacker1.length ; i++){
  driverTrick += hacker1[i].toUpperCase();
  if (i < (hacker1.length - 1)) {
    driverTrick += " ";
  }
};

console.log(driverTrick);

//3.2
let navigatorTrick = "";
for (i = (hacker2.length - 1); i >=0; i--){
  navigatorTrick += (hacker2[i]);
};
console.log(navigatorTrick);

//3.3
if (hacker1 < hacker2){
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else{
  console.log("What?! You both have the same name?")
};

//Bonus 1:
//Bonus 1.1
let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis quam vulputate est dictum, interdum tristique purus fermentum. Maecenas vitae ultricies lorem. Pellentesque mollis ornare urna, ut molestie lorem mollis ac. Phasellus scelerisque quam a varius fringilla. Integer porta turpis ut neque volutpat, eu dignissim turpis aliquam. Vivamus auctor urna et dolor tempor fringilla. Nam varius eleifend elementum. Nam ut auctor risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In varius erat at suscipit efficitur. Sed ultrices vulputate tempor. Vestibulum magna felis, tempus eget nulla a, facilisis suscipit nisi. Praesent eu nisl eu libero aliquet eleifend id non lectus. Proin interdum enim leo, at maximus felis dapibus eu. Proin vitae libero vel sapien sagittis iaculis.

Integer in tempor dolor. Duis vitae mi pellentesque, tempus ligula cursus, consequat elit. Suspendisse at iaculis elit. Suspendisse at libero in quam porttitor bibendum. Sed rhoncus tempus turpis eu condimentum. Mauris gravida consectetur libero, a venenatis velit tempus a. Suspendisse lacinia vehicula sapien, at ullamcorper risus placerat eget.

Nullam a odio congue, facilisis arcu ut, porta est. Nam lacus nibh, consequat vitae convallis et, vestibulum eget quam. Sed iaculis, dui in finibus gravida, est ex commodo odio, vitae commodo odio metus sed ligula. In fermentum posuere dignissim. Nunc convallis arcu ac risus pretium, eu ullamcorper ligula sodales. Ut at velit non nisi lacinia euismod. Quisque interdum hendrerit ligula sed tristique.`

//Bonus 1.2
let numberOfWord;

numberOfWord = text.split(" ").length

console.log(numberOfWord);

//Bonus 1.3
let numberOfEt = 0

for (element of text.replace(",","").split(" ")){
  if (element.startsWith("et")){
    numberOfEt ++
  }
}
console.log(numberOfEt);


//Bonus 2

let randomPhrase = "race car"; //racecar

function checkPalindromes(phraseToCheck) {
  let phraseFinal = "";
  phraseToCheck = phraseToCheck.replace(",","").replace(" ","").toLowerCase();
  
  for (i = (phraseToCheck.length - 1); i >=0; i-- ){
    phraseFinal += phraseToCheck[i];
  }
  
  if (phraseToCheck === phraseFinal){
    console.log (`This is a Palindrome`)
  } else {
    console.log (`This is not a Palindrome`)
  }
};

checkPalindromes(randomPhrase);