// Names and Input
var hacker1 = "Carlos";

console.log("The driver's name is", hacker1)

var hacker2 = prompt("Como te llamas?");

console.log("The navigator's name is", hacker2)

//Conditionals

if(hacker1.length > hacker2.length){
    console.log("The Driver has the longest name, it has "+ hacker1.length+" characters")
  }else if(hacker1.length < hacker2.length){
    console.log("Yo, navigator got the longest name, it has "+hacker2.length+" characters")
  }else if(hacker1.length == hacker2.length){
    console.log("wow, you both got equally long names, "+hacker1.length+" characters")
  }else{
    console.log("ERROR")
  }

// Lorem ipsum generator

console.log(hacker1.split('').join(' ').toUpperCase());

console.log(hacker2.split("").reverse().join(""))

var arange = [hacker1, hacker2]
arange.sort()
if(arange[0] == hacker1){
  console.log("The driver's name goes first")
}else if(arange[0] == hacker2){
  console.log("Yo, the navigator goes first definitely")
}else if(arange[0] && arange[1] == hacker1){
  console.log("What?! You both got the same name?")
}else{
  console.log("Error")
}