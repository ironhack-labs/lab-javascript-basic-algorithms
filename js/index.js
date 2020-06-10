
//Iteration 1: Names and Input

var hacker1 = "John"; 
console.log(`"The driver's name is ${hacker1}""`);
var hacker2 = "Julie";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
 
//Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
var capName ="";
for (let i=0; i< hacker1.length;i++){
  capName += hacker1[i].toUpperCase() + " ";
};
console.log(capName);

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
var reverse ="";
for (let i= hacker2.length-1; i >=0;i--){
  reverse += hacker2[i];
};
console.log(reverse);

//3.3 Depending on the lexicographic order of the strings
var compare = hacker1.localeCompare(hacker2);
console.log(compare);
if (compare > 0) {
  console.log("The driver's name goes first.");
} else if (compare < 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//bonus 1
var paragraph1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim vulputate enim, id facilisis nulla. Praesent euismod faucibus mauris non mollis. Aenean placerat viverra nunc a interdum. Sed euismod sagittis neque, ultrices scelerisque massa efficitur vel. Maecenas iaculis ut arcu non eleifend. Nullam sodales maximus est sed sodales. Nulla tempus sed nunc in dictum. Morbi quam felis, viverra a auctor id, venenatis nec sem. Aliquam vel elit lacus. Donec cursus, lorem nec dapibus tincidunt, ligula urna laoreet enim, eu mollis metus nulla non ex. Aliquam a urna velit. Etiam semper dapibus neque, sed varius dui ultricies ac.";

var paragraph2 = "Praesent et tristique ante, quis gravida sem. Aenean vitae tortor sed nisl sodales accumsan. Ut nisl diam, gravida nec mollis non, congue rhoncus felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In bibendum nec nisi nec congue. Fusce sodales imperdiet augue, et vulputate risus molestie vel. Vivamus ut ante euismod, eleifend augue a, mollis nibh. Nam ultricies dolor at consectetur dignissim. Nullam sit amet ultrices sapien. Suspendisse potenti. Aliquam sed enim scelerisque, lobortis lectus eget, rutrum libero.";

var paragraph3 = "Duis tempor finibus efficitur. Morbi scelerisque non leo quis volutpat. Sed facilisis et purus ac dignissim. In condimentum feugiat diam. Quisque egestas, tortor nec venenatis fermentum, dolor nulla sagittis sem, sit amet iaculis turpis augue nec mi. Pellentesque facilisis ac diam ac egestas. Curabitur tincidunt, orci ac fringilla pharetra, ligula augue dictum lorem, in elementum elit leo nec leo. Ut volutpat a mi id scelerisque. Vestibulum nulla eros, dignissim sit amet molestie eget, aliquam at tellus.";

var count = 0;
words = paragraph1.split(" "); 
for (i=0 ; i < words.length ; i++){
  if (words[i] != "")
  count += 1; 
}

