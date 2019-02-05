// Names and Input
let hacker1 = "Jesús";
let hacker2 = "Miguel";
console.log("the driver's name is " + hacker1);
console.log("the navigator's name is " + hacker2);

//Conditionals
if(hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " + hacker1.length + " characters");
}else if (hacker1.length < hacker2.length){
   console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
}else {
  console.log("Wow, you both got equally long names," + hacker1.length + " characters!!");
  }

// Lorem ipsum generator
let string1 = "";
for(let i = 0; i<=hacker1.length-1;i++){
  string1 = string1 +" "+ hacker1[i].toUpperCase();
}
console.log(string1);


let string2 = "";
for(let i = hacker2.length -1 ; i >=0;i--){
  string2 = string2 + hacker2[i];
}console.log(string2);

if(hacker1.localeCompare(hacker2)===-1){
  console.log("The driver's name goes first");
  }else if(hacker1.localeCompare(hacker2)===1){
    console.log("Yo, the navigator goes first definitely");
  } else {
    console.log("What?! You both got the same name?")
  }
