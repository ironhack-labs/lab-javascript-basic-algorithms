// Iteration 1: Names and Input

let hacker1 = "John";
let hacker2 = "Alice";


console.log("The driver's name is " + hacker1);


console.log("The navigator's name is " + hacker2);


//- The driver has the longest name, it has XX characters. or
//- It seems that the navigator has the longest name, it has XX characters. or
//- Wow, you both have equally long names, XX characters!.
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
console.log(`The driver has the longest name, it has ${hacker1.length}charactors`)

}else if (hacker2.length > hacker1.length){

console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
  console.log(`Wow, you both have equally long names,${hacker1.length} characters!`)
}

// Iteration 3: Loops

// Iteration 3: Loops
// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
let spacedDriverName = "";
for (let i = 0; i < hacker1.length; i++){

  spacedDriverName += hacker1[i].toUpperCase() + " ";
}
console.log(spacedDriverName);


let reversedNavigatorName = "";
for (let i = hacker2.length - 1; i >= 0; i--){

  reversedNavigatorName += hacker2[i];
}
console.log(reversedNavigatorName);

if (hacker1 < hacker2){
  console.log("The driver's name goes first.");
} else if (hacker2 < hacker1){
console.log("Yo, the navigator goes first, definitely.")

} else{
  console.log("What?! You both have the same name?");
}
