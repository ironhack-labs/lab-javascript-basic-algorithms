//Iteration 1: Names and Input
let hacker1="Saulo";
let hacker2="Monica";

console.log(`The driver\'s name is ${hacker1}`);
console.log(`The navigator\'s name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
  console.log(`The Driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length){
  console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
} else {
  console.log(`Wow, you both got equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
hacker1 = hacker1.toUpperCase();
let otherHacker1 = "";
for(let i=0; i<hacker1.length; i++){
  otherHacker1 += hacker1[i] + " ";
}
console.log(otherHacker1);

let otherHacker2 = "";
for(let i=hacker2.length-1; i>=0; i--){
  otherHacker2 += hacker2[i];
}
console.log(otherHacker2);

// Iteration 3: Loops
if (hacker2.localeCompare(hacker1) === 1){
  console.log("The driver\'s name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1){
  console.log("Yo, the navigator goes first definitely.");
} else {
console.log("What?! You both got the same name?");
}

// Bonus Time!
let quote = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt urna nec urna fringilla laoreet. In dignissim vitae leo non gravida. Phasellus lacus odio, auctor at neque a, dignissim auctor mauris. Aenean sit amet dui a lorem dictum auctor. Cras mattis risus justo, in bibendum libero imperdiet eu. Sed varius ipsum lectus, vitae posuere enim varius sit amet. Nam scelerisque risus sit amet lectus euismod aliquam. Vivamus blandit consectetur mi a ultricies. Pellentesque tempor porta lorem quis sagittis. Aliquam gravida risus ut sapien pellentesque consequat. Cras pellentesque eget dui eu sodales. Nullam tempus imperdiet commodo. Proin quis luctus ex, a finibus ligula.";

quote+= " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla pharetra velit ut tempor. Etiam ultrices placerat ante quis posuere. Ut condimentum laoreet diam, tempor efficitur odio venenatis ut. Nam a nisl lacus. Donec eu cursus orci. Etiam tempus, tellus vitae venenatis varius, dolor tortor aliquet urna, sed accumsan urna quam ut est. Etiam et elit quis mauris egestas lacinia in in lorem. In hac habitasse platea dictumst. Curabitur in nunc sed orci tempor semper eleifend eu nunc. Praesent ut lectus at erat vehicula maximus a quis tortor. Praesent a feugiat ligula. Nunc a congue libero. Suspendisse sed posuere magna."

quote+= " Nulla viverra congue risus tempor dapibus. Cras tristique bibendum ex. Nulla facilisi. Proin at lectus nec lorem vulputate tincidunt. Integer porttitor nunc eu volutpat pellentesque. Phasellus rhoncus tincidunt dolor vitae porta. Donec nec nibh a odio malesuada faucibus. Maecenas ultrices, augue id suscipit bibendum, enim turpis malesuada arcu, quis rhoncus ligula ligula id odio. Praesent mauris felis, semper quis quam vitae, imperdiet sagittis mi. Nam sit amet nisi at justo egestas cursus. Aliquam auctor sem sed suscipit porttitor. Suspendisse imperdiet risus sit amet libero tincidunt faucibus in in libero."

console.log("The number of words is",countWords(quote," ")+1);

var wordsOfLorem = quote.split(" ");

console.log(`The \'et\' word appeared ${countWords(wordsOfLorem,"et")} time(s)`);

function countWords(texto,obj){
  let count=0;
  for (let i = 0; i<texto.length; i++){
    if(texto[i] === obj){
      count +=1;
    }
  }
  return count;
}