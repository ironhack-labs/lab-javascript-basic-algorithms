var hacker1 = "Mike"; 
var hack1Len = hacker1.length


console.log("The Driver's name is " + hacker1);

var hacker2 = prompt("What's your name?!");
console.log("The navigator name is " + hacker2)
var hack2Len = hacker2.length;


if (hack1Len > hack2Len) {
	console.log ("The Driver has the longest name, it has " + hack1Len + " characters")
} else if (hack2Len > hack1Len) {
	console.log ("Yo, navigator got the longest name, it has " + hack2Len +  " characters")
} else if (hack1Len === hack2Len) {
	console.log("wow, you both got equally long names, " + hack1Len + " characters!!")
}

var newHack = "";
for (var i= 0; i<hacker1.length; i++) {
	newHack += hacker1[i].toUpperCase() + " ";
}

console.log(newHack);


var new2Hack = "";
for (var i=hacker1.length-1; i>=0; i--) {
	new2Hack += hacker1[i];
}

console.log(new2Hack);


var arr = []
arr.push(hacker1, hacker2);
arr = arr.sort();

if (arr[0] === arr[1]) {
	console.log("What?! You both got the same name?")
} else if (arr[0] === hacker2) {
	console.log("Yo, the navigator goes first definitely")
} else if (arr[0] === hacker1) {
	console.log("The driver's name goes first");
}


var example = prompt("Please provide a phrase!")
example = example.toLowerCase();
var finish = ""
var reverseFinish = ""
for (var i = example.length-1; i>= 0; i--){
  if ((example[i].charCodeAt(0) >= 97) && (example[i].charCodeAt(0)) <= 122){
    reverseFinish += example[i]
  }
  
}

for (var i = 0; i< example.length; i++){
  if ((example[i].charCodeAt(0) >= 97) && (example[i].charCodeAt(0)) <= 122){
    finish += example[i]
  }
  
}

if (finish == reverseFinish){
  console.log("Is is a palindrome!")
} else {
  console.log("Not a palindrome")
}


var para1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."

para2 = para1.split(" ");

console.log(para2);

console.log(para2.length);





// Names and Input


//Conditionals


// Lorem ipsum generator
