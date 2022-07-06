// Iteration 1: Names and Input

let hacker1 = "John";
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Jason";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let hacker1SpaceCaps = "";
let hacker2Reverse = "";
for (let i = 0; i <= hacker1.length - 1; i++ ){
    hacker1SpaceCaps += (hacker1[i].toUpperCase() + " ")
}
for (let i = hacker2.length - 1; i >= 0; i--){
     hacker2Reverse += hacker2[i];
}
console.log(hacker1SpaceCaps);
console.log(hacker2Reverse);

if ((hacker1SpaceCaps.localeCompare(hacker2Reverse)) === 1){
    console.log(`The driver's name goes first.`)
} else if ((hacker1SpaceCaps.localeCompare(hacker2Reverse)) === -1){
    console.log(`Yo, the navigator goes first definitely.`)
} else {
    console.log(`What?! You both have the same name?`)
}

// let lorum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia ullamcorper aliquet.
// Phasellus ut varius purus. Nulla suscipit suscipit sem, in aliquet dui laoreet a. Aenean lectus elit, sodales et magna id,
// suscipit sagittis augue. Curabitur nec lacinia turpis. Proin pharetra urna ante, a sagittis nisi imperdiet in.
// Nunc rhoncus dapibus quam ac mattis. Nullam scelerisque ex ut scelerisque venenatis. Suspendisse condimentum arcu sit amet
// molestie lobortis. Vestibulum imperdiet ipsum vel mollis pharetra. Integer ac tempor urna. Quisque sed commodo metus. Mauris
// ante augue, faucibus vitae quam et, accumsan volutpat lectus. Pellentesque sed ante vehicula, tincidunt ligula ac, blandit
// dolor. Suspendisse imperdiet orci sit amet urna euismod, ut dapibus elit scelerisque. Vivamus sagittis maximus nibh placerat interdum.
// Donec convallis velit sed tincidunt gravida. Duis a sollicitudin enim, id viverra nulla. Duis volutpat arcu purus, sit amet
// tincidunt felis vestibulum sed. Donec ornare tortor a turpis eleifend maximus. Aliquam erat volutpat. Nunc vitae sapien finibus,
// luctus neque sollicitudin, hendrerit leo. Ut cursus dui at arcu consequat, eu gravida nibh viverra. Etiam porttitor, mauris ac 
// maximus placerat, justo odio pharetra dui, at tristique leo justo blandit dui. Donec rhoncus ipsum at felis vestibulum,
//  nec bibendum dolor vestibulum. Fusce fringilla lectus et porta accumsan. Quisque turpis urna, eleifend convallis posuere eu,
//   dapibus vel nisl. Nam bibendum justo lectus, nec aliquam lectus volutpat sed. Nunc feugiat hendrerit ante non feugiat. 
//   Vivamus nibh augue, pellentesque at turpis id, facilisis varius turpis. Donec tempus vitae lectus eu ultrices. Donec risus 
//   tellus, tristique at tortor id, scelerisque imperdiet elit. Integer at hendrerit lacus. Cras vitae rutrum tortor. Vestibulum 
//   mattis turpis eros.`

// for (let i = 0; i <= lorum.length - 1; i++){
//     console.log(i);
//     for (let i = 0; i <=lorum.length; i++){
//         if(` et `){
//             console.log('ET');
//         } else {
//             continue;
//         }
//     }
// }