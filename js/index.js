const hacker1 = "Gabriela";
const hacker2 = "Pedro";


console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
 console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}


let charactersName = hacker1.toUpperCase().split("").join(" ");
console.log(charactersName);

let reverseName = hacker2.split("").reverse().join("");
console.log(reverseName);


if (hacker1.localeCompare(hacker2) === 0){
    console.log("What?! You both have the same name?");
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("The driver's name goes first.");
} else {
    console.log("Yo, the navigator goes first definitely.");
    
}



