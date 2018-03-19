//1.Create a driver variable
var hacker1 = "Lexy"; 

//2. Print driver
console.log("The driver name is " + hacker1); 

//3. Create navigator's name
var hacker2 = window.prompt("What is your name?");

//4. Print navigator
console.log("The navigator's name is " + hacker2);

//5. If hacker1 or hacker2 has the longest name
if(hacker1.length > hacker2.length){
  console.log("The driver has the longest name, it has " + hacker1.length + " characters");
}
else if(hacker1.length < hacker2.length){
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
}
else {
  console.log("wow, you both got equally long names, " + hacker1.length + " characters");
}

//6.Print driver characters separate by a space and in capitals
var temp = ""; //
for(var i = 0; i < hacker1.length; i++){
  if(i === hacker1.length-1){
     temp += (hacker1[i].toUpperCase());
  }
  else {
    temp += (hacker1[i].toUpperCase()) + " ";
  }
}
console.log(temp);

//7. Print navgator's name in reverse
temp = "";
for(i = hacker2.length-1; i >= 0; i--){
  temp += hacker2[i];
}
console.log(temp);

//8.Determining the lexicographic order
var shortestLength = 0;
if(hacker1.length > hacker2.length)
  shortestLength = hacker1.length;
else
  shortestLength = hacker2.length;

for(var i = 0; i < shortestLength; i++){
  if(hacker1.charCodeAt(i) > hacker2.charCodeAt(i)){
  console.log("The driver's name goes first");
  break;
  }
  else if(hacker1.charCodeAt(i) < hacker2.charCodeAt(i)){
    console.log("Yo, the navigator goes first definitely");
    break;
  } else {
    if(i === shortestLength-1 && hacker1.length === hacker2.length)
      console.log("What?! You both got the same name?");
  }
}




























