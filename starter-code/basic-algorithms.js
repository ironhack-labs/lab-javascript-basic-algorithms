var hacker1 = "Alma";
console.log(hacker1);
 
var hacker2 = prompt('How is the navigato\'s name?');
console.log(hacker2);


if (hacker1.length > hacker2.length) {
  console.log ('The Driver has the longest name, it has ' + hacker1.length + ' characters'); }
    else if (hacker2.length > hacker1.length) {
      console.log ('Yo, navigator got the longest name, it has ' + hacker2.length + ' characters'); }

/*Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"*/
var upperCaseName = "";
for (i = 0; i < hacker1.length; i++) {
   upperCaseName += hacker1[i].toUpperCase() + " ";
}
console.log(upperCaseName);

/*Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"*/

var reversedName = "";
for (i = hacker2.length; i > 0;  i--){
  reversedName += hacker2[i-1];
}
console.log(reversedName);

/*lexicographic order of the strings*/
if (hacker1 < hacker2){
  console.log("The driver's name goes first")
} else if (hacker2 < hacker1) {
  console.log("Yo, the navigator goes first definitely")
} else {
  console.log("What?! You both got the same name?");
}
