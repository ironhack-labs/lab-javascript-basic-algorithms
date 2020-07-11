// Iteration 1: Names and Input
console.log("Driver");

let hacker1 = "Diogo";
console.log(`The driver's name is ${hacker1} `);

let hacker2= "Victor";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters `);
    
    
}   else if (hacker1.length < hacker2.length){
    console.log(`It seems the navigator has the longest name, it has ${hacker2.length} characters`);

}   else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters `);
}
    

// Iteration 3: Loops
let resultado = hacker1.toUpperCase().split("").join(" ");
    console.log(resultado); 
let reverso = hacker2.split("").reverse().join("");
    console.log(reverso);

let lexocografico = hacker1.localeCompare(hacker2);
    
    
    if(lexocografico === -1){
        console.log(`The driver's name goes first. `);
    } else if (lexocografico === 1){
        console.log(`Yo, the navigator goes first definitely.`);
    }else {
        console.log("What ?! You both have the same name ? ");
    }
  
  //Bonus one
  
  
let paragrafo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, odio ultrices varius imperdiet, nunc sem luctus felis, id condimentum libero ex in dui. Duis gravida purus sit amet nisi feugiat ornare. Nunc ac mauris justo. Duis volutpat, felis in blandit iaculis, erat magna sagittis augue, in placerat nulla sem in ex. Aliquam a erat blandit, aliquam quam ut, tempus ante. Sed mollis nunc a quam laoreet sollicitudin. Nunc quis lectus mollis, porta ante a, tempor sem. Nullam quis gravida nisl, vitae suscipit purus. Ut ac metus suscipit, viverra nulla in, volutpat urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque elementum orci sit amet dapibus maximus. Suspendisse potenti. Duis vitae nibh tincidunt, fringilla ipsum non, tristique mauris. Nulla ornare ut ligula quis fermentum. Vivamus ut risus vel quam sagittis pharetra non ut magna. Vivamus a aliquam lorem. Morbi non risus massa. Quisque erat ipsum, luctus nec tincidunt ut, egestas ut lorem. Praesent malesuada neque ac tortor dapibus, ut vestibulum lectus commodo. Donec a purus et risus faucibus vehicula. Nunc efficitur purus felis, eget rutrum diam vehicula ut. Nulla condimentum eleifend purus, nec accumsan lacus hendrerit vel. Duis ut fermentum leo, ac porttitor sem. Mauris luctus orci augue, vel ultrices lorem vestibulum in. Etiam tincidunt vitae ligula sit amet condimentum. Integer auctor consequat sem non faucibus. Mauris tempus nulla ornare, sodales elit quis, posuere nulla. Praesent tincidunt urna turpis, sed tempus nibh vulputate eu. Nunc sollicitudin quam urna, nec ultricies nibh lacinia non. Etiam tincidunt quam condimentum mollis pulvinar. Vestibulum viverra nulla sem, ut vehicula magna ornare quis. Suspendisse sed vehicula nunc.";

let pg1 = paragrafo.split(" ");
    console.log(pg1.length);
   
//

let etCount = 0;
    
for(i=0; i<pg1.length; i++){
    console.log(i);
    if(pg1[i]==="et"){
        etCount +=1;
       

    }
}
console.log(etCount);

//Bonus 2

let phraseToCheck = "Race car";

let phraseToCheckReversed = phraseToCheck.split(" ").join("").reverse()
    console.log(phraseToCheckReversed);
    

    for(i=0; i<bonus.length; i++){
        console.log(i);
        

     }