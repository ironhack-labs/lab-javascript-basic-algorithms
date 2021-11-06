// Iteration 1: Names and Input

let hacker1 = "Corentin";
console.log("The driver's name is " + hacker1);
let hacker2 = "Ana";
console.log("The navigator's name is " + hacker2);
let n1 = hacker1.length;
let n2 = hacker2.length;

// Iteration 2: Conditionals

if (n1 > n2)
    console.log("The driver has the longest name, it has " + n1 + " characters")
else if (n1 < n2)
    console.log("It seems that the navigator has the longest name, it has " + n2 + " characters")
else
 console.log("Wow, you both have equally long names, " + (n1 + n2) +  " characters!")

// Iteration 3: Loops

 let newHacker1 = hacker1.split("");
  let result = "";

for (i = 0; i < hacker1.length; i++){
   // newHacker1 = newHacker1.slice(i);
    result = result + hacker1 [i].toUpperCase + (" ");
    //console.log(`hacker1[${i}] -> `,hacker1[i]);
     //console.log("i-->",i);
    }
    console.log(result);

    var emptyName = '';

    for(let i = result.length; i > 1;i--){
        emptyName += result.slice(i-2,1)
        i--
    }
    console.log(emptyName);