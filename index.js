// Iteration 1: Names and Input

//1.1
/*const hacker1="cherry"
console.log(`The driver's name is ${hacker1}`)

//1.2
const hacker2="david"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

// 2.1

/*if ( hacker1.length<hacker2.length){
    console.log(`The driver has the longest name, it has XX characters.`)
 }
 else if(hacker1.length>hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters`)
 }
 else{
    console.log (`Wow, you both have equally long names, XX characters!`)
 }
 */

// Iteration 3: Loops

//3.1

/*let hacker1 ="cherry"

const driver1= hacker1.toUpperCase()
let newDriver = ""

for (let i = 0; i < driver1.length; i++){
  newDriver += driver1[i] + " "
     }
console.log(newDriver)*/

//3.2

/*const hacker2="david"
let nameReverse= ""
for(let i=hacker2.length-1; i>=0; i-- ){
  const result = hacker2[i];
  nameReverse += result;
}
console.log(nameReverse); */

//3.3
/*const hacker1 = "cherry";
const hacker2 = "david";

const result = hacker1.localeCompare(hacker2);
console.log(result);
if (result === -1) {
  console.log(`The driver's name goes first.`);
} else if (result === 1) 
  console.log(`Yo, the navigator goes first definitely.`);
} else console.log(`What?! You both have the same name?`);*/

//Bouns1
/*const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nulla purus, laoreet eget ex a, eleifend gravida quam. Nullam placerat dignissim tempus. Sed non nibh in augue tristique dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean luctus ante vitae ligula pulvinar, ut porttitor felis tristique. Donec nec efficitur mauris. Nam scelerisque felis quis tincidunt malesuada. In pharetra fringilla elit id mollis. Proin varius posuere ligula, scelerisque pulvinar lectus dignissim vitae. Proin in porta tortor. Praesent eget odio vitae magna varius aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer ornare turpis pulvinar, tristique sapien sit amet, semper arcu. Maecenas fringilla velit nec sodales tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum aliquam ligula a velit molestie rutrum.Fusce ante libero, pretium a libero ut, sagittis molestie elit. Cras non facilisis lacus. Cras fringilla bibendum est in efficitur. Fusce suscipit sagittis nisl ac vehicula. Curabitur hendrerit eleifend dui eu vestibulum. Nam congue diam nec lectus ornare posuere. Duis condimentum, nisl mollis imperdiet accumsan, justo enim tempus nunc, id porta nisi augue eget neque. Aliquam nec quam tellus.Pellentesque dignissim vulputate urna, ac tincidunt tellus pellentesque sit amet. Integer eget laoreet libero, et convallis turpis. Etiam lacinia ultrices mi, sollicitudin pharetra risus. Fusce id quam at sapien aliquam molestie sed a ante. Donec faucibus, orci eu aliquam pretium, libero mauris sodales est, et vestibulum quam ligula quis nisi. Aliquam condimentum purus in lectus porta bibendum. Ut eget efficitur nisl, et varius quam. Praesent sit amet eros euismod, hendrerit mi et, sagittis purus. Cras tristique commodo dapibus. Vestibulum nec ligula nec nibh lobortis bibendum.";

let totalWords = 0;
textArray = Array.from(longText);

for (let i = 0; i < textArray.length; i++) {
  if (textArray[i] === " ") {
    totalWords++;
  }
}
console.log(totalWords);*/

//Bouns2

/*const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nulla purus, laoreet eget ex a, eleifend gravida quam. Nullam placerat dignissim tempus. Sed non nibh in augue tristique dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean luctus ante vitae ligula pulvinar, ut porttitor felis tristique. Donec nec efficitur mauris. Nam scelerisque felis quis tincidunt malesuada. In pharetra fringilla elit id mollis. Proin varius posuere ligula, scelerisque pulvinar lectus dignissim vitae. Proin in porta tortor. Praesent eget odio vitae magna varius aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer ornare turpis pulvinar, tristique sapien sit amet, semper arcu. Maecenas fringilla velit nec sodales tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum aliquam ligula a velit molestie rutrum.Fusce ante libero, pretium a libero ut, sagittis molestie elit. Cras non facilisis lacus. Cras fringilla bibendum est in efficitur. Fusce suscipit sagittis nisl ac vehicula. Curabitur hendrerit eleifend dui eu vestibulum. Nam congue diam nec lectus ornare posuere. Duis condimentum, nisl mollis imperdiet accumsan, justo enim tempus nunc, id porta nisi augue eget neque. Aliquam nec quam tellus.Pellentesque dignissim vulputate urna, ac tincidunt tellus pellentesque sit amet. Integer eget laoreet libero, et convallis turpis. Etiam lacinia ultrices mi, sollicitudin pharetra risus. Fusce id quam at sapien aliquam molestie sed a ante. Donec faucibus, orci eu aliquam pretium, libero mauris sodales est, et vestibulum quam ligula quis nisi. Aliquam condimentum purus in lectus porta bibendum. Ut eget efficitur nisl, et varius quam. Praesent sit amet eros euismod, hendrerit mi et, sagittis purus. Cras tristique commodo dapibus. Vestibulum nec ligula nec nibh lobortis bibendum.";
let word = "et";
let totalEt = 0;
for (let i = 0; i < longText.length; i++) {
  if (longText.slice(i, i + word.length) === word) {
    totalEt++;
  }
}

console.log(totalEt);*/
