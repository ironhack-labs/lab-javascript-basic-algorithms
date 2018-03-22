var hacker1 = "Danny"
var hacker2 = prompt("what is your name?")
console.log("The drivers name is " + hacker1)
console.log("The navigator's name is " + hacker2)
if (hacker1.length > hacker2.length){
 console.log("The Driver has the longest name, it has XX characters");
} else if (hacker2.length > hacker1.length) {
  console.log("Yo, navigator got the longest name, it has XX characters");
} else {
  console.log("wow, you both got equally long names, XX characters!!")
}
for(var i=0; i<1; i++){
  console.log(hacker1.split("").join(" ").toUpperCase())
}
for(var i=0; i<1; i++){
  console.log(hacker2.split("").reverse)
}