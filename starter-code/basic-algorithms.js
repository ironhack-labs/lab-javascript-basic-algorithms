//1. Names & input
//Create a variable hacker1 with the name of the driver
var hacker1 = "Alex";

//Print "The driver's name is XXXX"
console.log("The driver´s name is " + hacker1);

//Create a variable hacker2 and ask the user for the navigator's name
var hacker2 = prompt("What´s the navigator´s name?");

//Print "The navigator's name is YYYY"
console.log("The navigator´s name is " + hacker2);

//2. Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker1.length < hacker2.length) {
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else {
    console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}

//3. Loops
//Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"
var array = hacker1.split("");
var nameSep = array.join(' ');
var nameSepUp = nameSep.toUpperCase();
console.log(nameSepUp);

//4.Print all the characters of the navigator's name, in reverse order. ie. `"nhoJ"`
var reverse = hacker2.split("").reverse().join("");
console.log(reverse);

//5.Depending on the [lexicographic order]

var arrayNames = [hacker1, hacker2];
arrayNames.sort();
console.log(arrayNames);
if (hacker1 === hacker2) {
    console.log("What?! You both got the same name?")
} else if (hacker2 === arrayNames[0]) {
    console.log("Yo, the navigator goes first definitely")
} else if (hacker1 === arrayNames[0]) {
    console.log("The driver's name goes first")
}


//### Bonus Time!

/*9. Ask the user for a new string and check if it's a [Palindrome](https://en.wikipedia.org/wiki/Palindrome). Examples of palindromes:
	- "A man, a plan, a canal, Panama!"
	- "Amor, Roma"
	- "race car"
	- "stack cats"
	- "step on no pets"
	- "taco cat"
	- "put it up"
	- "Was it a car or a cat I saw?" and "No 'x' in Nixon".*/


var phrase = prompt("Give me a phrase so I can check if it´s a palindrome");

var phraseW = phrase.split(" ").join("");
var phraseRev = phraseW.split("").reverse().join("");

if (phraseW === phraseRev) {
    console.log("It´s a palindrome!")
} else {
    console.log("It´s not a palindrome")
}

/*10. Go to [lorem ipsum generator](http://www.lipsum.com/) and:
  - Generate 3 parragraphs. Store the text in a String
  - Make your program count the number of words in the string
 */

var paragraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel velit ex. Pellentesque condimentum velit in interdum bibendum. Sed hendrerit tempus magna. Proin nec lectus urna. Praesent sodales placerat lorem, eget maximus lectus accumsan sodales. Suspendisse potenti. Nullam ut eros at risus feugiat dapibus. Nunc accumsan ut augue et lacinia. Suspendisse elementum lacus vitae est vehicula dignissim. Phasellus et enim nisi. Aenean fermentum rhoncus quam eu pellentesque. Fusce imperdiet nunc vel velit imperdiet egestas.Etiam vitae pharetra lacus. Vestibulum laoreet massa id libero sodales pellentesque. Nulla quis auctor leo. Nunc ac urna velit. Vivamus consectetur fermentum pulvinar. Ut ligula augue, ultricies eget dui sed, ornare hendrerit felis. Proin bibendum, justo id scelerisque ultricies, neque nibh porttitor ipsum, a rutrum neque nulla quis dolor. Nunc condimentum turpis sed est feugiat, ac facilisis mauris semper. Duis ligula dolor, blandit ac finibus eget, laoreet porttitor dolor. Duis mollis nisl ut arcu semper, nec convallis magna rutrum. Mauris suscipit nibh a nisl sodales pellentesque. Aenean id ante a justo laoreet fermentum ac scelerisque augue. Sed libero libero, laoreet at ornare non, feugiat et nunc. Donec porta pretium orci. In sagittis quam at blandit vestibulum.Praesent eleifend velit justo, ut pharetra diam egestas non. Donec imperdiet semper ipsum, in commodo lectus finibus in. Nulla facilisi. Suspendisse ultricies purus eu nibh laoreet ornare. Praesent in urna risus. Nulla elit tellus, dictum et commodo at, iaculis eu sapien. Cras pulvinar velit a turpis pharetra blandit. Ut magna ligula, elementum sit amet pretium non, auctor nec dolor. Aliquam venenatis risus et hendrerit fermentum. Proin libero felis, mattis ac ante a, egestas pulvinar augue. Sed tempus, urna vitae malesuada dictum, odio augue pharetra lorem, sit amet pretium quam lectus vitae dolor. Fusce vitae gravida est. Praesent quis tristique est. Ut tincidunt elit nec neque convallis tristique. Donec vitae sodales ex. In nec dolor vel metus imperdiet ultricies ut consectetur odio."

