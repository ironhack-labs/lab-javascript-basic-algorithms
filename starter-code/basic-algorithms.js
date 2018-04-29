// Names and Input
let hacker1 = "Ricardo";
console.log("The driver's name is " + hacker1);

let hacker2 = window.prompt("Cual es tu nombre hacker?");
console.log("The navigator's name is " + hacker2);

hacher1Size = hacker1.length;
hacher2Size = hacker2.length;

let hacker1SpacesName="";
let hacker2InverseName="";

//Conditionals
if(hacher1Size < hacher2Size)
{
  console.log("The Driver has the longest name, it has " + hacher1Size + " characters");
}
else if(hacher1Size > hacher2Size)
{
  console.log("Yo, navigator got the longest name, it has " + hacher2Size + " characters");
}
else
{
  console.log("wow, you both got equally long names, " + hacher1Size + " characters!!")
}

for(let i = 0; i < hacher1Size; i++)
{
  let temp = hacker1[i] + " ";
  hacker1SpacesName += temp;
}

for(let i = hacher2Size -1; i >= 0; i--)
{
  let temp = hacker2[i];
  hacker2InverseName += temp;
}

console.log(hacker1SpacesName.toUpperCase());
console.log(hacker2InverseName);

// Lorem ipsum generator
if(hacker1 < hacker2)
{
  console.log("The driver's name goes first");
}
else if(hacker1 > hacker2)
{
  console.log("Yo, the navigator goes first definitely");
}
else
{
  console.log("What?! You both got the same name?");
}
