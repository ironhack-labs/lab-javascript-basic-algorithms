// Iteration 1: Names and Input
// 
var hacker1 = "Fábio";
var hacker2 = "Greg";

console.log(`The driver's name is ${hacker1}.`);
console.log(`The navigator's name is ${hacker2}.`);



if(hacker1.length > hacker2.length){
    console.log(`The driver\'s name has ${hacker1.length} characters.`);
}else if(hacker2.length > hacker1.length){
    console.log( `The navigator's name has ${hacker2.length} characters`);

}else{
    console.log("What?! You both have the same name?");
}







// Iteration 3: Loops


var stringArr = hacker1.split(" ");

for (let i = 0; i < hacker1.length; i++){
    stringArr.push(hacker1[i]);
    if(i != hacker1.length -1 ){
        stringArr.push(' ');
    }

}

console.log(stringArr);


var string = "text to split";
    string = string.split(" ");
var stringArray = new Array();
for(var i =0; i < string.length; i++){
    stringArray.push(string[i]);
    if(i != string.length-1){
        stringArray.push(" ");
    }
}

console.log(string);