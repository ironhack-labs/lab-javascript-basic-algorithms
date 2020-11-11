let hacker1;
 
hacker1 = "Malakai";
console.log('The driver name is ' + hacker1); 

let hacker2;
 
hacker2 = "Delphine";
console.log('The navigator name is ' + hacker2); 

if (hacker1.length == hacker2.length) {

    console.log (`Wow you both equally long names with ${hacker1.length}`); }
    
  if (hacker1.length > hacker2.length){
     console.log(`It seem that the driver has the longest name, it has ${hacker1.length} characters`);}

    if (hacker1.length < hacker2.length){
     console.log(`It seem that the navigator has the longest name, it has ${hacker2.length} characters`);}

console.log(`m a l a k a i`.toUpperCase());

function reverseString(delphine) {
    return delphine;
}
reverseString("delphine");

function reverseString(str) {

  var splitString = "delphine".split(""); 
   ["d", "e", "l", "p", "h", "i", "n", "e"]

   var reverseArray = splitString.reverse();

    var reverseArray = ["d", "e", "l", "p", "h", "i", "n", "e"].reverse(); 

    ["e", "n", "i", "h", "p", "l", "e", "d"]
    var joinArray = reverseArray.join(""); 
    var joinArray = ["e", "n", "i", "h", "p", "l", "e", "d"].join("");

    return joinArray;  
    }

    /* 
    Ci-dessous, notre tentative pour la 3.3,nous ne sommes pas parvenus à faire  fonctionner correctement le if, seul "What, you both have the same name?" ressortait.
    
    
    if (hacker1.sort == hacker2.sort) {

    console.log (`What, you both have the same name?!`); }
    
    if (hacker1.sort > hacker2.sort){
     console.log(`Driver's name goes first`);}

    if (hacker1.sort < hacker2.sort){
     console.log(`Yo, navigator's name goes first`);}