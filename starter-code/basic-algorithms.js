var hacker1;
hacker1 = "claudia";
console.log("the driver's name is" + " " + hacker1 );
var hacker2;
hacker2 = "summer";
console.log("the navigator's name is" + " " + hacker2);
hacker1.length = 7;
hacker2.length = 6;
if (hacker1< hacker2) {
  console.log("The driver's name is longer")
}
else if (hacker2 > hacker1) {
  console.log("The navigaor has the longest name")
}
else if (hacker1 === hacker2) {
  console.log("both names are long");
}

console.log(hacker1.toUpperCase().split('').join(' '));
var array;
function reverseString(str) {
 array = str.split("");
 array.reverse();
 str = array.join('');
 return str;
}

reverseString("Summer");
if (hacker1 > hacker2) {
  console.log("The driver's name goes first")
}
else if (hacker1 < hacker2){
  console.log("Yo, the navigator goes first definitely")
}else{
  console.log("What?! You both have the same name")
}




