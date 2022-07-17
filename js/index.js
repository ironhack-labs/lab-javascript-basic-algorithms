// Iteration 1: Names and Input
let hacker1="david";
console.log(`The driver's name is ${hacker1}`);
let hacker2="David";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
// 3.1
let capDriver = hacker1.toUpperCase();
let result = ``;
for (let i=0; i<capDriver.length; i++){
    if (i === capDriver.length -1){
        result += capDriver[i];
    }else{
        result += capDriver[i] + ' ';
    }
}

console.log(result);

//3.2

let revDriver = ``;

for (let i=hacker1.length-1; i>=0; i--){
    revDriver += hacker1[i];
}
console.log(revDriver);

//3.3
let foundFirst = false;
let i=0;
let res = 0;
let shorter = hacker1;

if (hacker2.length < hacker1.length){
    shorter = hacker2;
}

while(!foundFirst && i<shorter.length){
    if (hacker1[i]<hacker2[i]){
        res = 1;
        foundFirst = true;
    }else if (hacker2[i]<hacker1[i]){
        res = 2;
        foundFirst = true;
    } // else continue
    i += 1;    
}

console.log(res);
if (!foundFirst && hacker1.length == hacker2.length){
    res = 0;
}else if (!foundFirst && shorter === hacker1){
    res = 1;
}else if(!foundFirst && shorter === hacker2) { // son iguales
    res=2;
}
let lexicographic;

switch(res){
    case 0:
        lexicographic = `What?! You both have the same name?`;
        break;
    case 1:
        lexicographic = "The driver's name goes first.";
        break;
    case 2:
        lexicographic = "Yo, the navigator goes first definetly."
        break;

}
console.log(i); 
console.log(lexicographic);


// bonus 1

let loreStr = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo orci at odio sodales, sit amet viverra nulla semper. Cras ultrices efficitur nulla et mattis. Maecenas tincidunt sit amet nisl venenatis fermentum. Nulla interdum augue ex, vitae malesuada libero tristique id. Proin sagittis felis ligula, quis lacinia massa efficitur elementum. Proin vulputate diam nisl, ut maximus augue tristique eget. Integer mollis laoreet enim in pretium. Vivamus vel ullamcorper quam. Praesent sit amet mollis metus. Donec vitae leo et tellus commodo rutrum id a nisl. Donec tempus ultrices magna, id semper elit blandit eget. Praesent dui arcu, semper sed nunc ac, maximus sollicitudin odio. Ut vitae turpis non metus ultrices pulvinar vitae nec magna. Suspendisse ac tempor enim, non gravida magna.

Quisque molestie mauris quis libero faucibus, sit amet cursus justo commodo. Nam eget ipsum a lorem varius elementum. Etiam commodo, tortor eget interdum pretium, tellus massa dignissim nisl, vel lobortis felis magna non enim. Praesent augue lacus, maximus quis mattis at, condimentum ac ante. Fusce tempus arcu a neque blandit, vitae gravida nulla auctor. Donec metus quam, semper vitae tellus ornare, varius molestie risus. Aliquam augue orci, venenatis a velit nec, consectetur varius justo. Praesent et metus eget augue maximus feugiat. Nullam sit amet enim urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Vivamus ac nisi ut ante euismod rutrum. Maecenas velit diam, posuere a hendrerit id, lacinia eget metus. Aliquam feugiat velit tellus. Sed dolor tellus, placerat id neque sed, condimentum varius augue. Vivamus fringilla quam nunc, suscipit ultrices magna consectetur vitae. Etiam laoreet iaculis blandit. Sed vehicula pulvinar velit vulputate sodales. Vivamus faucibus ultrices sem at sodales. Morbi quis turpis ut orci pharetra iaculis non nec sem. Vestibulum eget est vel nibh malesuada faucibus. Vestibulum sed augue ligula. Curabitur aliquet, nulla vestibulum faucibus ultricies, lacus metus suscipit ligula, id rhoncus tortor lacus et nulla. Pellentesque condimentum eget turpis ac tempus. Donec rhoncus mauris nec elit maximus placerat. Curabitur auctor augue ut tortor venenatis fringilla. Sed porttitor scelerisque augue, eu egestas libero dictum bibendum.`


