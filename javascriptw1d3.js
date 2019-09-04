let hacker1 = "John";
console.log ("the driver's name is " + hacker1);


let hacker2 = "Ana";
console.log ("the navigator's name is " + hacker2);



if (hacker1.length > hacker2.length){
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length){ 
    console.log("Yo, Navigator has the longest name, it has " + hacker2.length + " characters")
} else if (hacker1.length === hacker2.length){
    console.log("Wow, you both got equally long names " + hacker1.length + " characters")
}

let separatedName = ""
for(i = 0; i < hacker1.length; i += 1){
    separatedName += hacker1.charAt(i).toUpperCase() + " "; 
}
console.log(separatedName);

let reverseName = ""
for(i = hacker2.length - 1; i >= 0; i -= 1){
    reverseName += hacker2.charAt(i); 
}
console.log(reverseName);

let lexicographic = hacker1.localeCompare(hacker2);

if(lexicographic === 0){
    console.log("What?! You both got the same name?")
} else if (lexicographic < 0){
    console.log ("The driver's name goes first")
} else {
    console.log ("Yo, the navigator goes first definitely")
}