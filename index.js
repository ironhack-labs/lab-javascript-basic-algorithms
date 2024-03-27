// Iteration 1: Names and Input
let hacker1 = "Ecem";
let hacker2 = "Noelia";

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)  

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if ((hacker1.length === hacker2.length)) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
        }       
    else {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)        
    }


// Iteration 3: Loops
let upHacker1 = hacker1.toUpperCase();
let spaceHacker1 = "";

// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
for (let i=0; i<upHacker1.length; i++){
  
    if (i!==upHacker1.length-1){
        spaceHacker1 += upHacker1[i] + " "
    } else {
        spaceHacker1 += upHacker1[i]
    }
    
}
console.log(spaceHacker1);

// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
let printHacker2 ="";

for (let j=hacker2.length-1; j >= 0; j--){
 printHacker2 += hacker2[j]
}

console.log(printHacker2);

//3.3 Depending on the lexicographic order of the strings, print:
let sortedName = [hacker1, hacker2].sort();

if (hacker1 == sortedName[0]){
  console.log("The driver's name goes first")
}  else if (hacker2 == sortedName[0]){
  console.log("Yo, the navigator goes first, definitely")
} else {
  console.log("What?! You both have the same name?")
}

