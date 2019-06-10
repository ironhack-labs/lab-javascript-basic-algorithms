// Names and Input
let hacker1="Taryn";
console.log("the dirver's name is "+hacker1);
let hacker2="Anabel";
console.log("the navigator's name is "+hacker2);

//Conditionals
if(hacker1.length > hacker2.length){
    console.log("The Driver has the longest name, it has "+hacker1.length+ " characters");
  }else if(hacker1.length < hacker2.length) {
    console.log("Yo, navigator got the longest name, it has "+hacker2.length+ " characters");
  }else{
    console.log("Wow, you both got equally long names,"+hacker1.length + "charcters!!");
  }

let upDriver = "";
for(let i=0;i<hacker1.length;i++){
  upDriver+=hacker1[i].toUpperCase();
  upDriver+=" ";
} 
console.log(upDriver);

let revNavigator="";
for(let i=hacker2.length-1;i>=0;i--){
  revNavigator+=hacker2[i];
}
console.log(revNavigator);

if(hacker1 < hacker2){
  console.log("The driver's name goes first");
}else if(hacker1 > hacker2){
  console.log("Yo, the navigator goes first definitely")
}else {
  console.log("What?! You both got the same name?");
}

let palindromeTest = "Amor, Roma";
let newarr = palindromeTest.split("").reverse().join('');
console.log(newarr.toLowerCase());
console.log(palindromeTest.toLowerCase());
if(newarr.toLowerCase()===palindromeTest.toLowerCase()){
  console.log("cool");
}

// Lorem ipsum generator
//Name:Taryn,Anabel