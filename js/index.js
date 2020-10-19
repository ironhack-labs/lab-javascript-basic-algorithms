// Iteration 1: Names and Input
//1.1
var hacker1 = "Tommy";
//1.2
console.log(`The driver's name is ${hacker1}`);
//1.3
var hacker2 = "Albert";
//1.4
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
}

// Iteration 3: Loops
//3.1
var HACKER1 = hacker1.toUpperCase();
var HACKER1Spaced = "";
for (var i = 0; i < HACKER1.length; i++) {
  if (i < HACKER1.length - 1) {
    HACKER1Spaced += HACKER1[i] + " ";
  } else {
    HACKER1Spaced += HACKER1[i]
  }
}
console.log("HACKER1Spaced", HACKER1Spaced);

//3.2
var hacker2Reversed = "";
for (var j = hacker2.length - 1; j >= 0; j--) {
  hacker2Reversed += hacker2[j];
}
console.log("hacker2Reversed", hacker2Reversed);

//3.3
if (hacker1 < hacker2) {
  console.log(`The driver's name goes first.`);
} else if (hacker1 > hacker2) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

//Bonus 1
var str = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend massa massa, eget congue ligula euismod nec. Nulla semper lacus vel vehicula laoreet. Aenean massa velit, imperdiet sagittis odio quis, mattis cursus ex. Nunc euismod sit amet diam eget interdum. Nullam fermentum, massa at viverra posuere, ex nunc commodo leo, nec malesuada lectus nulla et odio. Maecenas molestie est id enim tristique commodo. Nullam imperdiet urna ut urna fringilla malesuada. Nulla volutpat sem enim, id efficitur dolor dignissim nec. Nunc ut turpis quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ut metus tincidunt, vehicula libero a, pharetra orci. Integer at diam et lorem condimentum dapibus vel ut erat. Morbi scelerisque interdum ipsum nec consequat.
           Nulla hendrerit ligula non ipsum congue, et hendrerit arcu malesuada. Quisque tincidunt congue risus, ac viverra nisl maximus eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Nam nec ultricies elit. Nunc vitae interdum nulla. Donec ac purus id neque vehicula maximus. Nulla bibendum dictum magna vel hendrerit. Aliquam erat volutpat. Nulla facilisi. Nunc turpis odio, pharetra ut nunc interdum, faucibus lobortis ligula.
           Suspendisse et odio imperdiet, ullamcorper libero a, elementum ipsum. Etiam blandit non ex ac ultrices. Mauris blandit, ante a pulvinar bibendum, justo diam sollicitudin est, sed porttitor arcu lacus eget lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum accumsan odio eu posuere. Proin sit amet velit quis nulla commodo dictum. Vestibulum semper faucibus diam. Etiam nec orci lacus. Nulla ultrices tempor ante vitae aliquam. Proin bibendum felis non est varius, eget tempor nibh congue. Morbi tristique vulputate ligula vitae tempus. Sed elit sem, pretium eget bibendum sit amet, scelerisque non magna. Vestibulum rhoncus sapien turpis, at fringilla leo mollis vitae.`;

console.log("string length", str.length);

var count = 0;
var strlen = str.length - 1;
var etIndex;
while (str.length > 0) {
  etIndex = str.indexOf(' et ');
  if (etIndex < 0) {
    break;
  }
  str = str.slice(etIndex + 4, strlen - 1);
  //console.log(etIndex);
  count++;
}
console.log(`"et" appears ${count} times`);

//Bonus 2
var phraseToCheck = "A man, a plan, a canal, Panama!";
var phraseClean = phraseToCheck.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
var flag = true;
for( var i = 0 ; i < phraseClean.length/2 ; i++){
  if(phraseClean[i] !== phraseClean[phraseClean.length - 1 - i]){
    console.log("It's not a Palindrome.");
    break;
    flag = false;
  }else{
    flag = true;
  }
}
if(flag){
  console.log("It's a Palindrome.")
}




