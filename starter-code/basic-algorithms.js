var hacker1 = prompt ("Whats the drivers name?");
console.log("The driver's name is " + hacker1);

var navigator1 = prompt ("What's the navigator's name?"); 
console.log("The navigator's name is " + navigator1)



if (hacker1.length > navigator1.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (navigator1.length > hacker1.length) {
    console.log("Yo, navigator got the longest name, it has " + navigator1.length + "characters");
} else {
     console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}
