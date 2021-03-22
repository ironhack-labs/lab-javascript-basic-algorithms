// Iteration 1: Names and Input

var hacker1 = "Anthony";
console.log(`The driver's name is ${hacker1}`);

var hacker2 = "Explorer";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has de longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
//3.1
var hacker1Cap = hacker1.toUpperCase();
var wordWithSpaces = "";
for(var i=0; i<hacker1Cap.length; i++){  
  wordWithSpaces += hacker1Cap[i] + " ";
  }
console.log(wordWithSpaces);

//3.2
var reversedWord = "";
for(var i=hacker1.length-1; i>=0; i--){
  reversedWord += hacker1[i];
}
console.log(reversedWord);

//3.3
compare = hacker1.localeCompare(hacker2);

  if(compare == -1){
    console.log(`The driver's name goes first.`);
    
  }else if(compare == 1){
    console.log(`Yo, the navigator goes first definitely.`);
    
  }else if (compare == 0){
    console.log(`What?! You both have the same name?`);
    
  };
//Bonus
//1

var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec tortor eget metus maximus posuere. Vestibulum vulputate, est nec blandit consectetur, massa purus scelerisque lacus, at faucibus elit risus ac risus. Suspendisse ullamcorper, ligula a pulvinar interdum, odio ante faucibus nisl, nec ultricies ipsum sem a arcu. Phasellus non neque eleifend, egestas diam in, eleifend odio. Aenean lacus turpis, feugiat sed pellentesque a, tincidunt sed sapien. Vivamus rhoncus, lacus sodales maximus accumsan, sem mauris egestas turpis, ornare tincidunt ex ligula in libero. Proin cursus nisl vitae nibh ullamcorper, non rutrum neque tincidunt. Duis quam diam, finibus quis auctor a, pellentesque sed odio. Proin ullamcorper dapibus scelerisque. Aenean ullamcorper tortor diam, a feugiat lorem tincidunt quis. Nulla pulvinar nisl eros, in cursus metus vehicula nec.Morbi tincidunt viverra libero, id lacinia nisi pharetra placerat. Vestibulum sit amet orci justo. Donec gravida lorem ipsum, ac volutpat metus semper ac. Vestibulum congue consequat metus non porttitor. Sed feugiat augue id gravida placerat. Donec cursus pretium lacus porta viverra. Pellentesque mattis, sapien sit amet porta vulputate, nulla leo consectetur odio, vitae sollicitudin elit leo non nisi. Cras dictum lectus eu iaculis sollicitudin. Duis blandit, mi non commodo congue, tellus orci faucibus purus, id pretium ligula mauris congue augue. Sed tempus feugiat tortor. Proin ut placerat mi. Nam ut erat eros. Aliquam non dapibus augue. Fusce interdum et diam vitae elementum. Phasellus nec cursus turpis. Nullam neque quam, porta vel vulputate in, molestie quis arcu.Maecenas sed consequat justo. Proin fringilla, purus vitae ornare euismod, ipsum nisi molestie tellus, vitae euismod massa tortor id justo. Mauris mi nibh, finibus vitae blandit non, pellentesque sed est. Ut ullamcorper in nibh ac lobortis. Aenean eleifend laoreet sapien nec convallis. Integer vel diam ut quam tempus blandit non in sem. Ut ac fermentum dolor, id pharetra lectus. Suspendisse potenti. Duis in commodo quam, at dictum purus.";

var numOfWords = 1;

for (var i=0; i < loremIpsum.length; i++){
  if (loremIpsum[i] === " "){
  numOfWords++;
  }
}
console.log(`The string has ${numOfWords} words`);

var numberOfEt = 0;
var n = " et ";

position = loremIpsum.indexOf(n);
while (position != -1){
  numberOfEt++;
  position = loremIpsum.indexOf(n, position+1);
}
console.log(`The word 'et' appears ${numberOfEt} times`);