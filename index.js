// Iteration 1: Names and Input

let hacker1 = "Mario"
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Félix"
console.log(`The driver's name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if(hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
}

// Iteration 3: Loops

let driverCapital = hacker1.toUpperCase();
let driverSep = "";

for(let i = 0; i < hacker1.length; i++){
    
    driverSep += driverCapital[i] + " ";
}

console.log(driverSep.trimEnd());


let reversedName = "";

for(let i = hacker2.length-1; i >= 0; i--){
reversedName += hacker2[i];

}

console.log(reversedName);


if(hacker1 > hacker2){
    console.log(`The driver's name goes first.`)
} else if (hacker1 < hacker2){
    console.log(`Yo, the navigator goes first, definetly.`)
} else if(hacker1 === hacker2){
    console.log(`What?! You both have the same name?`)
}
// Bonus 1


const longText = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque tortor vitae ante commodo, eu elementum sapien fermentum. Proin tincidunt purus vitae purus tincidunt, et aliquam velit euismod. Aliquam fermentum dolor in convallis ultrices. Sed laoreet ornare vulputate. Morbi dapibus mauris nec felis laoreet rhoncus sit amet in massa. Suspendisse magna metus, aliquet sit amet ex vitae, egestas sollicitudin nibh. Curabitur rhoncus lacinia urna ut varius. Donec tristique lectus dolor, a eleifend justo imperdiet a. Duis faucibus nisl eu cursus molestie. Pellentesque lobortis, tellus sed aliquet tincidunt, enim risus accumsan ligula, sit amet congue dui enim eget libero. Nunc commodo vehicula sodales. Duis a pretium libero. Suspendisse quis tincidunt urna, eget pulvinar sapien. Vivamus ultrices sodales euismod. Nullam pellentesque imperdiet ullamcorper. Sed volutpat augue id blandit commodo. Cras rutrum elit quis leo lacinia, vel dapibus ex iaculis. Maecenas tincidunt sapien ut dictum dapibus. Etiam venenatis lacus interdum est bibendum semper. Phasellus a elit rhoncus sem blandit lobortis vel vitae augue. Nunc arcu justo, aliquet vel tortor faucibus, interdum finibus lorem. Suspendisse potenti. Integer rhoncus placerat arcu sed scelerisque. Nunc dapibus quam libero, interdum feugiat est maximus vel. Quisque risus sem, tempor sit amet volutpat vitae, pharetra ac magna. Aliquam erat volutpat. Sed bibendum efficitur diam et rutrum. In tristique nulla lectus, vel tincidunt massa iaculis ut. Vivamus ac blandit leo. Morbi viverra nibh nec magna dignissim, luctus ultrices ipsum dignissim. Etiam ac lorem vitae lacus blandit volutpat quis sed diam. Phasellus a vestibulum augue. Aliquam erat volutpat.";
let count = 0;
for(let i = 0; i < longText.length; i++ ){
let char = longText[i]
if( char === " "){
    count ++;
}
}
console.log(count);
let count2 = 0;
for(let i = 0; i < longText.length; i++ ){
    let twoChar = longText[i] + longText[i + 1] + longText[i + 2] +  longText[i + 3];
    if( twoChar === " et " || twoChar === " et,"|| twoChar === "et."|| twoChar === "et;"|| twoChar === "et:"){ 
        count2 ++;
    }
    }
    
console.log(count2);



// Bonus 2


const palin = "A man, a plan, a canal, Panama"


let palMod = palin.toLowerCase().trim();
let comparePal ="";

 for(let i = palMod.length-1; i >= 0; i--){
   let char = palMod[i];
   comparePal += char;
 }
 
 if(palMod === comparePal){
   console.log("Es un palíndromo")
 } else {
   console.log("No es un palíndromo")
 }