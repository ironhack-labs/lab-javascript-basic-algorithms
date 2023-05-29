// Iteration 1: Names and Input
const hacker1 = “Ana”;
console.log (`The drivers name is ${hacker1}`);
const hacker2 = “Cristian”;
console.log (`The navigator’s name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else { console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops
let upperCaseName = “”;
for (let i=0; i<hacker1.length; i++) {
  upperCaseName += hacker1[i] + ” “;
}
console.log(upperCaseName.toUpperCase());
let reverseNav = “”;
for (let i= hacker2.length-1; i >=0 ; i--) {
  reverseNav += hacker2[i];
}
console.log(reverseNav);
if (hacker1 < hacker2) {
  console.log(`The driver’s name goes first.`);
} else if (hacker1 > hacker2) {
  console.log(`Yo, the navigator goes first, definitely.`);
} else { console.log (`What?! You both have the same name?`)
}
//Bonus 1
const longText = “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Consequat id porta nibh venenatis cras sed felis eget. Sit amet nisl suscipit adipiscing bibendum est ultricies. Integer eget aliquet nibh praesent. Aenean et tortor at risus viverra. Mi sit amet mauris commodo. Vitae elementum curabitur vitae nunc. Ultricies tristique nulla aliquet enim tortor at auctor urna. Id cursus metus aliquam eleifend. Praesent semper feugiat nibh sed. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Enim ut tellus elementum sagittis vitae et leo duis ut. Id cursus metus aliquam eleifend. Purus in mollis nunc sed. Sed vulputate mi sit amet mauris commodo. At tellus at urna condimentum. Imperdiet proin fermentum leo vel orci porta. Purus semper eget duis at tellus at. Pellentesque adipiscing commodo elit at. Eget nullam non nisi est sit amet facilisis magna etiam. Dignissim cras tincidunt lobortis feugiat vivamus. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Aliquet risus feugiat in ante metus dictum at tempor commodo. Viverra adipiscing at in tellus. Sed euismod nisi porta lorem. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Urna molestie at elementum eu facilisis sed odio morbi quis. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Amet luctus venenatis lectus magna fringilla urna porttitor. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Nec ullamcorper sit amet risus nullam eget felis eget. Ac feugiat sed lectus vestibulum mattis. Malesuada pellentesque elit eget gravida. Ac tortor dignissim convallis aenean et. Elit duis tristique sollicitudin nibh. Orci sagittis eu volutpat odio. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Viverra maecenas accumsan lacus vel facilisis volutpat est. Tellus molestie nunc non blandit massa enim nec dui. Ultricies integer quis auctor elit sed vulputate mi sit. Mattis vulputate enim nulla aliquet porttitor lacus luctus. Pulvinar proin gravida hendrerit lectus a. Ut sem viverra aliquet eget sit. Massa ultricies mi quis hendrerit dolor. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Euismod nisi porta lorem mollis aliquam ut porttitor. Sit amet massa vitae tortor condimentum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Ipsum nunc aliquet bibendum enim facilisis gravida. Vitae suscipit tellus mauris a diam maecenas.”
let countedWords = 0;
for (let i= 0; i <=longText.length ; i++) {
  const numSpaces = longText[i];
    if (numSpaces == ” “) {
    countedWords +=1;
    }
}
console.log(`There are ${countedWords+1} words`)
let etWords = 0;
for (let i= 0; i <=longText.length ; i++) {
  const numets = longText[i] + longText[i+1] + longText[i+2] + longText[i+3];
    if (numets === ” et “) {
    etWords +=1;
    }
}
console.log(`The word “et” appears ${etWords} times`)
//Bonus 2
let phraseToCheck = ‘put it up’
/*for (let i=0; i < phraseToCheck.length/2; i++) {
  if (phraseToCheck[i] !== phraseToCheck[phraseToCheck.length-1-i]) {
    console.log(`“${phraseToCheck}” is not a palindrome`)
  }
  console.log (`“${phraseToCheck}” is a palindrome`)
}*/
phraseFormated = phraseToCheck.toLowerCase().replace(/\s/g,“”);
phraseReverse = phraseFormated.split(“”).reverse().toString();
for (var i = 0; i < ((phraseReverse.length)-1); i++) {
  phraseReverse=phraseReverse.replace(“,”,“”);
}
if(phraseFormated==phraseReverse) {
  console.log (`“${phraseToCheck}” is a palindrome`);
}
else{
  console.log(`“${phraseToCheck}” is not a palindrome`);
}