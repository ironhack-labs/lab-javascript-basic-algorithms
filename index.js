// Iteration 1: Names and Input
let hacker1= prompt(`enter driver's name`);
let hacker2=prompt(`enter navigators's name`);
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length>hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length}.`)
    
} else if(hacker1.length<hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    
}else{console.log(`Wow, you both have equally long names, ${hacker1.length||hacker2.length} characters!`);}
// Iteration 3: Loops
let driversName;
let reversNavName;
function compareStrings(str1, str2) {
    return str1.localeCompare(str2);
}

reversNavName=hacker2.split("").reverse().join("")
let lexicopgraphicTex=(compareStrings(hacker1,hacker2))

driversName= hacker1.split("").join(" ");
if (lexicopgraphicTex>=1) {
	console.log(`The navigator's name goes first, definitely=> ${reversNavName.toUpperCase()}`);
	console.log(`The driver's name is=> ${driversName.toUpperCase()}`);
} else if (lexicopgraphicTex<0 ){
	
	console.log(`The driver's name goes first ${driversName.toUpperCase()}`);
	console.log(`The navigator's name is ${reversNavName.toUpperCase()}`);
}
	else{console.log(`What?! You both have the same name?${hacker1.split("").join(" ")||hacker2.split("").join(" ")}`);

}




