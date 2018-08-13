let hacker1 = "Doug";
let hacker2 = prompt("Who is the driver?")
let driverLetters = "";
let navLetter = "";
console.log("The drivers name is ", hacker1);
console.log("The navigator is ", hacker2);



if(hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters")
} else if(hacker1.length < hacker2.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters")
} else {
  console.log("wow, you both got equally long names, " + hacker1.length + hacker2.length + " characters!!")
}



for(var i = 0; i < hacker1.length; i++) {
 driverLetters+= hacker1.toUpperCase()[i];
 driverLetters+= " ";
}

console.log(driverLetters);

for(var i = hacker2.length -1; i >= 0; i--) {
  navLetter+= hacker2[i];
  
}
console.log(navLetter);



var myObject = [hacker1, hacker2];

for(var i = 0; i < myObject.length; i++) {
  myObject.sort()[i];
}

console.log(myObject);