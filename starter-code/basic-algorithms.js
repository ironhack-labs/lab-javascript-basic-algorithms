// Names and Input
var hacker1 = "pedro";

console.log("The driver's name is", hacker1);

var hacker2 = prompt("Navigator's name?");

console.log("The navigator's name is", hacker2);

//Conditionals
if (hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has", hacker1.length, "characters");
} else if (hacker1.length < hacker2.length){
  console.log("Yo, navigator got the longest name, it has", hacker2.length, "characters");
} else {
  console.log("wow, you both got equally long names,", hacker1.length, "characters");
}

//Loops
var nameSpaceCaps = "";

for (var i = 0; i < hacker1.length; i++){
  nameSpaceCaps += hacker1[i].toUpperCase();
  if (i < hacker1.length - 1){
    nameSpaceCaps += " ";
  }
}

console.log(nameSpaceCaps);

var reversedName = "";

for (var j = hacker2.length; j > 0; j--){
  reversedName += hacker2[j-1];
}

console.log(reversedName);

var whoFirst="b";

for (var k = 0; k < hacker1.length || k < hacker2.length; k++){  
  //same letter?
  if (hacker1[k] == hacker2[k]){
    continue;
  } else if (hacker1[k] < hacker2[k]){
    whoFirst = "d";
    break;
  } else if (hacker1[k] > hacker2[k]){
    whoFirst = "n";
    break;
  }
}

//If length isn't the same, compare length to decide who goes first
if (whoFirst == "b"){
  if (hacker1.length < hacker2.length){
    whoFirst = "d";
  } else if (hacker1.length > hacker2.length){
    whoFirst = "n";
  }
}


if (whoFirst == "d"){
  console.log("The driver's name goes first");
} else if (whoFirst == "n"){
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}

//Bonus palindrome
var isItPalindrome = prompt("String?");

//Extract only letters and convert to Upper Case
var palindromeLetters = "";
for (var m = 0; m < isItPalindrome.length; m++){
  //is it a letter? -> concatenate, otherwise just omit
  switch (isItPalindrome[m]){
    case "Q": case "W": case "E": case "R": case "T": case "Y": case "U":
    case "I": case "O": case "P": case "A": case "S": case "D": case "F":
    case "G": case "H": case "J": case "K": case "L": case "Ñ": case "Z":
    case "X": case "C": case "V": case "B": case "N": case "M":
    case "q": case "w": case "e": case "r": case "t": case "y": case "u":
    case "i": case "o": case "p": case "a": case "s": case "d": case "f":
    case "g": case "h": case "j": case "k": case "l": case "ñ": case "z":
    case "x": case "c": case "v": case "b": case "n": case "m": 
      palindromeLetters += isItPalindrome[m].toUpperCase();
      break;
  }  
}

//obtain its reverse word
reversedName = "";
for (var n = palindromeLetters.length; n > 0; n--){
  reversedName += palindromeLetters[n-1];
}

//finally compare
if (reversedName == palindromeLetters){
  console.log("String",isItPalindrome,"it's a palindrome!!");
} else{
  console.log("Sorry, string",isItPalindrome,"it's not a palindrome :(");
}

