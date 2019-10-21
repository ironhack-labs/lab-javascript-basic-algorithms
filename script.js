let hacker1 = "Juan";

console.log("The driver's name is " + hacker1);

let hacker2 = "Snow";

console.log("The driver's name is " + hacker2);

if(hacker1.length > hacker2.length)
console.log("Driver has the longest name, it has " + hacker1.length + " characters");
else if(hacker1.length < hacker2.length)
console.log("Navigator has the longest name, it has " + hacker2.length + " characters");
else
console.log("The names are the same length, they both have " + hacker2.length + " characters");

let arr = hacker1.toUpperCase().join(" ");
//let arr2 = arr.join(", ");

console.log(arr[0]);

console.log(arr);