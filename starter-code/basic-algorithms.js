// Names and Input

var hacker1 = "John"

console.log("The driver's name is " + hacker1);

var hacker2 = prompt("What is your name?");

console.log("The navigator's name is " + hacker2);

//Conditionals

if(hacker1.length > hacker2.length){
 console.log("the driver has the longest name, it has " + hacker1.length + " characters.");
}else if (hacker1.length < hacker2.length){
 console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters" );
}else{
 console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}

//Loops

var hacker1Print = "";

for(var i = 0; i < hacker1.length; i++){
 hacker1Print += hacker1[i] + " ";
}
console.log(hacker1Print.toUpperCase());

var hacker2Print = "";

for(var j = hacker2.length - 1; j >= 0; j--){
 hacker2Print += hacker2[j];
}
console.log(hacker2Print);

// This is the lexicographic exercice, i did not know how to do it with a loop.
// Remainder for myself: Both names must start with capital case for the function to work

if (hacker1.localeCompare(hacker2) < 0)  {
 console.log("The driver's name goes first");
}else if(hacker1.localeCompare(hacker2) > 0){
 console.log("Yo, the navigator goes first definitely");
}else{
 console.log("What?! You both got the same name?")
}

//Palindrome

var answer = prompt("Type a word or phrase to check if it is a Palindrome");
var stringToCheck = ""
   // eliminating spacesin string
for(var z = 0; z < answer.length; z++){
 if(answer[z]!== " "){
   stringToCheck += answer[z];
 }else{
   continue;
 }
}
   // getting the reverse to compare them
var reversed = "";

for(var y = stringToCheck.length - 1; y >= 0; y--){
 reversed += stringToCheck[y];
}
   //comparing them
if(reversed === stringToCheck){
 console.log(answer + " is a Palindrome!!!");
}else{
 console.log(answer + " is not a Palindrome");
}

// Lorem ipsum generator

var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales elit dictum erat volutpat, non consectetur tellus ullamcorper. Fusce vestibulum aliquam enim, ac congue leo commodo vitae. Fusce sit amet efficitur massa, et dictum neque. Donec dapibus sapien quis commodo lobortis. Maecenas sodales, sapien nec varius mollis, velit nisi tempor metus, eget euismod massa tellus non elit. Pellentesque mollis molestie sagittis. Sed at commodo risus. Sed lobortis orci a sapien tincidunt, eget venenatis risus facilisis. Nulla ornare scelerisque magna non interdum. Cras ac ante sit amet sapien luctus congue. Mauris sem magna, faucibus at finibus eu, interdum ut ipsum. Curabitur ac finibus quam. Donec pellentesque est velit, in ornare eros placerat vitae. Vivamus eget turpis vitae sapien rhoncus rhoncus. Curabitur erat augue, cursus eget augue in, finibus faucibus arcu. Proin eu diam in magna placerat vulputate. Aliquam arcu diam, aliquam at tempus quis, laoreet nec velit. Duis aliquet eu tellus ut fermentum. In diam justo, pulvinar quis quam a, rhoncus molestie felis. Curabitur facilisis lacus leo, sit amet commodo enim vestibulum pharetra. In diam ligula, consectetur tristique condimentum vel, iaculis quis augue. Praesent laoreet sapien vitae velit auctor, vel posuere ipsum fermentum. In lacinia nisi massa, a rhoncus odio posuere vel.Nulla porta libero et dolor dignissim, eget vehicula nunc placerat. Morbi tincidunt lacinia augue suscipit porta. Proin vel tortor a elit scelerisque euismod a a felis. Ut ultricies consequat diam. Phasellus ac ex sit amet purus gravida laoreet. Donec vulputate commodo mauris, vel porttitor orci pellentesque ac. Ut eu sem diam."
var wordCount = 1;
var etCount = 0;
 for(var w = 0; w < loremIpsum.length; w++){
 if(loremIpsum[w]===" "){
   wordCount++
    if(loremIpsum[w+1] === "e" && loremIpsum[w+2] === "t" && loremIpsum[w+3] === " "){
     etCount++
   }
  
 }else{
     continue;
   }
   //counting the words with number of spaces + 1
 }
 console.log("Number of words is " + wordCount);
 console.log("Number of 'et's is " + etCount);
