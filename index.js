// Iteration 1: Names and Input

const hacker1="Frieda";
console.log(`The driver's name is ${hacker1}`);
const hacker2="Federico";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if(hacker1.length > hacker2.length)
{console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length)
{console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else if (hacker1.length = hacker2.length)
{console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
else {console.log(`Incorrect Input`)}



// Iteration 3: Loops
let reformat = "";
for(i=0; i < hacker1.length; i++)
    { reformat+=hacker1[i].toUpperCase()+' ';
  //let reformat+=driverLetter;
     // console.log(driverLetter)
     
    }
     console.log(reformat);

     let reformatBackwards = "";

for(i=hacker2.length-1; i >= 0; i--)
  { reformatBackwards+=hacker2[i]; 
  }
   console.log(reformatBackwards);


   let hackerArray = [hacker1, hacker2]
hackerArray.sort();
let firstNameInList = hackerArray[0];


if (hacker1==hacker2)
  {console.log(`What?! You both have the same name?`)}
else if(firstNameInList==hacker1)
  {console.log(`The driver's name goes first.`)}
  else if(firstNameInList==hacker2)
{console.log(`Yo, the navigator goes first, definitely.`)} 
else  {console.log(`Incorrect input`)}