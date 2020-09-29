//PUNTO1//
let hacker1 = "Marta";
console.log("The driver's name is " + hacker1);
let hacker2 = "Jose"
console.log("The navigator's name is "+hacker2);

//PUNTO 2//
if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " +  hacker1.length + " characters")
} else if (hacker1.length < hacker2.length) {
  console.log("It seems that the navigator has the longest name, it has " +  hacker2.length + " characters")
} else if (hacker1.length = hacker2.length) {
  console.log ( `Wow, you both have equially long names, thay have ${hacker1.length*2} characters`)
}

//PUNTO 3.1//
let upperCase= hacker1.toUpperCase().split('');
console.log(upperCase)

//PUNTO 3.2//
let reverso=hacker2.split("").reverse().join("");
console.log(reverso)

//PUNTO 3.3//
if(hacker1.localeCompare(hacker2) == -1 ){
  console.log(hacker1 + " goes first")
}else if
  (hacker2.localeCompare(hacker1) == -1){
  console.log(" Yo, "+ hacker2 + " goes first defitely")
}else{
  console.log("What!? you both have the same name?")
  }
