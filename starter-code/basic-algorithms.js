// Names and Input
var hacker1 = 'josh';
console.log("The driver's name is : " + hacker1);

var hacker2 = prompt("What is the navigator's name? :");
console.log("The navigator's name is : " + hacker2);
//Conditionals
if (hacker1.length > hacker2.length ){

console.log ("Driver has the longest name" +  hacker1.length + " characters");
}else if (hacker2.length > hacker1.length){

  console.log ("Navigator has the longest name " +  hacker2.length + " characters");
}else {
  console.log("Wow you both got equally long names," + hacker1.length +" characters." );

}

//Loops
hacker1 = hacker1.toUpperCase();
var cap = "";
for ( var i = 0; i < hacker1.length; i++){
 cap= cap+" "+ hacker1[i];
}

 console.log(cap);

 rev = "";
 for (var i = hacker2.length -1 ; i >= 0 ; i--){
   rev = rev + hacker2[i];
   console.log(i);
 }
 console.log(rev);


if((hacker1.localeCompare(hacker2)) < 0){
  console.log("The driver's name goes first");
}
else if( (hacker1.localeCompare(hacker2)) > 0){
  console.log(" Yo, the navigator goes first definitely");
}
else{
  console.log(" What?! You both got the same name?");
}


// Lorem ipsum generator
