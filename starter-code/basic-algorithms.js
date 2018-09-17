// Names and Input
var hacker1 = 'Ana';
console.log("The driver's name ist: "+hacker1);
var hacker2;
hacker2 = window.prompt("Imput the navigator's friend: ");
console.log("The navigator's name ist: "+hacker2);

//Conditionals
var longName;
if (hacker1.length > hacker2.length){
  console.log("The Driver has the longer name, it has "+hacker1.length + " characters");

}else if (hacker1.length < hacker2.length){
  console.log("yo, navigator got the longer name, it has "+hacker2.length + " characters");
  
}else {
  console.log("wow, you both got equally long names, " +hacker1.length + " characters");
}

//LOOPS
var upperDriver = hacker1.toUpperCase();
var newDriver = "";
//console.log(upperDriver);
for (var i=0; i<hacker1.length; i++){
  if (i === hacker1.length-1){
    newDriver += upperDriver[i];  
  }else{
    newDriver += upperDriver[i]+ " ";
  }
}
console.log(newDriver);

//var upperNav = hacker2.toUpperCase();
var newNav = "";
//console.log(upperDriver);
for (var i=hacker2.length-1; i>=0; i--){
 newNav += hacker2[i];
}
console.log(newNav);

if (hacker1 < hacker2){
  console.log("driver");
}else {console.log("navigator")}

// Lorem ipsum generator
