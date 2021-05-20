console.log(`I'm ready!`);

// Iteration 1: Names and Input

let hacker1 = `Hannes`;
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = `Christin`;
console.log(`The navigator's name is ${hacker2}.`);



// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {

console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);

} else if (hacker2.length > hacker1.length) {

  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);

} else {

  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops

//3.1

let result = '';

for (character of hacker1) {
result += character.toUpperCase() + " ";

}
console.log(result);

// 3.2

let result2 = '';

for (let i = hacker2.length - 1; i >= 0; i--) {
  result2 += hacker2[i];
}

console.log(result2);

// 3.3

if (hacker1 > hacker2) {
  console.log(`The driver's name goes first.`);
} else if (hacker2 > hacker1) {
  console.log(`Yo, the navigator goes first definitely`);
} else {
  "What?! You both have the same name?"
}


// Bonus 1

let thisIsNuts = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl condimentum id venenatis a. Id leo in vitae turpis. Accumsan sit amet nulla facilisi. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Consequat ac felis donec et odio pellentesque diam volutpat. Morbi tincidunt ornare massa eget. A diam sollicitudin tempor id eu. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. In massa tempor nec feugiat nisl pretium fusce id. Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Vel orci porta non pulvinar neque laoreet. Ac odio tempor orci dapibus ultrices in iaculis nunc. Quis lectus nulla at volutpat diam. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Eget aliquet nibh praesent tristique magna. Id faucibus nisl tincidunt eget nullam. Sit amet venenatis urna cursus eget nunc scelerisque. Varius morbi enim nunc faucibus a. In egestas erat imperdiet sed. Iaculis nunc sed augue lacus viverra. Consequat ac felis donec et odio pellentesque diam volutpat commodo. Mi eget mauris pharetra et ultrices neque ornare. Metus vulputate eu scelerisque felis imperdiet. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Tellus orci ac auctor augue mauris augue neque gravida in. Nec dui nunc mattis enim ut tellus elementum. Semper eget duis at tellus at urna condimentum mattis. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Est velit egestas dui id. Dictumst quisque sagittis purus sit. Eget nullam non nisi est sit amet. Convallis convallis tellus id interdum velit laoreet. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Lorem mollis aliquam ut porttitor. Suspendisse sed nisi lacus sed viverra tellus.`

let result3 = 0;

for (character of thisIsNuts) { 
  if (character && ' ') {
    result3++;
  }
}
result3 += 1;

console.log(result3);
