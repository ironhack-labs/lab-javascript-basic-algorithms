//console.log("I'm ready!");
//Iteration 1: Names and Input
var hacker1 = "Efren";
console.log(`The driver's name is ${hacker1}`);
var hacker2 = "Chrome";
console.log(`The navigator's name is ${hacker2}`);

//Iteration 2: Conditionals
var count1 = hacker1.length;
var count2 = hacker2.length;
if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${count1} characters.`)
} else if (hacker2.length > hacker1.length){
  console.log(`It seems that the navigator has the longest name, it has ${count2} characters.`)
} else {
  console.log(`Wow, you both have equally long names, XX characters!`)
}

//Iteration 3: Loops
var newName = ""
for (let i = 0; i < hacker1.length; i++){
  newName = newName + hacker1[i].toUpperCase() + " " ;
}
console.log(newName);

var revert = ""
for (let i = 0; i < hacker1.length; i++){
  revert = hacker1[i] + revert
}
console.log(revert);


if(hacker1 > hacker2){
  console.log("Yo, the navigator goes first definitely.");
} else if(hacker1 < hacker2){
  console.log("The driver's name goes first.");
} else{
  console.log("What?! You both have the same name?");
}

//Bonus 1
var paragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis leo feugiat, vestibulum turpis sed, pharetra nulla. Aenean semper, felis volutpat pulvinar euismod, diam ipsum convallis tortor, a accumsan enim turpis porta urna. In hac habitasse platea dictumst. Donec nec varius justo. Praesent auctor tempor tortor non mollis. Fusce quis erat tristique, pretium turpis quis, dapibus nisl. In tortor quam, accumsan et venenatis nec, congue eu leo. Etiam a auctor mauris, ut accumsan neque. Pellentesque eu elementum ligula. Etiam quis venenatis justo. Morbi volutpat nunc nulla, nec scelerisque mauris convallis a. Nullam viverra porttitor diam, vitae porttitor nulla. Aenean at est at magna tincidunt pretium id ac quam. Donec tortor tortor, laoreet interdum fringilla facilisis, commodo at tellus. Integer dolor felis, aliquam id nisi eu, cursus consectetur quam.

In in molestie ex. Vestibulum elementum mattis felis a ornare. Quisque dolor nisl,convallis ut ipsum sit amet, pharetra dapibus massa. Quisque ligula tortor, feugiat sed malesuada ac, vulputate sit amet dolor. Donec tincidunt dignissim dignissim. Fusce vel elit bibendum, bibendum tortor nec, accumsan mauris. Sed et diam eget leo feugiat convallis in vitae quam. Nam eu efficitur nulla, finibus faucibus libero. Praesent volutpat orci ac lorem posuere tincidunt. Nunc ac magna ullamcorper, venenatis justo ac, commodo erat. Fusce eu ex non dui imperdiet commodo. Nulla quis finibus nulla, a mattis risus. Donec placerat egestas odio, ac laoreet nunc aliquet ac. Nam tempus ante eu pharetra eleifend.

Curabitur diam eros, pellentesque sit amet lorem id, laoreet tincidunt dolor. Nulla erat eros, ullamcorper ut leo a, feugiat pharetra justo. Nulla gravida tortor vel nunc luctus lacinia. Vivamus eget elit a nulla sodales hendrerit nec eget augue. Pellentesque id augue felis. Etiam tempor sodales diam, sed fermentum odio. Mauris tincidunt vel neque nec tempor. Nunc diam felis, posuere eget fringilla et, gravida ac dolor. Quisque laoreet luctus nisi in congue. Curabitur sagittis mauris quam, vel convallis ex sollicitudin vitae. Cras eget lacus sed nunc tristique semper et in eros. Sed sit amet velit consequat, sodales elit vitae, bibendum lectus.`

var wordCount = 0;
var letterCount = 0;

for(let i = 0; i < paragraphs.length; i++){
  if(paragraphs[i] >= "a"&& paragraphs[i] <="z" || paragraphs[i] >= "A" && paragraphs[i] <= "Z"){
    letterCount += 1;
  } else {
    if(letterCount > 0){
      wordCount += 1;
      letterCount = 0;
    }
  }
}
console.log(`Those paragraphs have ${wordCount} words`);


var currentWord = "";
var wordCountEt = 0; 

for(let i = 0; i< paragraphs.length; i++){
  if(paragraphs[i] >= "a"&& paragraphs[i] <="z" || paragraphs[i] >= "A" && paragraphs[i] <= "Z"){
    currentWord = currentWord + paragraphs[i];
  } else {
    if(currentWord.length > 0 && currentWord === "et"){
      wordCountEt += 1;
    }
    currentWord = "";
  }
}
console.log(`Those paragraphs have ${wordCountEt} times the word et`);


//Bonus 2
var phraseToCheck = "never odd or even";
var leftToRight = "";
var rightToLeft = "";

for(let i = 0; i<phraseToCheck.length; i++){
  if(phraseToCheck[i] >= "a"&& phraseToCheck[i] <="z" || phraseToCheck[i] >= "A" && phraseToCheck[i] <= "Z"){
    leftToRight = leftToRight + phraseToCheck[i];
    rightToLeft = phraseToCheck[i] + rightToLeft;
  }
}
console.log(leftToRight === rightToLeft ? `"${phraseToCheck}" is a Palindrome phrase` : `"${phraseToCheck}" is not a Palindrome phrase`);











