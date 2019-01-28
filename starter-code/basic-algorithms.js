var hackerName1 = prompt("Name of the driver, please");
console.log("The drivers name is " + hackerName1);

var hackerName2 = prompt("Name of the navigator, please");
console.log("The navigators name is " + hackerName2);

if(hackerName1.length > hackerName2.length){
  console.log("drivers name is longer");
  }
else if( hackerName1.length < hackerName2.length){
   console.log("navigators name is longer");
}
else  {
console.log("both names are long");
}

console.log(hackerName1.toUpperCase().split("").join(" "));

// function reverseString(str) {
//   return str;
// }
// reverseString(hackerName2);

// console.log(reverseString); 
console.log(hackerName2.split("").reverse().join(""));

var lijst = [hackerName1, hackerName2]
lijst.sort();
console.log(lijst);
if(hackerName1=== hackerName2){
  console.log("What?! You both got the same name")
}
else if(lijst[0]== hackerName2){
  console.log("Yo, the navigator goes first definitely")
}
else if( lijst[0]== hackerName1){
  console.log("The driver's name goes first")
}
