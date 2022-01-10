// Iteration 1: Names and Input
// 
// Task 1.1/1.3
hacker1 = "Dino Brewster"
hacker2 = "Tobey Marshall"

// Task 1.2/1.4
console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
// Task 2.1
if (hacker1.length > hacker2.length)
{
  console.log("The driver has the longest name, it has " + hacker1.length +" characters.");
}

if (hacker1.length < hacker2.length)
{
  console.log("It seems that the navigator has the longest name, it has  " + hacker2.length +" characters.");
}

if (hacker1.length == hacker2.length)
{
  console.log("Wow, you both have equally long names, " + hacker1.length +" characters!");
}

// Iteration 3: Loops
// Task 3.1
hacker1.split('').forEach(function(item){

  process.stdout.write(item.toUpperCase() + " ");
});
console.log("");

// Task 3.2
let reverseString= "";
hacker2.split('').forEach(function(item){
  reverseString = item + reverseString;
});

console.log(reverseString);

// Task 3.3

if (hacker1.localeCompare(hacker2) < 0)
{
  console.log("The driver's name goes first.");
}

if (hacker1.localeCompare(hacker2) > 0)
{
  console.log("Yo, the navigator goes first definitely.");
}

if (hacker1.localeCompare(hacker2) == 0)
{
  console.log("What?! You both have the same name?");
}
