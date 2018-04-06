// Names and Input
var hacker1 = "Gustavo";
console.log("The driver name is " + hacker1);

var hacker2 = prompt ("What is the navigator name?");
console.log("The navigator name is " + hacker2);

//Conditionals

var nameSpaces="";
var nameReverse="";

if (hacker1.length > hacker2.length)
  {
    console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
  }
else if (hacker2.length > hacker1.length)
  {
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
  }
else
  {
    console.log("wow, you both got equally long names, XX characters!! " + hacker1.length + );
  }

// Loops
//6
for (i=0; i<hacker1.length; i++)
  {
    nameSpaces+=hacker1[i];
    nameSpaces+=" ";
  }

console.log(nameSpaces);

//7
for (i=hacker2.length -1; i>=0; i--)
  {
    nameReverse+=hacker2[i];
    nameReverse+=" ";
  }

console.log(nameReverse);

//8
var a = hacker1.length;
var b = hacker2.length;
var c = numberOfStrings(a,b);

function numberOfStrings (a,b){
  if (a>b) {
    return b;
  }
  else if (b>a){
    return a;
  }
  else {
    return a;
  }
}

for (i=0; i<c; i++)
  {
    //Check to see if names are the same(not case sensitive) and break out of loop if they are -if not start checking strings of each name one by one
    if (hacker1.toLowerCase() === hacker2.toLowerCase()){
      console.log ("What?! You both got the same name?");
      break;
    }
    //Start comparing strings at index 0 of both names if different - If one condition is satisfied it breaks out of the loop, if not it continues with the next string of the name
    else if (hacker1 != hacker2) {
      if (hacker1[i] < hacker2[i]){
        console.log("The driver's name goes first");
        break;
      }
      else if (hacker1[i] > hacker2[i]){
        console.log("Yo, the navigator goes first definitely");
        break;
      }
      //If loop on last iteration and the other conditions have not been met, then decide based on length of string which names goes first
      else if (c-1===i){
         if (hacker1.length < hacker2.length)
         {
          console.log("The driver's name goes first");
         }
         else
         {
          console.log("Yo, the navigator goes first definitely");          
         }
      }      
    }    
  }


