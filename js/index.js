// Iteration 1: Names and Input

let name1= "pablo";
let name2= "elizabeth";
console.log(name2);

// Iteration 2: Conditionals


if(name1.length >name2.length){
console.log(`el nombre mas largo es ${name1} y tiene ${name1.length} caracteres`);
}
else if(name1.length <name2.length) {
console.log(`el nombre mas largo es ${name2} y tiene ${name2.length} caracteres`);
}

else {
console.log(`Los 2 nombres tienen los mismos caracteres`);

}


}
// Iteration 3: Loops
let name1= "elizabeth";
let name2= "pablo";
let masLargo= "";

if(name1.length >name2.length){
console.log(`el nombre mas largo es ${name1} y tiene ${name1.length} caracteres`);
masLargo= name1;
}
else if(name1.length <name2.length) {
console.log(`el nombre mas largo es ${name2} y tiene ${name2.length} caracteres`);
masLargo= name2;

}

else {
console.log(`Los 2 nombres tienen los mismos caracteres`);

}
console.log(masLargo.split("").join(" ").toUpperCase());