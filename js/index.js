// Iteration 1: Names and Input
let hacker1 = "Cristopher";
console.log(`The driver's name is ` + hacker1);

let hacker2 = "Ferney";
console.log(`The navigator's name is ` + hacker2);

// Iteration 2: Conditionals

if(hacker1.length>hacker2.length)
{
  console.log(`The driver has the longest name, it has ` + hacker1.length + ` characters.`);
}
else if(hacker1.length<hacker2.length)
{
  console.log(`It seems that the navigator has the longest name, it has ` + hacker2.length + ` characters.`);
}
else
{
  console.log(`Wow, you both have equally long names, ` + hacker1.length + ` characters!.`);
}

// Iteration 3: Loops

let hacker1Uppercase = "";

for(i=0; i<hacker1.length; i++){
  hacker1Uppercase += hacker1.charAt(i).toUpperCase()+" ";
}
console.log(hacker1Uppercase);

let hacker2Reverse = "";
for(i=(hacker2.length); i>=0; i--){
  hacker2Reverse += hacker2.charAt(i);
}
console.log(hacker2Reverse);

switch(hacker1.localeCompare(hacker2)){
  case -1:
    console.log("The driver's name goes first.");
    break;
  case 1:
    console.log("Yo, the navigator goes first definitely.");
    break;
  default:
    console.log("What?! You both have the same name?");
}

// Bonus 1

let text = "Praesent ut gravida purus, at vehicula est. Maecenas pharetra aliquam nisi, in eleifend metus. Curabitur et mollis dui. Pellentesque suscipit volutpat mi quis blandit. Maecenas ante massa, auctor vitae odio at, rhoncus pulvinar massa. Suspendisse varius orci nec purus egestas sollicitudin. Donec eget euismod elit. Vestibulum finibus fermentum leo, aliquam molestie purus maximus hendrerit. Donec vel porta ligula, tincidunt lobortis tellus. Mauris ex est, convallis quis ligula in, porttitor posuere risus. Pellentesque imperdiet, quam nec ultrices elementum, lorem lectus accumsan nisi, in imperdiet dui justo et turpis. Quisque ac neque fringilla, semper erat eu, ullamcorper odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in sem orci. Integer lacinia leo venenatis est placerat, sit amet dictum massa consequat. Duis quis lobortis sapien. Morbi in orci vel odio fringilla ornare et sed nunc. Maecenas porttitor lorem eu nunc tincidunt, quis viverra erat molestie. Nullam facilisis id orci congue feugiat. Phasellus felis est, tristique sit amet lacus bibendum, porttitor lacinia dolor. Sed volutpat, odio vel iaculis blandit, dui velit tempor quam, id porttitor nunc sapien vitae dui. Donec quis rutrum libero, eget laoreet sem. Morbi mauris nisl, imperdiet et ultrices et, aliquam id ex. Etiam in elit at nunc luctus tristique. Aenean vel erat orci. Vestibulum at mi eu mauris iaculis mollis. Donec volutpat, odio sit amet egestas fermentum, sem dui ullamcorper diam, sed elementum felis massa gravida felis. Mauris nec risus finibus dolor gravida placerat. Sed non iaculis mauris. Maecenas metus velit, maximus vel euismod non, dapibus a tortor. Sed consectetur rhoncus sapien, in elementum justo gravida nec. Aliquam posuere ipsum vel massa aliquet lacinia. Pellentesque ut leo eu ex iaculis finibus in a mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";

let arrayOfText = text.split(' ');

console.log("The number of words in the text is: " + arrayOfText.length);

let wordToSearch = "et";
let countOcurrences = 0;

countOcurrences = text.split(wordToSearch).length - 1;
console.log(`The number of Ocurrences of the word "` + wordToSearch + `" is ` + countOcurrences + `.`)

// Bonus 2

let phraseToCheck = "Amor, Roma";
let phraseReverse = "";
let j = phraseToCheck.length;

while(j>0){
  j--
  if (phraseToCheck.charAt(j) === ",") {
    continue;
  }else if(phraseToCheck.charAt(j) === "!"){
    continue;
  }else if(phraseToCheck.charAt(j) == 0){
    continue;
  }else if(phraseToCheck.charAt(j) === "'"){
    continue;
  }else if(phraseToCheck.charAt(j) === "?"){
    continue;
  }
  phraseReverse += phraseToCheck.charAt(j).toLowerCase();
}

let phraseReverseFix = ""
for(i=(phraseReverse.length);i>=0;i--){
  phraseReverseFix += phraseReverse.charAt(i);
}

if(phraseReverse===phraseReverseFix){
  console.log(`The Phrase: "`+phraseToCheck+`" is a Palindrome.`);
}
else {
  console.log(`The Phrase: `+phraseToCheck+` isn't a Palindrome.`);
}