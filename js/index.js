// Iteration 1: Names and Input

var hacker1 = "Dani";
var hacker2 = "Berto";
console.log("The driver's name is",hacker1);
console.log("The navigator's name is",hacker2);

// Iteration 2: Conditionals

var a = hacker1.length;
var b = hacker2.length;

/*console.log(a);
console.log(b);*/

if(a>b){
    console.log("The driver has the longest name, it has",a,"characters.");
}else if(a<b){
    console.log("It seems that the navigator has the longest name, it has",b,"characters.");
}else{
    console.log("Wow, you both have equally long names,",b,"characters!");
}

// Iteration 3: Loops