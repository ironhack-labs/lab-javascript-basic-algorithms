
var hacker1 = "Lucas";
var hacker2 = "Louis";

console.log("The navigator's name is " + hacker2);


if(hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters!");
}
else if(hacker1.length < hacker2.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters!");
}
else {
  console.log("wow, you both got equally long names, " + hacker1.length + " characters!")
}

var x = "";
for(i=0 ; i<hacker1.length; i++){
  hacker1 = hacker1.toUpperCase();
  x += hacker1[i] + " ";
}
console.log(x);

var y = "";  
for(j=(hacker2.length-1); j>=0; j--){
  y += hacker2[j];
}
console.log(y);
