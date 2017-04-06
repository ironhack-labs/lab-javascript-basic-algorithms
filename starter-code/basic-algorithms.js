console.log("I'm ready");

//   Variables

hacker1 = "James";

console.log("The driver's name is " + hacker1);

hacker2 = prompt("What's the navigator name?");

console.log("The navigator's name is " + hacker2);


//   Conditionals


if (hacker1.length > hacker2.length){
    console.log("The Driver has the longest name, it has "+hacker1.length +" characters");
}else{
  if(hacker2.length === hacker1.length){
      console.log("wow, you both got equally long names, "+ hacker1.length +" characters!!");
  }else{
     console.log("The Navigator has the longest name, it has "+hacker2.length +" characters");
  }
}



//   Loops

function splitAndUpper(str){
  var name = "";
  for(i=0; i< str.length; i++){
    name += str[i] ;
    name += " "
  }

  console.log(name.toUpperCase());
}

splitAndUpper("hacker1");
