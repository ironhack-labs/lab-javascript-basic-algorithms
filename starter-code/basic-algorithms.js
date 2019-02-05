// Names and Input
console.log("I'm ready");
let hacker1 = "Miguel";
console.log("The driver's name is "+ hacker1);
let hacker2 = window.prompt("What's is your name?");
console.log("The navigator's name is "+ hacker2);

//Conditionals
let hack1long = hacker1.length;
let hack2long = hacker2.length;

if (hack1long > hack2long) {
    console.log('The Driver has the longest name, it has ' + hack1long + ' characters');
}else if (hack1long < hack2long){
    console.log('Yo, navigator got the longest name, it has ' + hack2long + ' characters');
}else{
    console.log('wow, you both got equally long names, ' + hack1long + ' characters!!');
}



let arrDriver1 = [];
hacker1 = hacker1.toUpperCase();
for(let i=0;i<hacker1.length;i++){
    arrDriver1[i] = hacker1[i];
}

console.log(arrDriver1.join(" "));

let arrDriver2 = [];
let j=0;
for(let i=hacker2.length;i>-1;i--){
    arrDriver2[j] = hacker2[i];
    j += 1;
}
console.log(arrDriver2);


// Lorem ipsum generator
