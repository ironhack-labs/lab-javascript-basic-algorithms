// testing code editor
console.log("I'm ready!");

//Interation 1: Names and Input 

//1.1 - 1.2
let hacker1 = "Courtneeey";
console.log(`The driver's name is ${hacker1}`);

//1.3 - 1.4
let hacker2 = "Jonathaan";
console.log(`The navigator's name is ${hacker2}`);

//Interation 2: Conditionals 

//2.1
let driver = hacker1.length;
let navigator = hacker2.length;
let character3 = hacker1.length + hacker2.length;

if(driver > navigator){
  console.log(`The driver has the longest name, it has ${driver} characters.`);
} else if (driver < navigator){
  console.log(`It seems that the navigator has the longest name it has ${navigator} charcaters`);
} else {
  console.log(`Wow, you both have equally long names, ${character3} characters!`);
}

//Interation 3: Loops

//3.1
let i = 0

while(i <= driver){
  const captLetter = hacker1.toUpperCase();
  console.log(captLetter[i]);
  i++;
}

//3.2
const backwards = navigator - 1;

for(let i = backwards; i >= 0; i--){
  const backwardsNav = hacker2[i];
  console.log(backwardsNav);
}

//3.3

const compareDriverAndNavigator = hacker1.localeCompare(hacker2);

if(compareDriverAndNavigator === -1){
  console.log("The driver's name goes first");
} else if (compareDriverAndNavigator === 1){
  console.log("Yo, the navigator goes first, definitely");
} else{
  console.log("What?! You both have the same name");
}

//Bonus 1:

const longtext = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lorem lorem, imperdiet vel quam eget, hendrerit auctor leo. Etiam bibendum sagittis odio, quis mollis nulla facilisis in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque faucibus ultrices felis id placerat. Suspendisse sagittis congue pharetra. Fusce dictum metus quis egestas ultrices. Mauris tincidunt in eros cursus viverra. Vestibulum sit amet dignissim mi, sed congue leo. Fusce sed mauris vel augue accumsan pharetra.

Vivamus ipsum libero, commodo vel elementum eget, tincidunt at urna. Vestibulum eget volutpat purus, ut bibendum nibh. Integer vitae odio id nisl ultrices aliquam ac quis eros. Proin massa lectus, lobortis in consectetur ut, lacinia vestibulum massa. Sed sed nunc consequat, euismod tortor vel, molestie sapien. Fusce feugiat auctor dictum. Phasellus interdum pretium ante non faucibus. Vivamus et dictum ex, nec rutrum neque. Ut euismod leo nisi, mattis aliquam leo luctus condimentum. Duis porttitor augue odio, sed laoreet magna lacinia eu. Donec purus turpis, sodales eu hendrerit nec, congue et nunc. Mauris sit amet ipsum molestie, luctus sem eget, iaculis dolor. Nulla facilisi.

Suspendisse sit amet justo molestie, convallis leo vitae, laoreet nulla. Cras malesuada quam neque, vel laoreet dui vestibulum eget. Suspendisse pretium, lorem a faucibus sodales, arcu orci interdum urna, et ultricies magna tellus et metus. Curabitur metus elit, aliquam at malesuada ut, imperdiet sit amet felis. Quisque sed purus tristique, laoreet dolor ac, lacinia magna. Donec fermentum, neque vitae dictum elementum, nulla erat dapibus erat, sed aliquam quam ligula a velit. Integer eu leo varius, maximus nisi nec, pharetra metus. Mauris maximus, enim quis pretium consequat, nisi odio dapibus diam, vel luctus lorem leo nec urna. Pellentesque eget est tempor, scelerisque velit ac, laoreet eros. Vivamus lacinia id arcu ut facilisis. Mauris rhoncus turpis dignissim condimentum pharetra. Proin risus tortor, feugiat sodales sem sed, fringilla auctor tellus. Sed tortor ipsum, dapibus lobortis metus eget, ultrices gravida odio. Aliquam orci leo, vestibulum et velit interdum, posuere consequat erat. Ut tortor eros, laoreet ut diam et, feugiat dignissim magna.`;

//updated with correct code from class 
let findNumOfWords = 1;

for(let i = 0; i < longtext.length; i++){
  if(longtext[i] === ' '){
    findNumOfWords++;
  }
}


let countIpsum = longtext.length;

console.log(countIpsum);

let findEtCount = longtext.split("et").length -1;

console.log(findEtCount);

// Bonus 2: 

let phraseToCheck = "stack cats";

const getLength = phraseToCheck.length;

for(let i = 0; i < getLength/2; i++){
  if(phraseToCheck[i] !== phraseToCheck[getLength - 1 - i]){
    console.log(`${phraseToCheck} is not a palindrome!`);
  } 
  else{
    console.log(`${phraseToCheck} is a palindrome!`);
  } break
}