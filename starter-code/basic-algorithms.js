//Names and Input
//from 1 to 4
var hacker1 = prompt("which is the driver's name?");
var hacker2 = prompt("which is the navigator's name?");

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

var longitud;
var greater;

//Conditionals
//5 Which names is larger
if(hacker1.length>hacker2.length)
{
  longitud=hacker2.length;
  greater = hacker2;
  console.log("The Driver has the longest name, it has "+ hacker1.length +" characters");
}
else if(hacker1.length<hacker2.length)

{
  longitud=hacker1.length;
  greater = hacker1;
  console.log("Yo, navigator got the longest name, it has "+ hacker2.length +" characters");
}
else
{
  greater = "The Same word";
  longitud=hacker2.length;
  console.log("wow, you both got equally long names, "+ hacker1.length +" characters!!");
}

//Loops
//6 Print names capital letters and spaces
var newName = "";

for(var i=0;i<hacker1.length;i++)
{
  newName += hacker1[i].toUpperCase()+" ";
}

console.log(newName);

//7 Print names inverse
var invname="";

for(var i=hacker2.length-1;i>=0;i--)
{
  invname += hacker2[i];

}

console.log(invname);


//8 Compare Names order
for (var i=0;i<longitud;i++)
{
  console.log(hacker1[i].localeCompare(hacker2[i]));

  if(hacker1[i].localeCompare(hacker2[i])<0)
  {
    greater = hacker1;

    break;
  }
  else if (hacker1[i].localeCompare(hacker2[i])>0)
  {
    greater = hacker2;

    break;
  }
}



switch(greater)
{
  case hacker1:
    console.log("The driver's name goes first");
    break;
  case hacker2:
    console.log("Yo, the navigator goes first definitely");
    break;
  default:
    console.log("What?! You both got the same name?");
    break;

}


//Bonus Time
//9-Palindrome
var paraula = prompt("Enter phrase");
var temp ="";

for(var i=0; i<paraula.length;i++)
{
  if(paraula[i]!=',' && paraula[i]!=' ')
  {
    temp += paraula[i].toUpperCase();
  }
}

console.log(temp);

for(var i=0;i<temp.length;i++)
{
  if(temp[i]!=temp[temp.length-1-i]){
    console.log(temp[i]);
    console.log(temp[temp.length-1-i]);
    console.log("Not Palindrome");
    break;
  }

  if(i==temp.length-1)
  {
    console.log("Palindrome");
  }
}
//Conditionals


// Lorem ipsum generator
