// Iteration 1: Names and Input

const hacker1 = "Laura";

const hacker2 = "Laura";

console.log(`The driver's name is ${hacker1}`);

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let smallNameLength = 0; 
if(hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
    smallNameLength = hacker2.length;
}
else if (hacker1.length<hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}  characters.`);
    smallNameLength = hacker1.length;
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
    smallNameLength = hacker1.length;
}

// Iteration 3: Loops
// 3.1
let newName = "";

for (let i = 0; i<hacker1.length-1; i++) {
   
    newName = newName + hacker1[i].toUpperCase() + " ";
   
}

newName = newName + hacker1[hacker1.length-1].toUpperCase();
console.log(newName);


//3. 2
let newNavigator = "";

for(let i= hacker2.length-1; i >= 0 ; i--){
    newNavigator = newNavigator+hacker2[i];
}
console.log(newNavigator);

//3.3

let check = 0;

for(let i = 0 ; i < smallNameLength;i++)
{
    if(hacker1[i]<hacker2[i])
    {
        check = 1;
        break;
    }

    else if (hacker1[i]>hacker2[i])
    {
        check = 2;
        break;
    }
    else {
        check= 3;
    }
}

switch(check){
    case  1 :
    console.log("The driver's name goes first.");
    break;

    case 2 : 
    console.log("Yo, the navigator goes first, definitely.");
    break;

    default :
     console.log("What?! You both have the same name?");

}



