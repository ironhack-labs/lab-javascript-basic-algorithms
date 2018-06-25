// Names and Input
var hacker1 = "Anna";
console.log(`The driver'\s name is ${hacker1}`);

var hacker2 = prompt("What is your name?");
console.log(`The navigator\'s name is ${hacker2}`);

//Conditionals
var driverNameLength = hacker1.length;
var navigatorNameLength = hacker2.length;

if(driverNameLength > navigatorNameLength){
  console.log(`The Driver has the longest name, it has ${driverNameLength} characters`);
}
else if(driverNameLength < navigatorNameLength){
  console.log(`Yo, navigator got the longest name, it has ${navigatorNameLength} characters`);
}
else{
  console.log(`wow, you both got equally long names, ${navigatorNameLength} characters!!`);
}

// Loops and name comparations

var driverOutPutName = "";
for(var i = 0; i<driverNameLength;i++){
  var charInName = hacker1[i].toUpperCase();
  driverOutPutName += `${charInName} `;
}

console.log(driverOutPutName);

var navigatorOutputName = "";

for(var i = navigatorNameLength-1; i>=0;i--){
  var charInName = hacker2[i];
  navigatorOutputName += charInName;
}

console.log(navigatorOutputName);

var compareNames = hacker1.localeCompare(hacker2);

if(compareNames === -1){
  console.log('The driver\'s name goes first');
}
else if(compareNames === 1){
  console.log('Yo, the navigator goes first definitely');
}
else{
  console.log('What?! You both got the same name?');
}

var sentence = prompt('Give me a sentence to check if its a palindrome');
checkIfPalindrome(sentence);

function checkIfPalindrome(string){
  var sentenceReverse = "";
  for(var i = string.length-1; i>=0;i--){
    sentenceReverse += string[i];
  }
  var trimmedSentenceF = string.replace(/\s/g, "");
  var trimmedSentenceB = sentenceReverse.replace(/\s/g, "");

  if(trimmedSentenceF.toLowerCase() === trimmedSentenceB.toLowerCase()){
    console.log('We have a palindrome');
  }
  else{
    console.log('This sentence is not a palindrome');
  }
}

// Lorem Ipsum generator

var loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis orci leo, et scelerisque ex dapibus in. Aliquam condimentum tempus velit, non euismod turpis semper volutpat. Aenean cursus odio rhoncus pulvinar auctor. Vivamus a dui in neque condimentum pharetra ac ac ligula. Suspendisse lobortis velit vitae purus fermentum venenatis. Maecenas ullamcorper feugiat tortor sed fringilla. Aliquam ut orci ut tortor suscipit vehicula quis quis enim. Quisque erat dui, porta vel rhoncus sit amet, lacinia a eros. Aenean eu laoreet lorem. Duis dictum nunc consectetur mi elementum, ac dapibus neque iaculis. Donec placerat sapien non facilisis lacinia. Ut ut ultrices enim. Mauris quis hendrerit urna.\
Suspendisse nec pretium nunc, non laoreet neque. Aenean suscipit mattis risus nec euismod. Donec quam tellus, tincidunt ut sem id, convallis luctus felis. Nunc congue urna a justo mollis, sit amet vehicula sapien luctus. In non aliquam augue. Morbi bibendum ipsum urna, non pharetra magna hendrerit ac. In hac habitasse platea dictumst. Duis convallis malesuada mauris sit amet dignissim. Morbi venenatis risus ac urna posuere accumsan nec sed nisi. In aliquam tempus turpis, placerat sollicitudin nisi placerat ut. Maecenas viverra, lorem vitae aliquet dapibus, arcu justo pellentesque ipsum, sed efficitur dolor justo id turpis. Duis vestibulum egestas sagittis. Phasellus elit orci, dictum id justo eu, venenatis vehicula mi. Nunc iaculis, sem non gravida ultricies, est neque ultrices mauris, in imperdiet purus libero et massa. Praesent ac nibh id libero commodo blandit nec id orci. Nunc vitae tincidunt elit.\
Phasellus sollicitudin odio sed aliquet faucibus. Duis sed interdum ante. Cras egestas eros at velit ullamcorper sollicitudin. Nunc suscipit enim maximus massa malesuada molestie ac a erat. Morbi scelerisque nibh vitae diam tincidunt ultricies. Praesent quis placerat metus, sed congue metus. Maecenas arcu eros, molestie sit amet urna sed, porttitor scelerisque magna. Etiam auctor finibus enim finibus mollis. Mauris consequat orci ac enim iaculis suscipit.";

wordsCountInSentence(loremIpsumText);
countWordExistence("et",loremIpsumText);

function wordsCountInSentence(str){
  var wordsInSentence = str.split(' ').length;
  console.log(`Words in Lorem Ipsum: ${wordsInSentence}`);
}
function countWordExistence(word,sentence){
  var sentenceArray = sentence.split(' ');
  var hits = 0;
  for(var i = 0; i<sentenceArray.length;i++){
    if(sentenceArray[i] === word){
      hits++;
    }
  }
  console.log(`The word \'${word}\' was found ${hits} times`);
}