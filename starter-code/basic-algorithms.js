var hacker1 = "Kat";
console.log("The driver’s name is"  + " "+ hacker1);

var hacker2 = prompt("What is your name?");
console.log("The navigator’s name is " + hacker2);

if (hacker1.length > hacker2.length){
 
 console.log("The driver has the longest name, it has " + hacker1.length);
}
  else if (hacker2.length > hacker1.length) {
   
   console.log("The navigator has the longest name, it has " + hacker2.length);
 }
 
 else {
   
   console.log(" you both have equally long names" +" "+ hacker1.length );
 }
 
 for (var x=0;x <= hacker1.length; x++) {
 console.log(hacker1.charAt(x).toUpperCase(x));
 }
 

 
 function reverseString(hacker1) {
   var splitString = hacker1.split("");
   var reverseArray = splitString.reverse();
   var joinArray = reverseArray.join("");
   return joinArray;
 }
 console.log(reverseString(hacker1));
 
 // var array = [hacker1, hacker2];
 
 // array.sort();
 
 // console.log(array[0]);
 
 if (hacker1 < hacker2 ) {
   
   
  console.log("The driver name goes first");
   
 }
 
 else if (hacker1 > hacker2){
   
   console.log("The navivagator name goes firts");
   
 }
 
 else
 {
   console.log("You’re both have the same name!");
 }


