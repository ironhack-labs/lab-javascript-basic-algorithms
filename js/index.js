// Iteration 1: Names and Input
// 
let hacker1 = "Carolina";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Bob";
console.log(`Ther navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);

}else if (hacker1.length = hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops
let hackerName = "";

for(let i=0; i<hacker1.length; i++) {
    hackerName += hacker1[i].toUpperCase() + " ";
}
console.log(hackerName);

let reverseHackerName = "";

for(let i = hacker2.length; i >= 0; i--) {
    reverseHackerName += [hacker2[i]];
}
console.log(reverseHackerName);



for(let i = 0; i<hacker1.length; i++){
    if (hacker1 == hacker2){
        console.log("What?! You both have the same name?");
        break
    }else if(hacker1.charCodeAt(i) == hacker2.charCodeAt(i)) {
        continue
    }  
    else if(hacker1.charCodeAt(i) < hacker2.charCodeAt(i)){
        console.log(`The driver's name goes first.`);
        break
    }else if(hacker1.charCodeAt(i) > hacker2.charCodeAt(i)) {
        console.log("Yo, the navigator goes first definitely.");
        break
    }
}
