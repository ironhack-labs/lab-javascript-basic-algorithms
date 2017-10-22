var hacker1 = prompt("Who is the name of driver`s:", "") ;
console.log("The driver's name is "+ hacker1);
var hacker2 = prompt("Who is the name of navigator`s", "") ;
console.log("The navigator's name is " + hacker2);
i = hacker1.length;
j = hacker2.length;


if ( hacker1.length < hacker2.length  ){
  console.log("Yo, navigator got the longest name, it has "+ (j) +" characters");
} else if (hacker1.length === hacker2.length){
  console.log("wow, you both got equally long names, "+ (i) +" characters!!");
    
} else{
  console.log("The Driver has the longest name, it has "+ (i) +" characters");
}
console.log( hacker1.toUpperCase());


console.log(hacker1.charAt());
for (i = 0; i <= hacker1.length; i++){
  console.log(hacker1.charAt(i-1));
}