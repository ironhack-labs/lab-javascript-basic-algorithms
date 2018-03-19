// Names and Input
var hacker1 = "Tom";
var hacker2 = prompt("What's the navigator's name?");

console.log("The driver's name is "+ hacker1);
console.log("The navigator's name is "+ hacker2);

if(hacker1.length > hacker2.length){
  console.log("The driver has the longest name, it has "+hacker1.length+"characters");
}else if (hacker2.length > hacker1.length){
  console.log("Yo, navigator's got the longest name, it has "+hacker2.length+" characters");
}else {
  console.log("Wow, you both got equally long names, "+ hacker1.length+" characters");
}

var driverName="";
for (var i=0;i<=hacker1.length-1;i++){
  driverName +=hacker1[i].toUpperCase()+ " ";
}
console.log(driverName);

var navigatorName="";
for (var i=hacker2.length-1; i>=0;i--){
  navigatorName +=hacker2[i];
}
console.log(navigatorName);

if (hacker1[0].toUpperCase()<hacker2[0].toUpperCase()) {
  console.log("The driver name goes first");
}else if (hacker1[0].toUpperCase()>hacker2[0].toUpperCase()){
  console.log("The navigator goes first definitely");
}else{
  console.log("what?! You both got the same name?");
}

//Conditionals
var sentence = prompt("Write a sentence:");

var signs = /[\W_]/g;
sentence.toLowerCase().replace(signs, '');

var sentence2 = "";


for (var i=0; i<sentence.length; i++){
  sentence2 += sentence[i];
}

sentence === sentence2;

// Lorem ipsum generator

var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu arcu placerat, ullamcorper eros a, gravida eros. Duis ac eros eget urna sodales tincidunt. Vestibulum rutrum nec urna a euismod. Praesent vulputate arcu orci, eu elementum metus tempus at. Nam tempor neque quis hendrerit mattis. Nunc vitae nunc commodo, iaculis est at, placerat felis. Nullam molestie, libero quis eleifend aliquam, dolor ligula finibus elit, sit amet tincidunt justo quam id ipsum.Aenean in hendrerit velit, ut consectetur nisi. Suspendisse potenti. Sed erat felis, mollis sed sem eu, efficitur rhoncus ex. Vivamus cursus imperdiet ex. Aliquam a molestie lorem, vitae vestibulum augue. Phasellus sagittis euismod lorem, id molestie urna vulputate vel. Suspendisse potenti. Quisque lacinia quam eu odio rhoncus ultrices. Nullam eget eros vel elit porta accumsan. Pellentesque dignissim pretium dolor, rutrum sollicitudin dui maximus ultricies. Ut commodo scelerisque ligula sit amet luctus. Duis urna lectus, finibus et finibus id, iaculis nec nisl. Morbi ullamcorper ultrices vestibulum. Quisque ut tincidunt est. Donec ut libero eu felis faucibus mollis eget at nulla. Praesent venenatis neque ac lacus lobortis mattis. Nulla in rutrum mi. Integer congue sit amet ante et rhoncus. Nulla facilisi. Sed vel bibendum nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas pulvinar velit faucibus mattis hendrerit.";

var wordArray = lorem.split(" ");
console.log(wordArray.length);

var etCount = 0;
for (var i=0; i<wordArray.length; i++){
  if (wordArray[i] === "et"){
    etCount += 1;
  }
}
console.log(etCount);