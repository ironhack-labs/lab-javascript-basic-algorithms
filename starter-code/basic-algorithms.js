// Names and Input
//1
var hacker1 = "Marco";
//2
console.log("The driver's name is " + hacker1);
//3
var hacker2 = prompt("The navigator's name is:");
//4
console.log("The navigator's name is " + hacker2);

//Conditionals
//5
var len1 = hacker1.length;
var len2 = hacker2.length;

if(len1 > len2) {
  console.log("The Driver has the longest name, it has " + len1 + " characters");
} else if(len1 < len2){
  console.log("Yo, navigator got the longest name, it has " + len2 + " characters");
} else {
  console.log("wow, you both got equally long names, " + len1 + " characters!!");
}

//Loops
//6
var uCaseDriver = "";
for( i=0; i < len1; i++){
  uCaseDriver += hacker1.toUpperCase()[i] + " ";
}
uCaseDriver = uCaseDriver.slice(0, uCaseDriver.length-1);
console.log(uCaseDriver);

//7
console.log(hacker2.split("").reverse().join(""));

//8
if(hacker1.localeCompare(hacker2) < 0){
  console.log("The driver's name goes first");
} else if(hacker1.localeCompare(hacker2) > 0){
  console.log("Yo, the navigator goes first definitely");
} else console.log("What?! You both got the same name?");

//9
var newPhrase = prompt("Escriba una frase: ");

if(newPhrase.replace(/\s|,|\!|\?/g, '').toLowerCase() === newPhrase.replace(/\s|,|\!|\?/g, '').split("").reverse().join("").toLowerCase()){
  console.log("This phrase is a Palindrome");
} else console.log("This a normal phrase");

//10
var paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum, diam in maximus pulvinar, nibh dolor aliquam sem, quis tempor tortor turpis at justo. Sed velit tortor, pharetra tristique nulla sed, finibus finibus arcu. Integer sollicitudin mattis nisi, quis lacinia eros placerat at. Aliquam viverra bibendum justo. Phasellus et justo sit amet nibh mollis dictum sed eget felis. Vestibulum suscipit dolor tempus enim vestibulum pulvinar. Integer faucibus quam in dapibus volutpat. Cras sed consequat leo. Nunc mollis facilisis dui a tincidunt. Vivamus semper vitae odio quis venenatis." + " " +
"Aliquam aliquam, tortor a elementum vehicula, mauris sapien facilisis leo, vel auctor purus risus et massa. Phasellus at ante ex. In turpis justo, placerat nec odio vel, mollis aliquet urna. Cras tincidunt scelerisque dui, in pulvinar tortor pharetra at. Fusce lacinia, nisi vitae efficitur laoreet, est risus pharetra leo, sit amet sollicitudin urna mi a lectus. Praesent sodales eu nunc congue mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean tortor nisi, venenatis ut eleifend sit amet, porta nec ante. Sed imperdiet elit vitae dignissim aliquam." + " " +
"Suspendisse convallis sem eu diam consectetur porta. Nulla dolor ante, semper non turpis vitae, pretium blandit sem. Cras et lacus vulputate, facilisis velit eu, tempus lorem. Vestibulum nec lectus dolor. Cras pretium cursus nibh, a mollis tellus rutrum ac. Etiam nibh magna, faucibus ut rhoncus vitae, eleifend id diam. Aliquam ut massa vitae magna scelerisque sodales. Fusce ac dictum est. Aliquam feugiat pulvinar lorem nec dictum. Nulla facilisi. Pellentesque vitae ante lorem. Morbi eu scelerisque turpis, vel commodo nibh."

var words = 0;
var etWord = 0;

for(i = 0; i < paragraph.length; i++){
  words = paragraph.split(' ').length;
  /*Posible solución -----> if(paragraph[i] === " " || paragraph[i] === "." && paragraph[i+1] !== " ") words++;*/
  etWord = (paragraph.split(" et ").length - 1) + (paragraph.split(" et.").length - 1);
}
console.log("Number of words: " + words);
console.log("Number of 'et': " + etWord);

// Lorem ipsum generator
