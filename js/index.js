//Iteration 1: Names and Input
let hacker1="Jonathan"
console.log("The driver's name is:",hacker1)
let hacker2="Sophieeee"
console.log("The navigator's name is:",hacker2)

if (hacker1.length > hacker2.length)
{
  console.log("The driver has the longest name, it has",hacker1.length," characters")
}
else if (hacker2.length > hacker1.length)
  {
    console.log("It seems that the navigator has the longest name, it has",hacker2.length,"characters.")
  }
else
{
  console.log("Wow, you both have equally long names, ",hacker1.length,"characters!")
}

//Iteration 2: Conditionals

let up1=hacker1.toUpperCase()
let up2=hacker2.toUpperCase()

up1=up1.split('')
up2=up2.split('')

console.log(up1)
console.log(up2)

let temp=[];
let temp2=[]
let r=0;

for(let x=hacker1.length;x>= 0; x--)
{
 temp[r]=hacker1[x]
 temp2[r]=hacker2[x]
 r=r+1;
}

r=0;
for(let x=hacker2.length;x>= 0; x--)
{
 temp2[r]=hacker2[x]
 r=r+1;
}

temp=temp.join('')
temp2=temp2.join('')

console.log(temp,temp2)

//Iteration 3: Loops

if(hacker1>hacker2)
{
  console.log("Yo, the navigator goes first definitely.")
  
}
else if (hacker2>hacker1)
  {
    console.log("The driver's name goes first.")
  }
else
{
  console.log("What?! You both have the same name?")
}

//Bonus 1

let phraseToCheck="taco cat"
let temp3=[]
phraseToCheck=phraseToCheck.toLowerCase()
r=0;
for(let x=phraseToCheck.length;x>= 0; x--)
{
 temp3[r]=phraseToCheck[x]
 r=r+1;
}

temp3=temp3.join('')
temp3=temp3.replace(/\s/g, '')
phraseToCheck=phraseToCheck.replace(/\s/g, '')

if(temp3===phraseToCheck)
{
  console.log("Palindrome")
}
else
{
  console.log("Not a Palindrome")
}

// Bonus 2

lstr="et et et et Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at finibus mauris. Maecenas mollis lacus  et et eget quam volutpat, at euismod neque lacinia. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt.Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.."

lstr=lstr.split("")
let e="e";
let t="t";
let cout=0;

for(let y=0;y<lstr.length;y++)
{
  if (lstr[y]==e && lstr[y+1]==t)
  {
    cout++
  }
}

console.log(cout)