// Iteration 1: Names and Input
let hacker1 = "John";
let hacker2 = "Jane";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
if(hacker1.length > hacker2.length)
{
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1.length < hacker2.length)
{
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else if (hacker1.length === hacker2.length)
{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
// Iteration 3: Loops
let spaceBetween = hacker1[0];
for(i=1; i < hacker1.length ; i++)
{
    spaceBetween = spaceBetween + " " + hacker1[i];
}
console.log(spaceBetween.toUpperCase());

let backwards = hacker1[0];
for(i=1; i < hacker1.length ; i++)
{
    backwards = hacker1[i] + backwards;
}
console.log(backwards);

let lexicographicOrder = [hacker1, hacker2];
lexicographicOrder.sort();
if(lexicographicOrder[0] === lexicographicOrder[1])
{console.log("What?! You both have the same name?")}
else if(lexicographicOrder[0] === hacker1)
{console.log("The driver's name goes first.")}
else if(lexicographicOrder[0] === hacker2)
{console.log("Yo, the navigator goes first, definitely.")}


//Bonus1
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet euismod neque. Sed tincidunt turpis sit amet neque semper, vel volutpat sapien ullamcorper. Vivamus pharetra blandit nisl. Donec aliquet lorem ipsum, eget bibendum risus convallis in. Pellentesque ac risus eu felis accumsan blandit a eget tellus. Cras lectus mauris, hendrerit nec vulputate sit amet, fermentum eget lacus. Quisque vel luctus leo, ac pulvinar ligula. Suspendisse fringilla, dui et bibendum fermentum, elit velit lacinia ante, sit amet elementum ligula tellus nec magna. Nam eget lacinia ex. Morbi quam nulla, pretium a aliquam ut, tempus ut risus. Duis consectetur est efficitur eros mattis, at tristique nisl tempor.

Nulla facilisi. Nulla facilisi. Pellentesque in lacinia diam. Integer quis ornare neque. Donec gravida risus eu sapien vehicula, eget feugiat nisi imperdiet. Vivamus vitae nibh vitae neque lacinia luctus. Quisque ac blandit lorem. Ut hendrerit dui luctus urna condimentum, nec accumsan arcu blandit. Nulla feugiat ac ligula vitae venenatis. Donec in ex lacinia, hendrerit nulla sit amet, molestie lectus. In vitae libero nisl. Nullam arcu ipsum, blandit vitae lorem accumsan, facilisis varius enim. Sed ornare nunc tellus, et aliquet diam pellentesque egestas. Nunc molestie a leo ac cursus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam feugiat faucibus odio, sit amet faucibus eros iaculis sit amet.

Sed vehicula nibh a quam porttitor rhoncus. Aenean luctus ultricies odio non interdum. Integer et tincidunt dolor. Ut ac diam at enim feugiat sagittis non vitae nisl. Maecenas egestas lobortis felis sit amet fringilla. Praesent nec odio ullamcorper sem faucibus varius non auctor dui. Donec euismod, eros vel luctus malesuada, tellus urna aliquet ipsum, non fringilla ante felis sit amet diam. Nunc convallis quam et commodo pulvinar.`;
console.log(longText.split(' ').length)
console.log(longText.split(' et ').length -1)

//Bonus 2
let phraseToCheck = "stack cats";
let checkLeft = [];
let checkRight = [];
for(i = 0; i <= phraseToCheck.length; i++)
{
if(phraseToCheck[i]==="a"||phraseToCheck[i]==="b"||phraseToCheck[i]==="c"||phraseToCheck[i]==="d"||phraseToCheck[i]==="e"||phraseToCheck[i]==="f"||phraseToCheck[i]==="g"||phraseToCheck[i]==="h"||phraseToCheck[i]==="i"||phraseToCheck[i]==="j"||phraseToCheck[i]==="k"||phraseToCheck[i]==="l"||phraseToCheck[i]==="m"||phraseToCheck[i]==="n"||phraseToCheck[i]==="o"||phraseToCheck[i]==="p"||phraseToCheck[i]==="q"||phraseToCheck[i]==="r"||phraseToCheck[i]==="s"||phraseToCheck[i]==="t"||phraseToCheck[i]==="u"||phraseToCheck[i]==="v"||phraseToCheck[i]==="w"||phraseToCheck[i]==="x"||phraseToCheck[i]==="y"||phraseToCheck[i]==="z"||phraseToCheck[i]==="A"||phraseToCheck[i]==="B"||phraseToCheck[i]==="C"||phraseToCheck[i]==="D"||phraseToCheck[i]==="E"||phraseToCheck[i]==="F"||phraseToCheck[i]==="G"||phraseToCheck[i]==="H"||phraseToCheck[i]==="I"||phraseToCheck[i]==="J"||phraseToCheck[i]==="K"||phraseToCheck[i]==="L"||phraseToCheck[i]==="M"||phraseToCheck[i]==="N"||phraseToCheck[i]==="O"||phraseToCheck[i]==="P"||phraseToCheck[i]==="Q"||phraseToCheck[i]==="R"||phraseToCheck[i]==="S"||phraseToCheck[i]==="T"||phraseToCheck[i]==="U"||phraseToCheck[i]==="V"||phraseToCheck[i]==="W"||phraseToCheck[i]==="X"||phraseToCheck[i]==="Y"||phraseToCheck[i]==="Z")
{
    checkLeft = checkLeft + phraseToCheck[i];
}
if(phraseToCheck[phraseToCheck.length-i]==="a"||phraseToCheck[phraseToCheck.length-i]==="b"||phraseToCheck[phraseToCheck.length-i]==="c"||phraseToCheck[phraseToCheck.length-i]==="d"||phraseToCheck[phraseToCheck.length-i]==="e"||phraseToCheck[phraseToCheck.length-i]==="f"||phraseToCheck[phraseToCheck.length-i]==="g"||phraseToCheck[phraseToCheck.length-i]==="h"||phraseToCheck[phraseToCheck.length-i]==="i"||phraseToCheck[phraseToCheck.length-i]==="j"||phraseToCheck[phraseToCheck.length-i]==="k"||phraseToCheck[phraseToCheck.length-i]==="l"||phraseToCheck[phraseToCheck.length-i]==="m"||phraseToCheck[phraseToCheck.length-i]==="n"||phraseToCheck[phraseToCheck.length-i]==="o"||phraseToCheck[phraseToCheck.length-i]==="p"||phraseToCheck[phraseToCheck.length-i]==="q"||phraseToCheck[phraseToCheck.length-i]==="r"||phraseToCheck[phraseToCheck.length-i]==="s"||phraseToCheck[phraseToCheck.length-i]==="t"||phraseToCheck[phraseToCheck.length-i]==="u"||phraseToCheck[phraseToCheck.length-i]==="v"||phraseToCheck[phraseToCheck.length-i]==="w"||phraseToCheck[phraseToCheck.length-i]==="x"||phraseToCheck[phraseToCheck.length-i]==="y"||phraseToCheck[phraseToCheck.length-i]==="z"||phraseToCheck[phraseToCheck.length-i]==="A"||phraseToCheck[phraseToCheck.length-i]==="B"||phraseToCheck[phraseToCheck.length-i]==="C"||phraseToCheck[phraseToCheck.length-i]==="D"||phraseToCheck[phraseToCheck.length-i]==="E"||phraseToCheck[phraseToCheck.length-i]==="F"||phraseToCheck[phraseToCheck.length-i]==="G"||phraseToCheck[phraseToCheck.length-i]==="H"||phraseToCheck[phraseToCheck.length-i]==="I"||phraseToCheck[phraseToCheck.length-i]==="J"||phraseToCheck[phraseToCheck.length-i]==="K"||phraseToCheck[phraseToCheck.length-i]==="L"||phraseToCheck[phraseToCheck.length-i]==="M"||phraseToCheck[phraseToCheck.length-i]==="N"||phraseToCheck[phraseToCheck.length-i]==="O"||phraseToCheck[phraseToCheck.length-i]==="P"||phraseToCheck[phraseToCheck.length-i]==="Q"||phraseToCheck[phraseToCheck.length-i]==="R"||phraseToCheck[phraseToCheck.length-i]==="S"||phraseToCheck[phraseToCheck.length-i]==="T"||phraseToCheck[phraseToCheck.length-i]==="U"||phraseToCheck[phraseToCheck.length-i]==="V"||phraseToCheck[phraseToCheck.length-i]==="W"||phraseToCheck[phraseToCheck.length-i]==="X"||phraseToCheck[phraseToCheck.length-i]==="Y"||phraseToCheck[phraseToCheck.length-i]==="Z")
{checkRight = checkRight + phraseToCheck[phraseToCheck.length-i];}
}
if(checkLeft.toLowerCase() === checkRight.toLowerCase())
{console.log("The phrase is a Palindrome")}
else
{console.log('Not a Palindrome')}
