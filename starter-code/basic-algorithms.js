// Names and input
var hacker1 = "Bertrand";
console.log("The driver's name is "+ hacker1);
var hacker2 = prompt("What is your navigator's name");
console.log("The navigator's name is "+ hacker2);

//Conditionals
if (hacker1.length > hacker2.length) {
  console.log(hacker1+ " has the longest name, it has " + hacker1.length + " characters");
} else if (hacker1.length < hacker2.length) {
  console.log("Yo, " + hacker2 + " has the longest name, it has " + hacker2.length + " characters");
} else { console.log("wow, you both got equally long names, " + hacker1.length + " characters!!")}

//Loops
var response1 = "";
for (var i=0; i<hacker1.length; i++) {
  response1 += hacker1[i].toUpperCase() + " ";
}
console.log(response1);


var response2 = "";
for (var j = hacker2.length - 1; j >= 0; j--) {
  response2 = response2 + hacker2[j];
}
console.log(response2);


if (hacker1[0] < hacker2[0]) {
  console.log("The driver's name goes first");
} else if (hacker1[0] > hacker2[0]) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?")
}

//Bonus

var isPalindrome = prompt("New string").toLowerCase();
var reverseString = "";

for (var k = isPalindrome.length - 1; k >=0; k--){
  reverseString = reverseString + isPalindrome[k];
}

if (isPalindrome === reverseString) {
    console.log("It's a Palindrome");
  } 
  else {
    console.log("not a palindrome");
    
  }

var loremString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas risus ligula, pulvinar vitae maximus et, blandit ac ipsum. Maecenas sapien ipsum, rhoncus id aliquam sed, vehicula vitae nibh. Donec dictum metus ut lectus placerat, quis gravida justo dictum. Mauris eu leo auctor sapien maximus varius sagittis in ligula. Aenean vulputate hendrerit consectetur. Nulla facilisi. Vestibulum consectetur lorem vel dui egestas bibendum. Maecenas ac purus ut sem vehicula gravida. Ut gravida imperdiet lacus at sagittis. Proin mattis, neque feugiat egestas pellentesque, lacus tellus feugiat augue, sed tincidunt justo odio ut neque. Praesent aliquam nulla at nunc ornare, at auctor odio congue. Phasellus nec mi vel erat mattis bibendum aliquam ullamcorper magna. Nunc fermentum molestie mattis. Sed eu suscipit quam. Fusce nec lacus ultricies, bibendum augue eget, congue mi. Mauris vel justo diam. Ut rhoncus lacus et mi finibus, nec fringilla purus facilisis. Morbi in nunc in velit dignissim posuere non at nunc. Nunc non eleifend ipsum. Curabitur posuere ultricies suscipit. Proin aliquet, nunc in placerat facilisis, neque sem posuere urna, vitae dapibus enim est et orci. Donec auctor suscipit massa, at semper mi auctor eu. Donec at vestibulum felis. Nulla est orci, consequat id porttitor et, faucibus vel ipsum. Aenean in lacus lectus. Ut mattis sollicitudin urna at bibendum. Sed nisi leo, mattis et risus pulvinar, mattis venenatis metus. Phasellus porttitor dui ut magna congue sagittis. Vivamus ultrices fermentum venenatis. Etiam ornare efficitur ipsum a volutpat. Sed id massa id nisl tincidunt bibendum a ut nulla. Sed mollis ipsum libero, et faucibus justo scelerisque non. Aliquam erat volutpat. Curabitur in lectus vulputate, mollis tellus eu, tristique augue. Quisque pharetra imperdiet elit sit amet sodales. Proin viverra ligula sit amet tempus faucibus. Integer et malesuada enim. Curabitur augue turpis, convallis in vulputate vitae, dictum id justo. Nunc vestibulum orci nec neque tempor consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec elementum, ante quis porta commodo, est sem imperdiet est, in congue sem erat in magna.";

var lorem2= "bertr fjfj fhfh"

var nbWords = 0;

for (var l=0; l<loremString.length; l++) {
  if (loremString[l] === " ") {
    nbWords +=1;
  }
}

console.log(nbWords+1);

var nbEt = 0;

for (var m=0; m<loremString.length; m++) 
  if (loremString[m] === "et "){
    nbEt +=1;
  }

console.log(nbEt);






