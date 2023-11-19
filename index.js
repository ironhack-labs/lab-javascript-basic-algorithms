//Iteration 1: Name and Input

const hacker1 = "Huseyin";
console.log(`The driver's name is, ${hacker1}`)

const hacker2 = "Mina";
console.log(`The navigator's name is, ${hacker2}`);



//Iteration 2: Conditionals

//daniel was here
if (hacker1.length > hacker2.length){
console.log("The driver has the longest name, it has" + hacker1.length + "characters.");
}

if (hacker1.length < hacker2.length){
  console.log("It seems that the navigator has the longest name, it has " + hacker2.length + "characters.");
  }
  if (hacker1.length === hacker2.length){
    console.log("Wow, you both have equally long names, " + ("") + hacker1.length + " characters!");

  }
  


//Iteration 3: Loops

//3.1

const hacker1Characters = 'Huseyin'

const splitSpace1 = hacker1Characters.toUpperCase().split("")
console.log(splitSpace1);


//3.2
const hacker2Characters = 'Mina'

const splitSpace2 = hacker2Characters.toUpperCase().split(""). reverse()
console.log(splitSpace2);

//3.3

const lexicographicallyOrder = [ "Mina", "Huseyin"];

lexicographicallyOrder.sort();
console.log(lexicographicallyOrder);