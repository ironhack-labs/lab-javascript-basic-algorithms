// Iteration 1: Names and Input
let hacker1 = "Victor";
console.log ("The driver's name is",hacker1);
let hacker2 = "Esternocleidomastoideo";
console.log ("The navigator's name is",hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);

// Iteration 3: Loops

// hacker1 name uppercased
let hackerfinal = ""

let newHacker1 = hacker1.toUpperCase()
for (let i= 0; i < newHacker1.length; i++){
    hackerfinal = hackerfinal += `${newHacker1[i]}`
}
console.log(hackerfinal);
}
// hacker 2 backwards
for (let i= hacker2.length-1; i >= 0; i--){
    console.log(hacker2[i])
  }
  
//lexicographical order
for (let i= 0; i >= 0; i){
    if(hacker1[i] > hacker2[i]){
      console.log("The driver's name goes first")
      break;
  
    }else if (hacker1[i] < hacker2[i]){
      console.log("Yo, the navigator goes first definitely")
      break;
  
    } else if (i < hacker1.length || i < hacker2.length){
      i++
      console.log("What!? You both have the same name?")
  
    }
  }