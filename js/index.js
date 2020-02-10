let hacker1 = "Peter";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Bob";
let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;
if (hacker1Length > hacker2Length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1Length < hacker2Length)
{
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else
{
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
let hacker1CapitalisationSpace = hacker1.toUpperCase().split('').join(' ');
console.log(hacker1CapitalisationSpace);
let reversed = hacker2.split('').reverse().join('');
console.log(reversed);
console.log(hacker1.localeCompare(hacker2));
if (hacker1.localeCompare(hacker2) === 0)
{
  console.log("The driver's name goes first");
}
else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definitely.")
}
else {
  console.log("What?! You both have the same name?");
}
