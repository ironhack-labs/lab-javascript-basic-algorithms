// Iteration 1: Names and Input
let hacker1 = "Albert";
console.log("The driver's name is " + hacker1);

let hacker2 = "Driver2";
console.log("The navigator's name is " + hacker2);


// Iteration 2: Conditionals
let a = hacker1.length;
let b = hacker2.length;

if (a>b){
    console.log("The driver has the longest name, it has " + a + " characters.");
    
} else if(a<b) {
    console.log("It seems that the navigator has the longest name, it has " + b+ " characters.");
    
} else if(a==b) {
    console.log("Wow, you both have equally long names, "+ a +" characters!");
    
} else {
    console.log('error');
    
}

let abc = "";
// Iteration 3: Loops
for (i=0; i<hacker1.length; i++) {
    // console.log(hacker1[i])
    abc += hacker1[i].toUpperCase() + " ";
    

}
console.log(abc)


let bbb = "";
let ccc = "";
// Iteration 3: Loops
for (i=0; i<hacker1.length; i++) {
    // console.log(hacker1[i])
    var yy = hacker1.length -1; //6
    // console.log(yy);
    
    ccc += hacker1[yy-i];
    console.log();
    if(i>0) {
        
        bbb += hacker1[yy-i];
    }
    

}

console.log(ccc)

let asplit = hacker1.slice(0,1);
let bsplit = hacker2.slice(0,1);
console.log(asplit);

if (asplit>bsplit) {
    console.log("kek")
}

function compareStrings(str1, str2) {
    return str1.localeCompare(str2);
}

console.log(compareStrings(hacker1, hacker2))

if (compareStrings(hacker1, hacker2)<1){
    console.log("The driver's name goes first.");
    
} else if(a<b) {
    console.log('Yo, the navigator goes first, definitely.');
    
} else {
    console.log('What?! You both have the same name?');
    
}