// Names and Input
var hacker1 = "Marta";
console.log("The driver's name is " + hacker1);
var hacker2 = prompt("What's your name?");
console.log("The navigator's name is " + hacker2);

//Conditionals
if (hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
}  else if (hacker2.length > hacker1.length) {
 console.log ("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
}  else{
    console.log("Wow, you both got equally long names, " +  hacker1.length + " characters!!");
  }

//Loops
var charactersHacker1="";
for (i=0; i<hacker1.length; i++){
 charactersHacker1 += hacker1[i].toUpperCase();
 charactersHacker1 += " ";
}
console.log(charactersHacker1);

var charactersHacker2 = "";
for (i=hacker2.length-1; i>(-1); i--){
 charactersHacker2 += hacker2[i].toUpperCase();
 charactersHacker2 += " ";
}
console.log(charactersHacker2);

var comparation = hacker1.localeCompare(hacker2);
if (comparation === -1){
  console.log ("The driver's name goes first");
} else if (comparation === 1){
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}
//Palindrome
var hacker3 = prompt("Tell me a phrase, please");
var rightToLeft="";
for (i=0; i<hacker3.length; i++){
 rightToLeft += hacker3[i].toLowerCase();
}


var leftToRight = "";
for (i=hacker3.length-1; i>(-1); i--){
 leftToRight += hacker3[i].toLowerCase();
}

if (rightToLeft===leftToRight){
  console.log("Congratulation. Your phrase is a palindrome.")
}
else{
  console.log("Thank you very much");
}
// Lorem ipsum generator
var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel justo augue. Aliquam dolor metus, scelerisque vel leo quis, malesuada vestibulum diam. Vestibulum ultrices eget nulla in tempor. Sed vitae neque eget ante volutpat consectetur. Nulla lacinia volutpat lacinia. Curabitur arcu eros, vehicula vel scelerisque nec, vulputate gravida arcu. Nullam venenatis est et accumsan egestas. Fusce a metus condimentum, consectetur lacus vel, auctor diam. Aliquam consectetur auctor ligula, nec venenatis nisl."+
 "Proin at velit est. Etiam id blandit lacus, eu mattis turpis. Donec cursus erat semper, ultrices tellus eu, placerat nibh. Nulla hendrerit erat eget condimentum mattis. Duis tellus ligula, fermentum at tellus at, faucibus pellentesque urna. Vestibulum nunc tellus, semper in fermentum vel, iaculis sagittis diam. Vivamus ultricies, turpis venenatis accumsan condimentum, felis nisi aliquet nunc, at imperdiet nulla arcu nec massa. Etiam risus augue, porta ut ullamcorper eu, eleifend vitae leo. Suspendisse luctus eros ut sapien eleifend pharetra. Vivamus a euismod nisi, quis eleifend quam. Etiam interdum erat ac tortor mattis laoreet. Mauris tristique dictum congue. Aliquam erat enim, pharetra sit amet lacus sit amet, lacinia venenatis elit."+
  "Donec lacinia ultricies ultrices. Donec iaculis neque ac pulvinar rhoncus. Mauris ac arcu in neque interdum mollis vel sit amet sapien. Vestibulum metus sapien, posuere non magna vel, varius lacinia nulla. Nunc volutpat blandit malesuada. Suspendisse consequat metus at ex facilisis, id tincidunt dui laoreet. Praesent vehicula, est sed feugiat mollis, eros velit mollis lorem, ullamcorper sagittis lorem magna et est. Donec cursus quam vel placerat vestibulum."
 
var wordsNumber = 0;
 
  for (i = 0; i < loremIpsum.length; i++){
    if (loremIpsum[i] === " ") {
      wordsNumber += 1;
    }
}
wordsNumber += 1;
console.log("Lorem Ipsum lenght is: " + wordsNumber);