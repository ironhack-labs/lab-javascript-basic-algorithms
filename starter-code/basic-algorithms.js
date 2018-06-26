// Names and Input
console.log("I'm Ready!");

var hacker1= "Andrea";
console.log("The driver's name is "+(hacker1));

var hacker2 = prompt("What's the navegator's name?");
console.log("The navigator's name is "+(hacker2));


//Conditionals
if (hacker1.length===hacker2.length){console.log("wow, you both got equally long names, "+(hacker1.length)+" characters!!");}
else if(hacker1.length>=hacker2.length){
  console.log("The Driver has the longest name, it has "+(hacker1.length)+" characters");
  }
  else{
    console.log("Yo, navigator got the longest name, it has "+(hacker2.length)+" characters");
  }

// Lorem ipsum generator
for(var i=0; i<=hacker1.length; i++){
  console.log(hacker1 [i]);}
