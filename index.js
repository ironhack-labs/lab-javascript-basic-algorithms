
let hacker1 = prompt("Enter your name hacker1"); //The driver's name is XXXX
let space = "";
for(let i = hacker1.length -1; i>=0; i--){//reverse name with spaces
    space +=hacker1[i].toUpperCase()+" ";
}
alert(space.trim());


let hacker2 = prompt("Enter your name hacker2"); //The navigator's name is YYYY
let space2 = "";
for(let i = hacker2.length -1; i>=0; i--){//reverse name with spaces
    space2 +=hacker2[i].toUpperCase()+" ";
}
alert(space2.trim());

//Longest name
if(hacker1.length > hacker2.length){
    alert(`Hacker1 has longer name it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length){
        alert(`Hacker2 has longer name it has ${hacker2.length} characters.`);
    }
else{
    alert(`Wow, you both have equally long names, ${hacker1.length} characters!`);
    }


//Alphabeticaly first
if (hacker1<hacker2){
    alert(`The ${hacker1.toUpperCase()} alphabeticaly goes first.`);
}
  else if (hacker1>hacker2){
    alert(`The ${hacker2.toUpperCase()} is alphabeticaly goes first.`);
}
else{
    alert("You have the same name!");
}  
