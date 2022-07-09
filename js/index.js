// Iteration 1: Names and Input
let hacker1="aamigoa";
console.log(`The driver's name is ${hacker1}`);
let hacker2="aamigoa";
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

let lorestr = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus metus erat, dignissim sed condimentum id, pharetra vel mauris. Praesent non felis non enim dapibus suscipit. Aliquam nibh nulla, luctus vitae magna maximus, auctor fermentum neque. Integer lacinia mattis mi, vel tristique nibh placerat quis. Aliquam lacinia mauris quam, eu dapibus ipsum interdum a. Donec ac blandit eros. Donec scelerisque molestie pulvinar. Integer quis velit rhoncus, egestas quam eget, efficitur tortor. Phasellus cursus dui non sagittis auctor. Integer convallis leo non dapibus maximus. In euismod dapibus porta. Nullam quis mattis est. Morbi non egestas nunc. Proin placerat, mi in maximus consequat, mi quam dictum quam, quis sodales dui sem vel diam. Nulla mauris sem, congue sit amet ante id, varius fermentum odio. Integer facilisis elit eu lacinia vehicula.

Quisque gravida odio ac semper ultricies. Aliquam in ornare leo. Integer in dolor et ex commodo placerat. Aliquam pulvinar condimentum laoreet. Integer tincidunt ex sed libero tempus viverra. Nunc pretium nisi nec sem sagittis, at porta sapien euismod. Nulla facilisi. Curabitur risus justo, condimentum ornare lacus facilisis, blandit pulvinar risus. Etiam vitae velit placerat, tincidunt risus ut, elementum tellus. Cras fringilla accumsan luctus. Nulla felis nunc, sagittis vel nunc ut, faucibus feugiat odio. Curabitur pellentesque facilisis porta. Fusce ullamcorper porttitor lorem sagittis dignissim. Etiam mattis leo nec magna cursus semper. Morbi ut odio nec velit faucibus semper in sit amet ex.

Aenean sit amet leo mi. Aliquam ornare eget leo accumsan tempus. Proin congue mauris lacus, quis laoreet elit ornare vitae. Quisque quis ante elit. Phasellus ultricies eleifend turpis, sit amet posuere eros vehicula sit amet. Nunc libero leo, molestie ac porttitor eu, tincidunt vitae orci. Maecenas ac neque varius, mollis lorem et, tristique dui.`

    
