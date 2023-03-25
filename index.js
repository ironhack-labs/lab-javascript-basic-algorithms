// Iteration 1: Names and Input
let hacker1 = "Jessica";
let hacker2 = "Reshma";

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
// 3.1
let hacker1Splitted = hacker1.split('');
let hacker1WithSpace = hacker1Splitted.join(' ');
console.log(hacker1WithSpace.toUpperCase());

//3.2
let hacker2Splitted = hacker2.split('');
let hacker2Reverse = hacker2Splitted.reverse();
let hacker2AfterReverse = hacker2Reverse.join('');
console.log(hacker2AfterReverse);

//3.3
for(let i=0; i< hacker1.length;i++){
    if(hacker1[i]<hacker2[i]){
        console.log("The driver's name goes first");
        break;
    }else if (hacker1[i]>hacker2[i]){
        console.log("Yo, the navigator goes first definitely");
        break;
    }else  if (hacker1[i]===hacker2[i]){
        console.log ("What? you both have the same name" );
    }else {
        break;
    }
}

//Bonus 1
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra, orci et elementum blandit, libero eros cursus ex, nec aliquam massa odio vitae elit. Quisque ut pellentesque nisi. Cras scelerisque mauris vitae nunc commodo ullamcorper. Cras et tellus erat. Aliquam eu fringilla leo, sed maximus mi. Proin egestas metus vel egestas egestas. Suspendisse potenti. Morbi mauris neque, rhoncus in urna sit amet, maximus sodales metus. Cras ullamcorper suscipit nibh sit amet viverra. Donec id tincidunt leo. Nunc egestas risus eu orci aliquam, a cursus sem pharetra. Proin eleifend ornare condimentum. Vivamus vehicula lectus quis pellentesque pretium. Quisque risus velit, pretium ac blandit eget, tempor eu tellus. Aenean nec purus porta, viverra est eget, hendrerit risus. In hac habitasse platea dictumst. In feugiat vehicula quam sed pharetra. Sed felis urna, maximus et lectus nec, lacinia varius velit. Praesent at imperdiet nisi. Nulla facilisi. Quisque sagittis ante condimentum diam malesuada commodo. Pellentesque ante ante, rhoncus ut erat non, sollicitudin scelerisque enim. Pellentesque a justo sit amet tellus convallis tempor. Sed mollis ullamcorper convallis. Suspendisse in ex odio. Nam et lectus ac purus porttitor scelerisque. Sed luctus, lacus at finibus porta, enim lectus interdum ipsum, vitae bibendum dui massa nec elit. In pretium nibh eu lectus egestas, sit amet lacinia augue hendrerit. Sed ullamcorper semper neque, et varius tellus consectetur elementum. Cras id urna euismod, lobortis felis at, rhoncus mi. Curabitur feugiat et eros non semper. Donec sollicitudin mattis sapien, id viverra elit tempor eu. Etiam erat lorem, cursus ac condimentum et, varius faucibus est. Nunc commodo efficitur dictum. Vestibulum scelerisque efficitur pharetra. Fusce mi ligula, suscipit non lacus sed, feugiat mollis tortor. Curabitur mattis nulla mi, vitae cursus dolor fringilla gravida. Phasellus sit amet tempus tellus. Nullam sit amet interdum velit, vitae faucibus erat..";


let countEt = 0
for(let i=0; i<longText.length;i++){
    if (longText[i] === 'e' && longText[i+1] === 't'){
        countEt ++
    }
}
console.log(`The number of times the Latin word 'et' appears is: ${countEt}`)