console.log("I'm Ready!");

var hacker1 = "Claudia"
console.log ("The drivers name is " + hacker1);

var hacker2 = "Eleyni"
console.log ("The navigators name is " + hacker2);

if (hacker1.length > hacker2.length) {
  console.log ("The driver has the longest name, it has " + hacker1.length  + " characters")

} else if (hacker2.length > hacker1.length) {
  console.log ("Yo, navigator got the longest name, it has " + hacker2.length + " characters")
} else if (hacker1.length = hacker2.length) {
  console.log ("wow, you both got equally long names " + hacker2.length + " characters!")
}

var driver = " "
for (var i = 0; i < hacker1.length; i++) {
  driver += hacker1.toUpperCase()[i] + " ";
}
 console.log(driver)

function reverse(str) {
 return str.split('').reverse().join('');
  
}
reverse(hacker2);


var names = [hacker1, hacker2];
names.sort();
console.log(names);


if (names.indexOf(hacker1)===0){
  console.log("The drivers name goes first")
} else if (names.indexOf(hacker2)===0){
  console.log("Yo, tha navigator goes first definitely");
} else {
  console.log("what?! you both got the same name?");
}
