// Names and Input


//Conditionals


// Lorem ipsum generator

var hacker1 = "francois";
console.log("The driver's name is " + hacker1);
var hacker2 = "salvatore";
console.log("The navigator's name is " + hacker2);

var a = hacker1.length;
var b = hacker2.length;
if (a>b) {
  console.log("The Driver has the longest name, it has " + a + " characters.")
} else if (a<b) {
  console.log("Yo, navigator got the longest name, it has " + b + " characters.")
} else {
  console.log("Wow, you both got equally long names, " + a + " characters!!")
}

var i=0;
var line= "";
while (i<8){
  var c = (hacker1[i].toUpperCase());
  line = line + c + " ";
  i++;
}
console.log(line);

var reverse = "";
i=8;
while (i>=0){
  var d = (hacker2[i]);
  reverse = reverse + d;
  i=i-1;
}
console.log(reverse)


if (hacker1 < hacker2) {
  console.log("The driver's name goes first");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?")
}

var pal = prompt("Enter a string");
var long = pal.length;
var rightWay = "";
var leftWay = "";
var q = "";

while (long >= 0) {
  var t = pal[long];
  leftWay = leftWay + t;
  long = long - 1;
}
console.log(leftWay);
