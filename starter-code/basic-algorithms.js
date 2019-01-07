// 1. Create a variable `hacker1` with the driver's name

var hacker1 = "Samuel"; // driver

// 2. Print `"The driver's name is XXXX"` 
console.log("The driver's name is " + hacker1);

// 3. Create a variable `hacker2` and [ask the user
var hacker2 = prompt("What's your name ?"); // navigator

// 4. Print `"The navigator's name is YYYY"`
console.log("The navigator's name is " + hacker2);

//##
/*
5. Depending on which name is longer
	- `The Driver has the longest name, it has XX characters` or 
	- `Yo, navigator got the longest name, it has XX characters` or
	- `wow, you both got equally long names, XX characters!!`
*/

if(hacker1.length > hacker2.length) {
	console.log(hacker1 + " has the longest name." );
} else if(hacker1.length < hacker2.length) {
	console.log(hacker2 + " has the longest name.");
} else {
	console.log("you both got equally long names !");
}

//## Loops
/*
6. Print all the characters of the driver's name, separated by a space and [in capitals]
 "J O H N"`
  */

var i = 0;
var result = "";

while(i < hacker1.length ) {	
	
	var str = hacker1.charAt(i);
	result += " " + str.toUpperCase();
	i++;
}
 
console.log(result);

//##
/*
7. Print all the characters of the navigator's name, in reverse order "nhoJ"
  */

var int = 0;
var resultTwo = [];

while(int < hacker2.length ) {
	
	var strTwo = hacker2.charAt(int);
	resultTwo.push(strTwo);

	int++;
}

// reverse the array order and join all the items togethers without adding a space to print jessica acissej
var resultTwoReversed = resultTwo.reverse().join("");

// uppercase last caracter regex https://stackoverflow.com/questions/32149836/how-to-capitalize-the-last-letter-of-each-word-in-a-string
var hackerNewName = resultTwoReversed.toLowerCase().replace(/[a-z]\b/g, c => c.toUpperCase());

console.log(hackerNewName);

//##
/* 8. Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print:
  - `The driver's name goes first`
  - `Yo, the navigator goes first definitely`
  - `What?! You both got the same name?`*/ 

// in case user prompt a name without capital letter
var promptedHacker = hacker2.charAt(0).toUpperCase() + hacker2.slice(1);

// making a sortable array with the team members and sorting it
var myVar = [hacker1, promptedHacker];

// print sorted array
myVar.sort();
console.log(myVar);

// conditionals..
if	( myVar[0] === hacker1) {
	alert(hacker1 + " the driver goes first");

} 	else if (hacker1 === promptedHacker) {
	alert("What?! You both got the same name?");

}	else  if 	(myVar[0] === promptedHacker) {
	alert("Yo, "+ promptedHacker +" the navigator goes first definitely");
}


// 9. Ask the user for a new string and check if it's a palindrome 
//......FAILED THAT ONE
var userPrompt = prompt("Is it a Palindrome ?", "Amor").toLowerCase(); 

function makeArray(str) {
	var rString = [];
	for (i = 0; i < str.length; i++) { 
		let c = str.charAt(i);
		rString.push(c);
	}
	return rString;
}


function checkPal(arr){
	var arrayOne = makeArray(arr);
	var arrayTwo = makeArray(arr).reverse();
	var res;
	var n =  arrayOne.length;

	for (i = 0; i < arrayOne.length; i++) { 
		console.log("arr 1 val: "+ arrayOne[i] + "  arr2 val: " + arrayTwo[n -= 1]);

	}
	if (n === i) {res = true;}
	else { res = false; }
	return res;
}

alert(checkPal(userPrompt) + "..failed to do that one");


/*
10. Go to [lorem ipsum generator](http://www.lipsum.com/) and:
  - Make your program count the number of times the latin word [`et`](https://en.wiktionary.org/wiki/et#Latin)appears
*/

// Generate 3 parragraphs. Store the text in a String
var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra diam tellus, ac sagittis eros finibus quis. Sed pellentesque, erat nec vulputate bibendum, quam leo egestas enim, at euismod diam libero nec sem. Donec id felis fringilla, pretium lacus quis, laoreet enim. Donec interdum commodo ipsum, ut tempus libero feugiat vitae. Vivamus tincidunt in erat vel maximus. Vivamus egestas placerat nibh, vitae suscipit lectus maximus vel. Aenean pretium lacinia ornare. Integer blandit erat ac euismod efficitur. Nullam a erat in sem eleifend lobortis. Aliquam erat volutpat. Quisque ultrices interdum convallis. Etiam consectetur metus mauris, non pellentesque purus malesuada et. Suspendisse ac sodales libero. Integer porttitor fringilla ligula, vel accumsan felis faucibus a. Etiam sed mauris id purus dapibus rhoncus. Proin ut tempor odio, quis ultricies urna. Nulla tincidunt massa a pharetra scelerisque. Donec pretium dui laoreet sem consectetur, nec molestie sapien gravida. Sed non ex leo. Nunc vel pellentesque libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus feugiat blandit auctor. Vestibulum vel lorem sed enim consequat ornare. Donec ex ligula, pulvinar ac pellentesque at, pellentesque a tellus. Vestibulum semper sem nisl, sit amet viverra enim vulputate vel. Etiam lobortis ligula id ultrices sollicitudin. Suspendisse eleifend lobortis egestas. Proin sollicitudin eleifend leo sit amet iaculis. In fringilla, dui ut ultrices egestas, augue ex venenatis odio, tincidunt fermentum nulla nibh et nisl. Sed et tellus luctus, fringilla nunc et, luctus purus. Sed eros lacus, ullamcorper vitae hendrerit nec, venenatis ac turpis. Pellentesque sit amet diam eleifend, vehicula enim sed, elementum metus. Mauris dictum ut ante nec tempus. Vestibulum tempor massa quis metus tincidunt sodales tincidunt eu velit. Pellentesque ut leo sit amet massa mollis sagittis a vel libero.";

// Make your program count the number of words in the string
var occurence = 0;
var wordsList = lorem.split(" "); // convert to an array

for (i = 0; i < wordsList.length; i++) { 
 
	// count the number of times the latin word "et"
	if(wordsList[i] === "et"){
		occurence += 1;
	}
}

alert("There is " + wordsList.length + " words in my lorem ipsum and 'et' was used " + occurence + " times" );

// show full list
console.log(wordsList);