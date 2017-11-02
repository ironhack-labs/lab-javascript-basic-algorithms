var hacker1 = "Lilia" ;
console.log("The driver's name is" + " " + hacker1)
var hacker2 = prompt("What's your name?")// Names and Input
console.log("The navigator's name is" + " " + hacker2);

if( hacker1.length > hacker2.length) {
  console.log("the Driver has the longest name, it has"+ " " + hacker1.length + "characters")
}
  else if(hacker1.length < hacker2.length) {
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + "characters")
  }
  else {console.log("wow, you both got equally long names, " + hacker.length + "characters!!")};

var capitalized = ""
for(var i = 0; i < hacker1.length; i++) {
 capitalized +=hacker1[i].toUpperCase();
 if(i < hacker1.length -1) {
   capitalized += " ";
 }
 }
 console.log(capitalized);

var reversed = ""
for(var i = hacker2.length -1; i>=0; i--) {
  reversed += hacker2[i];
}
console.log(reversed)


if(hacker1.localeCompare(hacker2) < 0 ) {
  console.log("the driver's name goes first")
}
else if(hacker1.localeCompare(hacker2) > 0){
  console.log("yo the navigator goes frist")
}
else { console.log("you both got the same name")};

 var newString = prompt("escriba aqui")
 
