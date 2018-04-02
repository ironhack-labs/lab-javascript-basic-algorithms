var hacker1 = "Brian";
var hacker2 = "Rawan";


console.log("The driver name is " + hacker1);
console.log("The navigator name is " + hacker2);

if (hacker1.length > hacker2.length){
  console.log("The driver has the longest name, it has "+ hacker1.length);
}
else if(hacker1.length < hacker2.length){
  console.log("Yo navigator got the longest name, it has " + hacker2.length);
}
else {
  console.log("wow, you got equally long names, "+ hacker1.length);
}


var x = "";
for (var i = 0 ; i < hacker1.length ; i++){
    // hacker1[i].split("").join("").toUpperCase());}
      x+= hacker1[i].toUpperCase();
      x+=" "
}
      console.log('"'+ x +'"');


var y = "";   
//https://medium.freecodecamp.org/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb
for (var i = hacker2.length - 1; i >= 0; i--) { 
      y+= hacker2[i];
}
    console.log('"'+ y +'"');


