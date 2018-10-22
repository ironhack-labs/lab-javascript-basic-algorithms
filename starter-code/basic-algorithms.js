let hacker1 = "Ross";
let hacker2 = "Yoli";
let storeHackerOne = hacker1.split('');
 console.log("the driver's name is " + hacker1);
console.log("the navigator's name is " + hacker2);
if(hacker1.length > hacker2.length) {
  console.log("the driver has the longest name, it has " + hacker1.length + " characters");
}
else if(hacker1.length < hacker2.length) {
  console.log("yo, navigatoer has the longest name, it has " + hacker2.length + " characters");
}
else {
  console.log("wow, you both got equally long names, " + hacker1.length + " characters")
}
 let blah = "";
 for(let i = 0; i < hacker1.length; i++) {
 blah = blah + (hacker1[i].toUpperCase() + ' ');
}
console.log(blah)
 let bluh = "";
for(let i = hacker2.length - 1; i >= 0; i--){
  bluh += hacker2[i];
}
console.log(bluh);
 if(hacker1 < hacker2) {
  console.log("the Driver's name goes first");
}
else if(hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely");
}
else{
  console.log("Whhhhaaaat you have the same name");
}// Names and Input


//Conditionals


// Lorem ipsum generator
