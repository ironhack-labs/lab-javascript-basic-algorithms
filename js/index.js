// 0: Extra input
const name1 = "Dua Lipa";
const name2 = "Zoolander";

let opt_input;
let invalid_opt = true;
do{
  opt_input = parseInt(prompt("Would you rather [1] inputing your name or [2] using the defaults?"));
  invalid_opt = !(opt_input==1||opt_input==2);
  if(invalid_opt) alert('You have to choose one of the two valid options.');
}while(invalid_opt)

// Iteration 1: Names and input
let hacker1;
let hacker2;

if(opt_input==1){
  hacker1 = prompt("Who is your driver?");
  hacker2 = prompt("Who is the navigator?");
  }else{
    hacker1 = name1;
    hacker2 = name2;
  }

console.log("The driver's name is ",hacker1);
console.log("The navigator's name is ",hacker2);

// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){
  console.log("The driver has the longest name, it has ",hacker1.length,"characters.")

}else if(hacker1.length==hacker2.length){
  console.log("Wow, you both have equally long names,",hacker2.length,"characters!")

} else {
  console.log("It seems that the navigator has the longest name, it has ",hacker2.length,"characters.")

}


// Iteration 3: Loops
// // printing
let aux_hacker1 = [];
for(let char of hacker1){
  console.log(char.toUpperCase());
  aux_hacker1.push(char.toUpperCase());
}
console.log(aux_hacker1.join(" "));

let aux_hacker2 = [];
for(let i = hacker2.length-1; i>=0; i--){
  console.log(hacker2[i]);
  aux_hacker2.push(hacker2[i]);
}
console.log(aux_hacker2.join(""));

// // comparing  
if(hacker1 == hacker2){
  console.log("WHAAAAAAT??!! WHAT TYPE OF SOURCERY IS THIS?! YOU TWO HAVE THE SAME NAME???");
}else{
  if(hacker1<hacker2){
    console.log("The driver's name goes first,", hacker1 ,"is a player.",);
  }else{
    console.log("Yo, the navigator goes first definitely.");
  }
}


// Its Bonus Time!
// // bonus 1:
// // bonus 2:
