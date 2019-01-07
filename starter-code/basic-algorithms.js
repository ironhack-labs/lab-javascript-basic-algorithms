// Names and Input
var hacker1 = "Kevin";
console.log("The driver's name is " + hacker1);
var hacker2 = "Estelle";
console.log("The navigator's name is " + hacker2);

//Conditionals
if ( hacker1.length > hacker2.length ){
    console.log("The Driver has the longest name, it has " + hacker1.length + "characters");
  } 
  else if (hacker2.length > hacker1.length ){
   console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
  }
  else {
  console.log("wow, you both got equally long names, " + hacker2.length + "characters!!");
  };
  
// Lorem ipsum generator
var UpperCase = "";
for (i=0 ; i < hacker1.length ; i++){
  UpperCase += hacker1[i] + " ";
}
console.log(UpperCase.toUpperCase());


var ReverseCase = "";
for (i=0 ; i < hacker2.length ; i++){
  ReverseCase += hacker2[i] + " ";
}


console.log(ReverseCase);