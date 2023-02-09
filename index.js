// Iteration 1: Names and Input

const hacker1 = "max";
const hacker2 = "john";

if ( hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has  ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length ){
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters`)

}else{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)

}
let driver=" ";
for(let i=0; i < hacker1.length; i++) {
  driver+= hacker1[i].toUpperCase() + " ";
  
}console.log(driver);

let nav="";
for( let i = hacker2.length-1; i>=0; i--){
  nav+=hacker2[i];
}
console.log(nav);

const nameArr = [hacker1, hacker2];
const sorted = nameArr.sort();
if(hacker1== sorted[0]){
  console.log("drivers name goes first");
} else{
  console.log("navigators name goes first");
}




// Iteration 2: Conditionals


// Iteration 3: Loops
