// Names and Input


//Conditionals


// Lorem ipsum generator
var hacker1 = "Tommy";
console.log("The driver's name is " + hacker1);

var hacker2 = "ted" /*prompt("Please type a name")*/
console.log("The navigator's name is " + hacker2);

var nameSpaces = ""

var reverseName =""

if (hacker1.length === hacker2.length) {
    console.log ("wow, you both got equally long names, " + hacker1.length + " characters");
} 
else if (hacker1.length >hacker2.length) {
    console.log ("The Driver has the longest name, it has " + hacker1.length + " characters");
} 
else {
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
}

/*printing the name with spaces and uppercase*/
for (i = 0; i<hacker1.length; i++) 
{ 
    nameSpaces+=hacker1[i];
    nameSpaces+=" ";

}
console.log(nameSpaces.toUpperCase());

/*Printing the name in reverse*/
for (i = hacker2.length-1; i>=0; i--) 
{ 
    reverseName+=hacker2[i];

}

var splitString = hacker2.splitString("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    console.log(joinArray);

console.log(reverseName);

/* Finding Alphabetical Order of Names */
if (hacker1[0] > hacker2[0]) {
    console.log("Yo, the navigator goes first definitely")
}
else if (hacker1[0] < hacker2[0]) {
    console.log("The driver's name goes first")
}
else console.log("What?! You both got the same name?")

/*Palindrome Checker*/

var splitString = hacker2.splitString("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    consolor.log(joinArray);


var palindromeName = prompt ("Please type a name");
var reversePalindrome = ""
for (i=palindromeName.length-1; i>=0;i--) {
    reversePalindrome+=palindromeName[i];
}
console.log(reversePalindrome)

