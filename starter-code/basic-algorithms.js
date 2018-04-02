var displayString = ""
var backwardString = ""

var hacker1 = "Randy"
console.log("The driver's name is " + hacker1);

var hacker2 = prompt("What is your name?");
console.log("The navigator's name is " + hacker2)

if (hacker1.length > hacker2.length){
    console.log("the driver has the longest name, it has " + hacker1.length + " characters")
}else if(hacker2.length > hacker1.length ){
    console.log("the navigator has the longest name, it has " + hacker2.length +" characters")
}else{
    console.log("Wow, you both got equally long name, " + hacker1.length + " characters!!")
}

for (x = 0; x < hacker1.length; x++){
    displayString = displayString + hacker1[x].toUpperCase() 
    + " ";

}
console.log(displayString);

for (x = hacker2.length -1 ;x >= 0;x--){
    backwardString = backwardString + hacker2[x] ;

}

console.log(backwardString)

if (hacker1.toUpperCase() < hacker2.toUpperCase()){
  console.log("The driver goes first")
}else if(hacker1.toUpperCase() > hacker2.toUpperCase()){
  console.log("Yo, the navigator goes first definetly")
}else{
  console.log("What??! You both got the same name?")
}



  
