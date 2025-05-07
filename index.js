// // Iteration 1: Names and Input
// let hacker1 = "Maedeh";
// console.log(`The driver's name is ${hacker1}`);

// let hacker2 = "Rishi";
// console.log(`The navigator's name is ${hacker2}`);

// // Iteration 2: Conditionals
// let hacker1Length = hacker1.length;
// let hacker2Length = hacker2.length;

// if (hacker1Length === hacker2Length){
//     console.log(`Wow, you both have equally long names, ${hacker1Length} characters!.`);
// }
// else if(hacker1Length > hacker2Length){
//     console.log(`The driver has the longest name, it has ${hacker1Length} characters.`)
// }
// else{
//     console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`)
// }


// // Iteration 3: Loops
// let result = ``;

// for (let i = 0; i < hacker1.length; i++){
//     result += (hacker1[i].toUpperCase() + " ");  
// }
// console.log(result)



// let reverseHacker2 =``;

// for (let j = hacker2.length -1; j >= 0 ; j--){
//    reverseHacker2 += (hacker2[j])
// }
// console.log(reverseHacker2)


// // ?????
// if(hacker1 < hacker2){
//     console.log("The driver's name goes first.");
// } 
// else if(hacker1 > hacker2){
//     console.log("Yo, the navigator goes first, definitely.");
// }
// else{
//     console.log("What?! You both have the same name?");
// }

// for (let x = 0; x < hacker1.length; x++){
//         if(hacker1[x] < hacker2[x]){
//             console.log("The driver's name goes first.");
//             break;
//         } 
//         else if(hacker1[x] > hacker2[x]){
//             console.log("Yo, the navigator goes first, definitely.");
//             break;
//         }
       
    
// }


let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 Praesent tempus urna ac mauris dignissim, id faucibus neque efficitur. 
 Mauris lobortis neque id eros sodales, ut ultricies sapien aliquet. 
 Vestibulum at sem a ex facilisis scelerisque. Integer a condimentum ante, 
 vitae dignissim mauris. Sed risus felis, finibus id nulla eu, ultrices rhoncus enim.
  Integer non arcu dolor. Mauris vestibulum rhoncus odio, sit amet efficitur lacus porta non.
   Pellentesque volutpat sodales ultrices.

Curabitur blandit lacus vel enim imperdiet consequat. Mauris eget posuere felis,
 sit amet consequat risus. Fusce at fermentum libero. 
 Phasellus tempus sapien eu dignissim placerat. Etiam dui tellus, placerat non posuere vitae, 
 ultrices sed lacus. Praesent eget neque eu enim sodales tempor. Fusce vehicula nulla libero, 
 eget dapibus risus vulputate id. Interdum et malesuada fames ac ante ipsum primis in faucibus.
  Sed finibus efficitur odio, in cursus tortor viverra eu. Maecenas massa ligula, efficitur vitae dui in, cursus laoreet nibh. 
  Sed eleifend nec dui vel placerat. Suspendisse eget est justo. 
  Fusce sed ex porttitor nulla euismod pellentesque eu a augue.

Phasellus dapibus nibh eu ipsum scelerisque, quis imperdiet justo consectetur. 
Curabitur eget est erat. Duis lectus enim, commodo a lacinia nec,
 sagittis eget quam. Donec aliquam libero eget quam vulputate, luctus ornare urna ultrices.
  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
   Etiam commodo metus quis erat vestibulum aliquam. Proin iaculis tellus sit amet purus pulvinar,
    eget commodo mauris feugiat. Nullam vel nisl et neque consectetur faucibus eu non mauris.
     In luctus justo nec mi rutrum tincidunt. Maecenas vulputate metus vel purus ultrices, ut scelerisque est malesuada.`;


     let counter = longText.split(" ");

     console.log(counter.length)