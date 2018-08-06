// Names and Input

var hacker1 = "Mohamed";

console.log("The driver's name is: " + hacker1);

var hacker2 = prompt ( "What's the navigator's name : ") ; 

console.log( "The navigator's name is: " + hacker2);



//Conditionals

var l1 = hacker1.length ;
var l2 = hacker2.length;

if (l1 > l2) {console.log("The Driver has the longest name, it has " +l1 +" characters"); }
else if (l2 > l1) {console.log("Yo, navigator got the longest name, it has " +l2+ " characters"); }
else { console.log("wow, you both got equally long names, " +l1+ " characters!!");
 }

// Loops

var HACKER1 = hacker1.toUpperCase(); 

var INLINE1 = "";

for (var x=0; x<l1; x++) {
    INLINE1 = INLINE1 +HACKER1[x] +" ";
}
console.log(INLINE1);

var REVERSE2 ="";
for (var x=l2-1; x>=0; x--) {
    REVERSE2 = REVERSE2 +hacker2[x];
}
console.log(REVERSE2);


if (hacker1 < hacker2) {console.log("The driver's name goes first");}
else if (hacker1 > hacker2) {console.log("Yo, the navigator goes first definitely");}
else { console.log("What?! You both got the same name?");}


// Lorem ipsum generator
