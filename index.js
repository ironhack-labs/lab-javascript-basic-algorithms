// Iteration 1: Names and Input
const hacker1 = "Juan";
console.log("The driver's name is " + hacker1);
const hacker2 = "Maria";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
}else if(hacker1.length < hacker2.length){
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
}else{
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}

// Iteration 3: Loops

//3.1
let newString = "";
for(let i = 0; i < hacker1.length; i++){
    newString += hacker1[i].toUpperCase() + " ";
}
console.log(newString);

//3.2
let newStringReversed = "";
for(let i = hacker2.length - 1; i >= 0; i--){
    newStringReversed += hacker2[i];
}
console.log(newStringReversed);

//3.3
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//BONUS 1
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum nunc ac risus rhoncus sodales ac placerat leo. Pellentesque ac dapibus sapien. Duis scelerisque rhoncus libero, sed euismod magna fringilla sit amet. Phasellus fermentum iaculis elit eget dapibus. Cras sit amet arcu vel diam tincidunt sollicitudin in vel justo. Cras finibus nec tortor vel tincidunt. Donec sit amet ligula nibh. Donec eu nunc elit. Nunc vel libero justo. Quisque aliquam diam ligula, dignissim semper diam porta eu. Phasellus vel egestas quam. Nullam venenatis nulla quis aliquet ornare. Quisque eu felis hendrerit, cursus lectus id, ornare risus. Ut id malesuada arcu, id suscipit quam. Quisque eget faucibus ante. Vivamus maximus porta feugiat. Mauris nec semper augue. Vivamus molestie vitae tellus quis sollicitudin. Nunc commodo vulputate lorem, vitae rhoncus massa tempus quis. Etiam sodales ultricies efficitur. Aliquam erat volutpat. Fusce euismod erat lorem, nec pharetra felis porttitor scelerisque. Curabitur aliquet diam non libero mattis, et sagittis purus commodo. Integer varius ultrices erat, at dapibus nisi. Aliquam luctus, diam quis vulputate venenatis, nunc tortor elementum tellus, in rhoncus nunc velit non odio. Morbi nibh odio, ultricies quis erat vitae, auctor aliquam sem. Fusce imperdiet nunc et nunc volutpat molestie. Integer vitae justo a diam ornare imperdiet quis vitae nisl. Sed scelerisque aliquam rhoncus. Mauris in sem vel massa posuere convallis eu eget urna. Vestibulum sed porttitor risus. Sed consequat eros vitae tincidunt vehicula. Donec tellus purus, fringilla vel laoreet eu, luctus sed est. Phasellus elementum dignissim lacus, ac auctor nunc facilisis ut. Aenean ut ultricies nisl. Nunc velit neque, laoreet non lorem quis, consequat euismod purus. Nam turpis justo, egestas posuere ex sed, vehicula rutrum leo.";
const longTextWords = longText.split(" ");
console.log(longTextWords);

let countLatin = 0;
for (let i = 0; i < longTextWords.length; i++) {
    if(longTextWords[i] === "et"){
        countLatin ++;
    }
}
console.log(countLatin);

