var hacker1 = "gabriel";

console.log("The driver's name is "+hacker1);

var hacker2 = window.prompt("Navigator's name");

console.log("The navigator's name is "+hacker2);

if(hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has "+hacker1.length+" charecters");
}else if(hacker2.length > hacker1.length){
    console.log("Yo, navigator got the longest name, it has "+hacker2.length+" charecters");
}else{
    console.log("wow, you both got equally long names, "+hacker1.length+" charecters!!");
}

var hacker1Caps = "";

for(i in hacker1){
    hacker1Caps = hacker1Caps + hacker1[i].toUpperCase() + " ";
}

console.log(hacker1Caps);

var hacker2Reverse = "";

for(var i = hacker2.length; i > 0; i--){
    hacker2Reverse = hacker2Reverse + hacker2[i-1];
}

console.log(hacker2Reverse);

if(hacker1 > hacker2){
    console.log("The driver's name goes first");
}else if(hacker2 > hacker1){
    console.log("Yo, the navigator goes first definitely")
}else{
 console.log("What?! You both got the same name?");
}
