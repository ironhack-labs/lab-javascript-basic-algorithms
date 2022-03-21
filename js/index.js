let hacker1 = "John"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Alex"
console.log(`The navigator's name is ${hacker2}`)

if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else{
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
};

function separete(s){
    return s.split("").join(" ");
};
function reverse(r){
  return r.split("").reverse().join("");
};

let separete1 = separete(hacker1);
console.log(separete1.toUpperCase());

let reverse1 = reverse(hacker2);
console.log(reverse1);


let lexical = [hacker1, hacker2];
lexical.sort();
console.log(lexical)

if(lexical[0] === hacker1){
  console.log("the driver's name goes firts")
} else if (lexical[0] === hacker2){
  console.log("Yo, the navigator goes first definitely")
} else{
  console.log("What?! You both have the same name?")
}