function wordCount(paragraphs) {
    return paragraphs.split(" ").length;
}
console.log(wordCount(paragraphs));

// - Make your program count the number of times the latin word [`et`](https://en.wiktionary.org/wiki/et#Latin)appears


/*var counterEt=0;
  
for(var i=0; i < wordCount.length; i++ ){
  if(wordCount[i] === "Lorem"){
    counterEt ++;
  }
}
  
console.log(counterEt);*/


var paragraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel velit ex. Pellentesque condimentum velit in interdum bibendum. Sed hendrerit tempus magna. Proin nec lectus urna. Praesent sodales placerat lorem, eget maximus lectus accumsan sodales. Suspendisse potenti. Nullam ut eros at risus feugiat dapibus. Nunc accumsan ut augue et lacinia. Suspendisse elementum lacus vitae est vehicula dignissim. Phasellus et enim nisi. Aenean fermentum rhoncus quam eu pellentesque. Fusce imperdiet nunc vel velit imperdiet egestas.Etiam vitae pharetra lacus. Vestibulum laoreet massa id libero sodales pellentesque. Nulla quis auctor leo. Nunc ac urna velit. Vivamus consectetur fermentum pulvinar. Ut ligula augue, ultricies eget dui sed, ornare hendrerit felis. Proin bibendum, justo id scelerisque ultricies, neque nibh porttitor ipsum, a rutrum neque nulla quis dolor. Nunc condimentum turpis sed est feugiat, ac facilisis mauris semper. Duis ligula dolor, blandit ac finibus eget, laoreet porttitor dolor. Duis mollis nisl ut arcu semper, nec convallis magna rutrum. Mauris suscipit nibh a nisl sodales pellentesque. Aenean id ante a justo laoreet fermentum ac scelerisque augue. Sed libero libero, laoreet at ornare non, feugiat et nunc. Donec porta pretium orci. In sagittis quam at blandit vestibulum.Praesent eleifend velit justo, ut pharetra diam egestas non. Donec imperdiet semper ipsum, in commodo lectus finibus in. Nulla facilisi. Suspendisse ultricies purus eu nibh laoreet ornare. Praesent in urna risus. Nulla elit tellus, dictum et commodo at, iaculis eu sapien. Cras pulvinar velit a turpis pharetra blandit. Ut magna ligula, elementum sit amet pretium non, auctor nec dolor. Aliquam venenatis risus et hendrerit fermentum. Proin libero felis, mattis ac ante a, egestas pulvinar augue. Sed tempus, urna vitae malesuada dictum, odio augue pharetra lorem, sit amet pretium quam lectus vitae dolor. Fusce vitae gravida est. Praesent quis tristique est. Ut tincidunt elit nec neque convallis tristique. Donec vitae sodales ex. In nec dolor vel metus imperdiet ultricies ut consectetur odio."

var words = paragraphs.split(" ");
var counterEt = 0;

for (var i = 0; i < words.length; i++) {
    if (words[i] === "et") {
        counterEt++;
    }
}

console.log(counterEt);


/* OTRA FORMA RAL
const words = paragraphs.split(" ");
 
const et =  words.filter(w => w === "et");

console.log(et.length)*/