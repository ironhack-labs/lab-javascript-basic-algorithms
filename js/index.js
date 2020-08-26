const hacker1="Philippe";
const hacker2="Maximilien";


console.log(`"The driver's name is ${hacker1} "`);
console.log(`"The navigator's name is ${hacker2}"`);

if (hacker1.length > hacker2.length) {

  console.log(`"The driver has the longest name, it has ${hacker1.length} characters."`)

} else if (hacker1.length < hacker2.length) {

  console.log(`"It seems that the navigator has the longest name, it has ${hacker2.length} characters."`);

} else {
  console.log(`"Wow, you both have equally long names, ${hacker1.length} characters!."`);
}

var newNameDriver="";

for (let i=0; i<hacker1.length; i ++) {
newNameDriver += hacker1[i].toUpperCase() +" ";
}
console.log(newNameDriver);

var newNameNavigator="";

for (let i=hacker2.length-1; i>=0; i--) {
  newNameNavigator += hacker2[i];
}
console.log(newNameNavigator);



console.log(hacker1.localeCompare(hacker2))