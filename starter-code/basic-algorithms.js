var hacker1 = "Alexander";
var hacker2 = window.prompt("Name for driver2", "Bill");
var sameLength = false;

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

if(hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
}
else if(hacker2.length > hacker1.length){
  console.log("Yo, navigator got the longest name, it has "+ hacker2.length +" characters");
  
} 
else {
  sameLength = true;
  console.log("wow, you both got equally long names, "+ hacker1.length +" characters!!");
}
var spaced = "";

for(var i = 0; i< hacker1.length ; i++){
  spaced += hacker1[i].toUpperCase() + " ";
}
console.log(spaced);

var reversed = "";

for(var i= hacker2.length-1;i >= 0 ; i--){
  reversed += hacker2[i];
}
console.log(reversed);


var shortest;
var same = true;

if(hacker1.length <= hacker2.length){
  shortest = hacker1.length;
}
else{
  shortest = hacker2.length;
}

for(var i = 0; i < shortest ; i++){
  if (hacker1[i].toUpperCase() < hacker2[i].toUpperCase()){
    same = false;
    console.log("The driver's name goes first");
    break;
  }
  else if(hacker2[i].toUpperCase() < hacker1[i].toUpperCase()){
    same = false;
    console.log("Yo, the navigator goes first definitely");
    break;
  }
}

if (same === true){
  console.log("What?! You both got the same name");
}


