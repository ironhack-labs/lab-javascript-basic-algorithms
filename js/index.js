// Iteration 1: Names and Input


const hacker1 = "Manu";
console.log(`The driver´s name is ${hacker1}`);

const hacker2 = "Edgar"
console.log(`The navigator´s name is ${hacker2}`);
// Iteration 2: Conditionals

const sizeHacker1= hacker1.length;
const sizeHacker2= hacker2.length;
if(sizeHacker1 > sizeHacker2){
    console.log(`The driver has the longest name, it has ${sizeHacker1} characters`);
} else if (sizeHacker1 < sizeHacker2) {
    console.log(`It seems that the navigator has the longest name, it has ${sizeHacker2} characters`); 
} else{
    console.log(` Wow, you both have equally long names, ${sizeHacker1} characters!.`); 
}


// Iteration 3: Loops

/*let driverName= [];
for(let i=0; i < sizeHacker1; i++){

    driverName.push(hacker1[i]);


}

console.log(driverName);

let driverName= "";
for(let i=0; i < sizeHacker1; i++){

    driverName= hacker1[i];


}

console.log(driverName);

let driverName= [];
for(let i=0; i < sizeHacker1; i++){

    driverName.push(hacker1[i]);


}
let driverString=driverName.toString();





console.log(driverString);*/

// let driverName= [];
// for(let i=0; i < sizeHacker1; i++){

//     driverName.push(hacker1[i]);
    

// }
// let driverString=driverName.toString();
// console.log(driverString);


//Ya sale bien M A N U

let driverName= "";

for(let i=0; i < sizeHacker1; i++){

    driverName += `${hacker1[i]} `
    

}

console.log(driverName.toUpperCase());



//loop 3.2

/*let driverNameBackwards= [];
for(let i=0; i < sizeHacker1; i++){
    let back=sizeHacker1-i;
    driverName.push(hacker1[back]);
    console.log(back);
    
    for(let i=0; i < sizeHacker1; i++){

    driverName += hacker1[i]


}


console.log(driverName);

}
let driverStringBack=driverNameBackwards.toString();
console.log(driverStringBack);*/

/*let driverNameBackwards= "";

for(let i=(sizeHacker1 - 1) ; i === 0; i--){
   
    driverNameBackwards += `${hacker1[i]} `
    
    
    

}

console.log(driverNameBackwards);*/

let driverNameBack= "";

for(let i=1; i <= sizeHacker2; i++){
  
    driverNameBack += `${hacker2[sizeHacker2 -i]}`
  
   }

console.log(driverNameBack);

//3.3

// var prueba = "a".localeCompare("b")
// console.log(prueba)

if((hacker1.localeCompare(hacker2)) === 1){
console.log("Your driver's name go first")
} else if((hacker1.localeCompare(hacker2)) === -1){
    console.log("Yo, the navigator goes first definitely.")
} else{
    console.log("What?! You both have the same name?")
}

//BONUS 1

let loremIpsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"

console.log(loremIpsum.split(" ").length)

console.log((loremIpsum.length-loremIpsum.split("et").length)/2)


//BONUS 2 

let phrase = "Edgar";

let match = "";

for(let i=1; i <= phrase.length; i++){
  
    match += `${phrase[phrase.length -i]}`
  
   }

   console.log(match)

   if(match.toUpperCase() === phrase.toUpperCase()) {
    console.log("It's a palindrome!");
   } else {
       console.log("Sorry! It's not a palindrome!")
   }




