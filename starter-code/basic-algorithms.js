// Names and Input
var hacker1 = "Uriel";
var hacker2= window.prompt("¿Cual es tu nombre?");

console.log("The drive is " + hacker1);
console.log("The navigator's name is " + hacker2);

//Conditionals

if(hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.length +" characters");
}else if(hacker1.length < hacker2.length){
console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
}else if(hacker1.length === hacker2.length){
console.log("wow, you both got equally long names, "+ hacker1.length +" characters!!")
}

for(i=0; i< hacker1.length; i++){
console.log(hacker1[i].toUpperCase() + " ");
}


for(i=0; i< hacker2.length; i++){
console.log(hacker2[i]);
}

// Lorem ipsum generator