// Lorem ipsum generator
var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt risus eu tortor blandit, non ornare leo laoreet. Vivamus vitae risus iaculis, pellentesque erat et, dignissim est. Ut gravida, ex nec vulputate venenatis, purus diam vehicula ipsum, non tincidunt sem leo sit amet nibh. Aenean sem arcu, egestas ut massa in, mollis imperdiet odio. In non lorem scelerisque est eleifend tincidunt. Donec pharetra turpis sed mauris dictum, a interdum nisi euismod. Donec accumsan erat fringilla, fermentum lectus in, tempor nibh. Pellentesque ac libero laoreet, faucibus felis sed, consectetur dolor. Aliquam non dapibus eros. Phasellus non tortor finibus, vehicula orci non, ullamcorper urna. Quisque nec ex mauris. Fusce consectetur, turpis ac ornare ornare, ipsum ante finibus risus, ac eleifend enim ante sit amet tortor. Ut interdum arcu in ipsum congue, sed fringilla mauris feugiat. Vivamus sed dignissim lectus. Vestibulum felis ante, pellentesque ut tempus ac, aliquam vel mi. Sed at feugiat augue. Etiam fringilla, enim vel posuere pulvinar, ex felis aliquet lorem, quis auctor erat ligula eget dolor. Vivamus eu nibh luctus mi elementum rhoncus. Nullam euismod tempor mollis. Duis non imperdiet magna. Duis ornare magna efficitur pellentesque consequat. Fusce feugiat orci et felis ullamcorper, at pharetra orci ullamcorper. Donec mollis orci et erat posuere, tincidunt fermentum tellus tempor. Quisque quis tempus magna. Aliquam et sem tortor. Proin mollis nulla sapien, id viverra erat posuere pharetra. Nulla lobortis id tortor nec gravida. Donec bibendum pretium turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In mattis cursus egestas. Morbi quis libero odio. Cras auctor nulla eu odio tincidunt varius ut sed arcu. Fusce iaculis dolor a eleifend feugiat. Maecenas vestibulum tristique ante et tincidunt. Nam nibh ligula, imperdiet vitae nisl quis, aliquet tempor diam. Aliquam sagittis eleifend arcu, nec aliquet erat aliquet non. Nulla et metus ut neque semper malesuada. Fusce vel sapien sagittis, condimentum lectus et, sagittis lectus. Aenean in ex et velit efficitur lobortis. Cras a augue sapien. Curabitur commodo leo mauris, ac aliquam turpis efficitur nec. Pellentesque pulvinar tellus tincidunt tellus luctus, eget venenatis erat placerat. Nunc bibendum efficitur ante vel pretium. In sollicitudin malesuada orci eu sodales. Aenean a ipsum enim. Duis feugiat mauris sit amet euismod dignissim. Duis tellus urna, dapibus ac tincidunt eu, gravida non mi. Phasellus tincidunt consectetur rutrum. Cras a hendrerit elit, a dapibus quam. Cras vel nisl tincidunt, condimentum tortor non, facilisis erat. Suspendisse ut dictum mi. Phasellus rutrum ornare urna vitae volutpat. Morbi gravida eros at dui consectetur, non porta nisl cursus. Suspendisse accumsan in tortor vel dignissim. Nunc ut ligula ac velit eleifend tincidunt. Phasellus eget ligula varius, finibus odio a, porttitor dolor. Vestibulum ultricies a odio et molestie. Cras vehicula dignissim enim, vitae feugiat orci pulvinar vitae. Pellentesque at nulla sed dolor euismod bibendum. Nulla maximus molestie metus quis imperdiet. Mauris ipsum turpis, elementum eget efficitur nec, dignissim a mauris. Aliquam nec dapibus sapien. Suspendisse placerat scelerisque lobortis. Nullam dui neque, condimentum eget risus sed, pharetra rutrum est. Morbi venenatis ac magna ac sagittis. Fusce viverra lorem quam, non vestibulum est consequat et. Integer luctus auctor leo. Quisque odio sem, commodo eget ex non, feugiat sagittis magna. Integer condimentum commodo turpis nec semper. Aliquam erat volutpat. Phasellus semper, nunc vel finibus facilisis, purus ipsum ultricies metus, rutrum vulputate orci nisi et erat. Donec dignissim molestie eros. Phasellus ultricies eu enim non feugiat. Sed vestibulum sagittis dolor, nec semper odio consequat vel. Phasellus porta nunc in eros consequat, sit amet posuere nisi sodales. Donec tellus purus, tristique vel venenatis et, placerat id elit. Duis quis laoreet massa. Proin laoreet iaculis tellus vel mattis. Praesent scelerisque finibus justo, quis condimentum libero blandit sed. In nibh lacus, auctor eu ultricies nec, sodales non nibh. Vestibulum fringilla magna vel suscipit gravida. Donec tristique diam purus, sit amet egestas magna laoreet sit amet. Curabitur ut rutrum leo. Praesent suscipit lobortis magna hendrerit consequat. Integer nec eleifend lacus, ut semper lectus. Etiam eu orci eleifend, finibus turpis a, pellentesque nibh. Proin id commodo nulla. Cras placerat in diam sed tempus. Suspendisse sodales tincidunt lectus at finibus. Morbi ac vestibulum risus, et iaculis justo. Ut et lectus nisi. Proin condimentum libero nec scelerisque fringilla. Sed mollis non lectus eu ultrices. Proin nunc tellus, varius at porta a, ultricies vel magna. Morbi mauris massa, fermentum sed erat ut, sagittis mattis lacus. Aenean quis nibh quam.";

//Word counting
var numberWords = 0;
//flag to identify when a word starts or begins
var spaceFound = true;

for (var o = 0; o < lorem.length; o++){
  //space? -> set flag to true
  if (lorem[o] == " "){
    spaceFound = true;
  }
    
  if (lorem[o] != " "){
    //previous character is a space    
    if (spaceFound){
      //increment number of words
      numberWords++;
    }
    //boolean to false to avoid increments of words
    spaceFound = false;
  }
}

console.log("Number of words in lorem:", numberWords);

//et occurrences

//word could appear as " et " or " et," or " et."
var spacesEt = lorem.indexOf(" et ");
var commaEt = lorem.indexOf(" et,");
var pointEt = lorem.indexOf(" et.");

var nextEt = -1;
var numberEts = 0;

//find the minimum
if (spacesEt > 0) {nextEt = spacesEt;}
if (commaEt < nextEt && commaEt > 0) {nextEt = commaEt;}
if (pointEt < nextEt && pointEt > 0) {nextEt = pointEt;}

while(nextEt > 0){
  numberEts++;
  //plus 4 because of length of " et "
  spacesEt = lorem.indexOf(" et ", nextEt + 4);
  commaEt = lorem.indexOf(" et,", nextEt + 4);
  pointEt = lorem.indexOf(" et.", nextEt + 4);

  nextEt = -1
  //decide next occurrence finding the minimum
  if (spacesEt > 0) {nextEt = spacesEt;}
  if (commaEt < nextEt && commaEt > 0) {nextEt = commaEt;}
  if (pointEt < nextEt && pointEt > 0) {nextEt = pointEt;}
}

console.log("Number of et occurrences:",numberEts);