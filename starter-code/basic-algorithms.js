// Names and Input


//Conditionals


// Lorem ipsum generator


console.log("I'm Ready!");

var hacker1 = "Heli"
console.log("The driver's name is " + hacker1)

var hacker2 = prompt("what's the navigator's name?")
console.log("The navigator's name is " + hacker2)

if ( hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has" + hacker1.length +  "characters")
} else if ( hacker2.length > hacker1.length) {
  console.log("Yo, navigator got the longest name, it has" + hacker2.length + "characters")
} else {
  console.log("wow, you both got equally long names, " + hacker1.length + "characters!!")
}

for (var i = 0; i < hacker1.length; i++)
 console.log(hacker1[i].toUpperCase() +"")
