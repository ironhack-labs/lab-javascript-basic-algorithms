let hacker1 = "Carlota"
console.log (`The drivers name is ${hacker1}`)

let hacker2 = "André"
console.log (`The navigator name is ${hacker2}`)

if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else { 
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

let separatedChar = hacker1.split("").join(" ");
console.log(separatedChar);
let reversedChar = hacker2.split("").reverse().join("");
console.log(reversedChar);
if (hacker1.localeCompare(hacker2)) {
  console.log("The driver's name goes first.");
} else if (hacker2.localeCompare(hacker1)) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}



