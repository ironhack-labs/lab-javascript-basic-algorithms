// Names and Input
console.log("I'm Ready!");
var hacker1 = 'quino';
var hacker2 = 'alberto';
/*console.log("The driver's name is "+hacker1);
message = "Second driver's name: ";
var hacker2;
hacker2 = window.prompt(message, "Please Type Here." );
console.log("The navigator's name is"+ hacker2)
*/

for(var i = 0; i < hacker1.length; i++)
{
process.stdout.write(hacker1[i]+' ');

}

console.log(' ');

for(var i = hacker1.length -1; i >= 0; i--)
{
process.stdout.write(hacker1[i]);
}
//Conditionals
console.log("I'm Ready!");
var hacker1 = 'alberto';
var hacker2 = 'laura';

/*console.log("The driver's name is "+hacker1);
message = "Second driver's name: ";
var hacker2;
hacker2 = window.prompt(message, "Please Type Here." );
console.log("The navigator's name is"+ hacker2)
*/

if(hacker1.length > hacker2.length)
{
  console.log('The Driver has the longest name, it has XX characters');

}else if(hacker1.length < hacker2.length){
 console.log('Yo, navigator got the longest name, it has XX characters');
}else{
 console.log('wow, you both got equally long names, XX characters!!');

}

if(hacker1.localCompare(hacker2) < 0)
{
console.log('The driver\'s name goes first');
}
else if(hacker1.localCompare(hacker2) > 0))
{
console.log('Yo, the navigator goes first definitely');
}
else
{
console.log('What?! You both got the same name?');
}



// Lorem ipsum generator
